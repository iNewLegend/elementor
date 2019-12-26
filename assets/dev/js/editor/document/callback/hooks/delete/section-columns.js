import HookAfter from 'elementor-api/modules/hook-base/after';

export class SectionsColumns extends HookAfter {
	getCommand() {
		return 'document/elements/delete';
	}

	getId() {
		return 'delete-section-columns';
	}

	bindContainerType() {
		return 'column';
	}

	getConditions( args ) {
		const { containers = [ args.container ] } = args;

		// On `document/elements/move` do not fire the hook!.
		return 'document/elements/move' !== $e.commands.getCurrentFirstTrace() && containers.some( ( container ) =>
			// If one of the targets is column.
			'column' === container.model.get( 'elType' )
		);
	}

	/**
	 * @inheritDoc
	 *
	 * @param {{}} args
	 * @param {Container||Container[]} containers
	 *
	 * @returns {boolean}
	 */
	apply( args, containers ) {
		if ( ! Array.isArray( containers ) ) {
			containers = [ containers ];
		}

		containers.forEach( ( /**Container*/ container ) => {
			const parent = container.parent;

			// If its not column, continue.
			if ( 'section' !== parent.model.get( 'elType' ) ) {
				return;
			}

			// If deleted the last column, should recreate it.
			if ( 0 === parent.view.collection.length ) {
				$e.run( 'document/elements/create', {
					container: parent,
					model: {
						elType: 'column',
					},
				} );
			} else {
				// Else, just reset section layout.
				parent.view.resetLayout();
			}
		} );
	}
}

export default SectionsColumns;
