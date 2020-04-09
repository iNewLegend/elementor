import CommandBase from 'elementor-api/modules/command-base';
import Command from 'elementor-api/modules/command';
import CommandInternal from 'elementor-api/modules/command-internal';
import CommandHistory from 'elementor-document/commands/base/command-history';
import CommandHistoryDebounce from 'elementor-document/commands/base/command-history-debounce';

jQuery( () => {
	QUnit.module( 'File: core/common/assets/js/api/modules/command.js', () => {
		QUnit.module( 'Command', () => {
			QUnit.test( 'constructor(): without containers', ( assert ) => {
				assert.throws(
					() => {
						const instance = new CommandBase( { } );

						instance.requireContainer();
					},
					new Error( 'container or containers are required.' )
				);
			} );

			QUnit.test( 'constructor(): with container & containers', ( assert ) => {
				assert.throws(
					() => {
						const instance = new CommandBase( {
							container: {},
							containers: [],
						} );

						instance.requireContainer();
					},
					new Error( 'container and containers cannot go together please select one of them.' )
				);
			} );

			QUnit.test( 'apply(): force method implementation', ( assert ) => {
				assert.throws(
					() => {
						const instance = new CommandBase( {} );

						instance.apply( {} );
					},
					new Error( 'CommandBase.apply() should be implemented, please provide \'apply\' functionality.' )
				);
			} );

			QUnit.test( 'instanceOf', ( assert ) => {
				const fakeCommandHistory = class extends CommandHistory {
						getHistory() {
						}
					},
					fakeCommandHistoryDebounce = class extends CommandHistoryDebounce {
						getHistory() {
						}
					},
					commandBase = new CommandBase( ( {} ) ),
					command = new Command( {} ),
					internalCommand = new CommandInternal( {} ),
					historyCommand = new fakeCommandHistory( {} ),
					historyDebounceCommand = new fakeCommandHistoryDebounce( {} );

				assert.equal( commandBase instanceof CommandBase, true );
				assert.equal( commandBase instanceof Command, false );
				assert.equal( commandBase instanceof CommandInternal, false );
				assert.equal( commandBase instanceof CommandHistory, false );
				assert.equal( commandBase instanceof CommandHistoryDebounce, false );

				assert.equal( command instanceof CommandBase, true );
				assert.equal( command instanceof Command, true );
				assert.equal( command instanceof CommandInternal, false );
				assert.equal( command instanceof CommandHistory, false );
				assert.equal( command instanceof CommandHistoryDebounce, false );

				assert.equal( internalCommand instanceof CommandBase, true );
				assert.equal( internalCommand instanceof Command, true );
				assert.equal( internalCommand instanceof CommandInternal, true );
				assert.equal( internalCommand instanceof CommandHistory, false );
				assert.equal( internalCommand instanceof CommandHistoryDebounce, false );

				assert.equal( historyCommand instanceof CommandBase, true );
				assert.equal( historyCommand instanceof Command, true );
				assert.equal( historyCommand instanceof CommandInternal, false );
				assert.equal( historyCommand instanceof CommandHistory, true );
				assert.equal( historyCommand instanceof CommandHistoryDebounce, false );

				assert.equal( historyDebounceCommand instanceof CommandBase, true );
				assert.equal( historyDebounceCommand instanceof Command, true );
				assert.equal( historyDebounceCommand instanceof CommandInternal, false );
				assert.equal( historyDebounceCommand instanceof CommandHistory, true );
				assert.equal( historyDebounceCommand instanceof CommandHistoryDebounce, true );
			} );

			QUnit.test( 'instanceOf', ( assert ) => {
				const internalCommand = new CommandInternalBase( {} ),
					historyCommand = new class Command extends CommandHistoryHistory {
						getHistory() {}
					}( {} ),
					historyDebounceCommand = new class Command extends CommandHistoryDebounce {
						getHistory() {}
					}( {} );

				assert.equal( internalCommand instanceof CommandBase, true );
				assert.equal( internalCommand instanceof CommandInternalBase, true );
				assert.equal( internalCommand instanceof CommandHistoryHistory, false );
				assert.equal( internalCommand instanceof CommandHistoryDebounce, false );

				assert.equal( historyCommand instanceof CommandBase, true );
				assert.equal( historyCommand instanceof CommandInternalBase, false );
				assert.equal( historyCommand instanceof CommandHistoryHistory, true );
				assert.equal( historyCommand instanceof CommandHistoryDebounce, false );

				assert.equal( historyDebounceCommand instanceof CommandBase, true );
				assert.equal( historyDebounceCommand instanceof CommandInternalBase, false );
				assert.equal( historyDebounceCommand instanceof CommandHistoryHistory, true );
				assert.equal( historyDebounceCommand instanceof CommandHistoryDebounce, true );
			} );
		} );
	} );
} );

