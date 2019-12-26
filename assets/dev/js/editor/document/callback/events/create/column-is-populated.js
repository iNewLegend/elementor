import EventAfter from 'elementor-api/modules/event-base/after';

export class ColumnIsPopulated extends EventAfter {
	getCommand() {
		return 'document/elements/create';
	}

	getId() {
		return 'column-is-populated';
	}

	getConditions( args ) {
		const { containers = [ args.container ] } = args;

		// If the created element, was created at column.
		return containers.some( ( /**Container*/ container ) => (
			'column' === container.model.get( 'elType' )
		) );
	}

	apply( args ) {
		const { containers = [ args.container ] } = args;

		containers.forEach( ( /* Container */ container ) => {
			if ( 'column' === container.model.get( 'elType' ) ) {
				container.view.changeChildContainerClasses();
			}
		} );
	}
}

export default ColumnIsPopulated;
