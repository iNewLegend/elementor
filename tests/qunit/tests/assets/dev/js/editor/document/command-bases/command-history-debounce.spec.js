import CommandHistoryBase from '../../../../../../../../../assets/dev/js/editor/document/command-bases/command-history-base';
import CommandInfra from 'elementor-api/modules/command-infra';
import CommandBase from 'elementor-api/modules/command-base';
import CommandInternalBase from 'elementor-api/modules/command-internal-base';
import CommandData from 'elementor-api/modules/command-data';
import CommandHistoryDebounce from 'elementor-document/command-bases/command-history-debounce';
import CommandEditorBase from 'elementor-editor/command-bases/command-editor-base';
import CommandEditorInternal from 'elementor-editor/command-bases/command-editor-internal';

jQuery( () => {
	QUnit.module( 'File: editor/document/commands/command-history-debounce.js', () => {
		QUnit.module( 'CommandHistoryDebounce', ( hooks ) => {
			hooks.beforeEach( () => $e.components.isRegistering = true );

			hooks.afterEach( () => $e.components.isRegistering = false );

			QUnit.test( 'instanceOf(): validation', ( assert ) => {
				const validateHistoryDebounceCommand = ( historyDebounceCommand ) => {
					// Base.
					assert.equal( historyDebounceCommand instanceof CommandInfra, true );
					assert.equal( historyDebounceCommand instanceof CommandBase, true );
					assert.equal( historyDebounceCommand instanceof CommandInternalBase, false, );
					assert.equal( historyDebounceCommand instanceof CommandData, false, );
					// Editor.
					assert.equal( historyDebounceCommand instanceof CommandEditorBase, true, );
					assert.equal( historyDebounceCommand instanceof CommandEditorInternal, false );
					// Editor-Document.
					assert.equal( historyDebounceCommand instanceof CommandHistoryBase, true );
					assert.equal( historyDebounceCommand instanceof CommandHistoryDebounce, true );

					// Base.
					assert.equal( historyDebounceCommand instanceof $e.modules.CommandBase, true );
					assert.equal( historyDebounceCommand instanceof $e.modules.CommandInternalBase, false );
					assert.equal( historyDebounceCommand instanceof $e.modules.CommandData, false );
					// Editor.
					assert.equal( historyDebounceCommand instanceof $e.modules.editor.CommandEditorBase, true );
					assert.equal( historyDebounceCommand instanceof $e.modules.editor.CommandEditorInternal, false );
					// Editor-Document.
					assert.equal( historyDebounceCommand instanceof $e.modules.editor.document.CommandHistoryBase, true );
					assert.equal( historyDebounceCommand instanceof $e.modules.editor.document.CommandHistoryDebounce, true );
				};

				validateHistoryDebounceCommand( new CommandHistoryDebounce( {} ) );
				validateHistoryDebounceCommand( new $e.modules.editor.document.CommandHistoryDebounce( {} ) );
			} );
		} );
	} );
} );
