import ItemModel from './item/model';

export default class HistoryModule {
	static translations = null;

	currentItemID = null;

	items = new Backbone.Collection( [], { model: ItemModel } );

	active = true;

	constructor( document ) {
		/**
		 * @type {Document}
		 */
		this.document = document;

		this.selected = new Backbone.Model( {
			id: 0,
		} );

		if ( ! HistoryModule.translations ) {
			HistoryModule.translations = {
				add: elementor.translate( 'added' ),
				change: elementor.translate( 'edited' ),
				disable: elementor.translate( 'disabled' ),
				duplicate: elementor.translate( 'duplicate' ),
				enable: elementor.translate( 'enabled' ),
				move: elementor.translate( 'moved' ),
				paste: elementor.translate( 'pasted' ),
				paste_style: elementor.translate( 'style_pasted' ),
				remove: elementor.translate( 'removed' ),
				reset_style: elementor.translate( 'style_reset' ),
				reset_settings: elementor.translate( 'settings_reset' ),
			};
		}
	}

	getActionLabel( itemData ) {
		if ( HistoryModule.translations[ itemData.type ] ) {
			return HistoryModule.translations[ itemData.type ];
		}

		return itemData.type;
	}

	navigate( isRedo ) {
		const currentItem = this.items.find( ( model ) => {
				return 'not_applied' === model.get( 'status' );
			} ),
			currentItemIndex = this.items.indexOf( currentItem ),
			requiredIndex = isRedo ? currentItemIndex - 1 : currentItemIndex + 1;

		if ( ( ! isRedo && ! currentItem ) || requiredIndex < 0 || requiredIndex >= this.items.length ) {
			return;
		}

		this.doItem( requiredIndex );
	}

	setActive( value ) {
		this.active = value;
	}

	getActive() {
		return this.active;
	}

	getItems() {
		return this.items;
	}

	startItem( itemData ) {
		this.currentItemID = this.addItem( itemData );

		return this.currentItemID;
	}

	endItem( id ) {
		if ( this.currentItemID !== id ) {
			return;
		}

		this.currentItemID = null;
	}

	deleteItem( id ) {
		const item = this.items.findWhere( {
			id: id,
		} );

		this.items.remove( item );

		this.currentItemID = null;
	}

	isItemStarted() {
		return null !== this.currentItemID;
	}

	getCurrentId() {
		return this.currentItemID;
	}

	addItem( itemData ) {
		if ( ! this.getActive() ) {
			return;
		}

		if ( ! this.items.length ) {
			this.items.add( {
				status: 'not_applied',
				title: elementor.translate( 'editing_started' ),
				subTitle: '',
				action: '',
				editing_started: true,
			} );
		}

		// Remove old applied items from top of list
		while ( this.items.length && 'applied' === this.items.first().get( 'status' ) ) {
			this.items.shift();
		}

		const id = this.currentItemID ? this.currentItemID : new Date().getTime();

		let currentItem = this.items.findWhere( {
			id: id,
		} );

		if ( ! currentItem ) {
			currentItem = new ItemModel( {
				id: id,
				title: itemData.title,
				subTitle: itemData.subTitle,
				action: this.getActionLabel( itemData ),
				type: itemData.type,
			} );
		}

		currentItem.get( 'items' ).add( itemData, { at: 0 } );

		this.items.add( currentItem, { at: 0 } );

		this.updatePanelPageCurrentItem();

		return id;
	}

	doItem( index ) {
		// Don't track while restoring the item
		this.setActive( false );

		const item = this.items.at( index );

		if ( 'not_applied' === item.get( 'status' ) ) {
			this.undoItem( index );
		} else {
			this.redoItem( index );
		}

		this.setActive( true );

		const panel = elementor.getPanelView(),
			panelPage = panel.getCurrentPageView(),
			editedElementView = panelPage.getOption( 'editedElementView' );

		let viewToScroll;

		if ( $e.routes.isPartOf( 'panel/editor' ) && editedElementView ) {
			if ( editedElementView.isDestroyed ) {
				// If the the element isn't exist - show the history panel
				$e.route( 'panel/history/actions' );
			} else {
				// If element exist - render again, maybe the settings has been changed
				viewToScroll = editedElementView;
			}
		} else if ( item instanceof Backbone.Model && item.get( 'items' ).length ) {
			const historyItem = item.get( 'items' ).first();

			if ( historyItem.get( 'restore' ) ) {
				let container = 'sub-add' === historyItem.get( 'type' ) ?
					historyItem.get( 'data' ).containerToRestore :
					historyItem.get( 'container' ) || historyItem.get( 'containers' );

				if ( Array.isArray( container ) ) {
					container = container[ 0 ];
				}

				if ( container ) {
					viewToScroll = container.lookup().view;
				}
			}
		}

		this.updatePanelPageCurrentItem();

		if ( viewToScroll && ! elementor.helpers.isInViewport( viewToScroll.$el[ 0 ], elementor.$previewContents.find( 'html' )[ 0 ] ) ) {
			elementor.helpers.scrollToView( viewToScroll.$el );
		}

		/**
		 * Originally it was change modified state only when selected item was 'Editing Started',
		 * and the set modified status was based on editorSaved.
		 */
		$e.internal( 'document/save/set-is-modified', {
			status: item.get( 'id' ) !== this.document.editor.lastSaveHistoryId,
		} );

		// Save last selected item.
		this.selected = item;
	}

	undoItem( index ) {
		for ( let stepNum = 0; stepNum < index; stepNum++ ) {
			const item = this.items.at( stepNum );

			if ( 'not_applied' === item.get( 'status' ) ) {
				item.get( 'items' ).each( function( subItem ) {
					const restore = subItem.get( 'restore' );

					if ( restore ) {
						restore( subItem );
					}
				} );

				item.set( 'status', 'applied' );
			}
		}
	}

	redoItem( index ) {
		for ( let stepNum = this.items.length - 1; stepNum >= index; stepNum-- ) {
			const item = this.items.at( stepNum );

			if ( 'applied' === item.get( 'status' ) ) {
				const reversedSubItems = _.toArray( item.get( 'items' ).models ).reverse();

				_( reversedSubItems ).each( function( subItem ) {
					const restore = subItem.get( 'restore' );

					if ( restore ) {
						restore( subItem, true );
					}
				} );

				item.set( 'status', 'not_applied' );
			}
		}
	}

	updatePanelPageCurrentItem() {
		if ( $e.routes.is( 'panel/history/actions' ) ) {
			elementor.getPanelView().getCurrentPageView().getCurrentTab().updateCurrentItem();
		}
	}
}
