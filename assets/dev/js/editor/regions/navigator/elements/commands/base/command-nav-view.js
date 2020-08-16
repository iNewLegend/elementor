import CommandEditor from 'elementor-editor/base/command-editor';

export class CommandNavView extends CommandEditor {
	validateArgs( args ) {
		this.requireContainer( args );

		const { containers = [ args.container ] } = args;

		containers.forEach( ( container ) => {
			if ( ! container.navView ) {
				throw Error( `'container.navView' is required, container id: '${ container.id }' ` );
			}
		} );
	}
}

export default CommandNavView;
