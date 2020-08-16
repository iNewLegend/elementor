import Command from 'elementor-api/modules/command';
import CommandBase from 'elementor-api/modules/command-base';
import CommandInternal from 'elementor-api/modules/command-internal';
import CommandData from 'elementor-api/modules/command-data';

jQuery( () => {
	QUnit.module( 'File: core/common/assets/js/api/modules/command.js', () => {
		QUnit.module( 'Command', () => {
			QUnit.test( 'run(): on catch apply', ( assert ) => {
				const random = Math.random().toString();

				assert.throws(
					() => {
						const instance = new Command( {} );

						instance.apply = () => {
							throw new Error( random );
						};

						instance.onCatchApply = ( e ) => {
							throw e;
						};

						instance.run( {} );
					},
					new Error( random )
				);
			} );

			QUnit.test( 'onCatchApply()', ( assert ) => {
				const random = Math.random().toString();

				assert.throws(
					() => {
						const instance = new Command( {} );

						instance.apply = () => {
							throw new Error( random );
						};

						instance.run( {} );
					},
					new Error( random )
				);
			} );

			QUnit.test( 'instanceOf(): validation', ( assert ) => {
				const validateCommand = ( command ) => {
					assert.equal( command instanceof CommandBase, true );
					assert.equal( command instanceof Command, true );
					assert.equal( command instanceof CommandInternal, false, );
					assert.equal( command instanceof CommandData, false, );
					assert.equal( command instanceof $e.modules.Command, true );
					assert.equal( command instanceof $e.modules.CommandInternal, false );
					assert.equal( command instanceof $e.modules.CommandData, false );
				};

				validateCommand( new Command( {} ) );
				validateCommand( new $e.modules.Command( {} ) );
			} );
		} );
	} );
} );

