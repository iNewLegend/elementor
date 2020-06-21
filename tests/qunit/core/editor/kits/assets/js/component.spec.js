import ElementsHelper from 'elementor-tests-qunit/core/editor/document/elements/helper';
import * as hooksData from './hooks/index.spec';

QUnit.module( 'Component: panel/global ( Kits component )', () => {
	QUnit.module( `Hooks`, ( hooks ) => {
		hooks.beforeEach( () => {
			ElementsHelper.empty();
		} );

		Object.entries( hooksData ).forEach( ( [ hookNamespace, hook ] ) => {
			QUnit.module( hookNamespace, () => {
				hook();
			} );
		} );
	} );
} );
