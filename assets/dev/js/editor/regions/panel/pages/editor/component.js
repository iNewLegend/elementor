import ComponentBase from 'elementor-api/modules/component-base';

export default class Component extends ComponentBase {
	__construct( args ) {
		super.__construct( args );

		// Remember last used tab.
		this.activeTabs = {};
	}

	getNamespace() {
		return 'panel/editor';
	}

	defaultTabs() {
		return {
			content: { title: elementor.translate( 'content' ) },
			style: { title: elementor.translate( 'style' ) },
			advanced: { title: elementor.translate( 'advanced' ) },
			layout: { title: elementor.translate( 'layout' ) },
		};
	}

	defaultCommands() {
		return {
			open: ( args ) => {
				if ( ! this.setDefaultTab( args ) ) {
					elementorCommon.helpers.softDeprecated( "model.trigger( 'request:edit' )", '2.9.0', 'editSettings.defaultEditRoute' );

					args.model.trigger( 'request:edit' );
				} else {
					this.openEditor( args.model, args.view );

					$e.route( this.getDefaultRoute(), args );
				}

				// BC: Run hooks after the route render's the view.
				const action = 'panel/open_editor/' + args.model.get( 'elType' );

				// Example: panel/open_editor/widget
				elementor.hooks.doAction( action, this.manager, args.model, args.view );

				// Example: panel/open_editor/widget/heading
				elementor.hooks.doAction( action + '/' + args.model.get( 'widgetType' ), this.manager, args.model, args.view );
			},
		};
	}

	getTabsWrapperSelector() {
		return '.elementor-panel-navigation';
	}

	renderTab( tab ) {
		this.manager.getCurrentPageView().activateTab( tab );
	}

	activateTab( tab ) {
		this.activeTabs[ this.manager.getCurrentPageView().model.id ] = tab;

		super.activateTab( tab );
	}

	setDefaultTab( args ) {
		let defaultTab;

		const editSettings = args.model.get( 'editSettings' );

		if ( this.activeTabs[ args.model.id ] ) {
			defaultTab = this.activeTabs[ args.model.id ];
		} else if ( editSettings && editSettings.get( 'defaultEditRoute' ) ) {
			defaultTab = editSettings.get( 'defaultEditRoute' );
		}

		if ( defaultTab ) {
			// Ensure tab is exist.
			const controlsTabs = elementor.getElementData( args.model ).tabs_controls;

			// Fallback to first tab.
			if ( ! controlsTabs[ defaultTab ] ) {
				defaultTab = Object.keys( controlsTabs )[ 0 ];
			}

			this.setDefaultRoute( defaultTab );

			return true;
		}

		return false;
	}

	openEditor( model, view ) {
		const title = elementor.translate( 'edit_element', [ elementor.getElementData( model ).title ] ),
			editor = elementor.getPanelView().setPage( 'editor', title, {
				model: model,
				controls: elementor.getElementControls( model ),
				editedElementView: view,
			} );

		return editor;
	}
}
