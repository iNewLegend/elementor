import CommandBase from 'elementor-api/modules/command-base';
import DocumentUtils from 'elementor-api/utils/document';

export class Paste extends CommandBase {
	initialize( args ) {
		const { containers = [ args.container ] } = args;

		super.initialize( args );

		this.storage = elementorCommon.storage.get( 'clipboard' );

		this.storage = this.storage.map( ( model ) =>
			new Backbone.Model( model )
		);

		if ( ! containers[ 0 ] ) {
			this.target = elementor.getCurrentElement();
			this.target = this.target ? [ this.target.getContainer() ] : null;
		} else {
			this.target = containers;
		}
	}

	validateArgs( args ) {
		this.requireArgumentType( 'storage', 'object', this );
		//this.requireArgumentType( 'target', 'array', this );
	}

	apply( args ) {
		if ( ! this.target ) {
			return false;
		}

		const result = [];

		this.target.forEach( ( /* Container */ container ) => {
			const { options = {} } = args,
				pasteOptions = DocumentUtils.getPasteOptions( this.storage[ 0 ], container );

			if ( ! pasteOptions.isValidChild ) {
				if ( pasteOptions.isSameElement ) {
					options.at = container.parent.model.get( 'elements' ).findIndex( container.model ) + 1;

					// For same element always paste on his parent.
					container = container.parent;
				} else if ( pasteOptions.isValidGrandChild ) {
					options.rebuild = true;
				}
			}

			if ( Object.values( pasteOptions ).some( ( opt ) => !! opt ) ) {
				const commandArgs = { container };

				if ( undefined !== options.rebuild ) {
					commandArgs.rebuild = options.rebuild;
				}

				if ( undefined !== options.at ) {
					commandArgs.at = options.at;
				}

				result.push( $e.run( 'document/elements/paste', commandArgs ) );
			}
		} );

		if ( 0 === result.length ) {
			return false;
		} else if ( 1 === result.length ) {
			return result[ 0 ];
		}

		return result;
	}
}

export default Paste;
