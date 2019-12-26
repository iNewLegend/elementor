import BaseComponent from 'elementor-api/modules/component';
import * as Commands from './commands/';

export default class Component extends BaseComponent {
	getNamespace() {
		return 'document/ui';
	}

	defaultCommands() {
		return {
			copy: ( args ) => ( new Commands.Copy( args ) ).run(),
			delete: ( args ) => ( new Commands.Delete( args ) ).run(),
			duplicate: ( args ) => ( new Commands.Duplicate( args ) ).run(),
			paste: ( args ) => ( new Commands.Paste( args ) ).run(),
			'paste-style': ( args ) => ( new Commands.PasteStyle( args ) ).run(),
		};
	}

	defaultShortcuts() {
		return {
			copy: {
				keys: 'ctrl+c',
				exclude: [ 'input' ],
			},
			delete: {
				keys: 'del',
				exclude: [ 'input' ],
			},
			duplicate: {
				keys: 'ctrl+d',
			},
			paste: {
				keys: 'ctrl+v',
				exclude: [ 'input' ],
			},
			'paste-style': {
				keys: 'ctrl+shift+v',
				exclude: [ 'input' ],
			},
		};
	}
}
