import DocumentHelper from '../helper';
import ElementsHelper from '../elements/helper';
import HistoryHelper from '../history/helper';
import * as Commands from './commands/index.spec.js';

jQuery( () => {
	QUnit.module( 'Component: document/repeater', ( hooks ) => {
		hooks.beforeEach( () => {
			ElementsHelper.empty();

			HistoryHelper.resetItems();
		} );

		DocumentHelper.testCommands( Commands );
	} );
} );
