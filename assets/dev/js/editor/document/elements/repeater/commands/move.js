import Base from '../../commands/base';

export default class extends Base {
	validateArgs( args ) {
		this.requireContainer( args );

		this.requireArgument( 'name', args );
		this.requireArgument( 'sourceIndex', args );
		this.requireArgument( 'targetIndex', args );
	}

	getHistory( args ) {
		const { name, containers = [ args.container ] } = args;

		return {
			containers,
			type: 'move',
			subTitle: elementor.translate( 'Item' ),
		};
	}

	apply( args ) {
		const { sourceIndex, targetIndex, name, containers = [ args.container ] } = args,
			result = [];

		containers.forEach( ( container ) => {
			const collection = container.settings.get( name ),
				model = elementorCommon.helpers.cloneObject( collection.at( sourceIndex ) );

			$e.run( 'document/elements/repeater/remove', {
				container,
				name,
				index: sourceIndex,
			} );

			result.push( $e.run( 'document/elements/repeater/insert', {
				container,
				name,
				model,
				returnValue: true,
				options: { at: targetIndex },
			} ) );
		} );

		if ( 1 === result.length ) {
			return result[ 0 ];
		}

		return result;
	}
}