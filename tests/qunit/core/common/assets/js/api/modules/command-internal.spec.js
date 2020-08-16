import Command from 'elementor-api/modules/command';
import CommandBase from 'elementor-api/modules/command-base';
import CommandInternal from 'elementor-api/modules/command-internal';
import CommandData from 'elementor-api/modules/command-data';

jQuery( () => {
	QUnit.module( 'File: core/common/assets/js/api/modules/command-internal.js', () => {
		QUnit.module( 'CommandInternal', () => {
			QUnit.test( 'instanceOf(): validation', ( assert ) => {
				const validateInternalCommand = ( internalCommand ) => {
						assert.equal( internalCommand instanceof CommandBase, true, );
						assert.equal( internalCommand instanceof Command, true, );
						assert.equal( internalCommand instanceof CommandInternal, true );
						assert.equal( internalCommand instanceof CommandData, false );
						assert.equal( internalCommand instanceof $e.modules.Command, true );
						assert.equal( internalCommand instanceof $e.modules.CommandInternal, true );
						assert.equal( internalCommand instanceof $e.modules.CommandData, false );
					};

				validateInternalCommand( new CommandInternal( {} ) );
				validateInternalCommand( new $e.modules.CommandInternal( {} ) );
			} );
		} );
	} );
} );

