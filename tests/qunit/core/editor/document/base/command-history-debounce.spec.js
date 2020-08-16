import CommandHistory from 'elementor-document/base/command-history';
import CommandBase from 'elementor-api/modules/command-base';
import Command from 'elementor-api/modules/command';
import CommandInternal from 'elementor-api/modules/command-internal';
import CommandData from 'elementor-api/modules/command-data';
import CommandHistoryDebounce from 'elementor-document/base/command-history-debounce';
import CommandEditor from 'elementor-editor/base/command-editor';
import CommandEditorInternal from 'elementor-editor/base/command-editor-internal';

jQuery( () => {
	QUnit.module( 'File: editor/document/commands/command-history-debounce.js', () => {
		QUnit.module( 'CommandHistoryDebounce', () => {
			QUnit.test( 'instanceOf(): validation', ( assert ) => {
				const validateHistoryDebounceCommand = ( historyDebounceCommand ) => {
					// Base.
					assert.equal( historyDebounceCommand instanceof CommandBase, true );
					assert.equal( historyDebounceCommand instanceof Command, true );
					assert.equal( historyDebounceCommand instanceof CommandInternal, false, );
					assert.equal( historyDebounceCommand instanceof CommandData, false, );
					// Editor.
					assert.equal( historyDebounceCommand instanceof CommandEditor, true, );
					assert.equal( historyDebounceCommand instanceof CommandEditorInternal, false );
					// Editor-Document.
					assert.equal( historyDebounceCommand instanceof CommandHistory, true );
					assert.equal( historyDebounceCommand instanceof CommandHistoryDebounce, true );

					// Base.
					assert.equal( historyDebounceCommand instanceof $e.modules.Command, true );
					assert.equal( historyDebounceCommand instanceof $e.modules.CommandInternal, false );
					assert.equal( historyDebounceCommand instanceof $e.modules.CommandData, false );
					// Editor.
					assert.equal( historyDebounceCommand instanceof $e.modules.editor.CommandEditor, true );
					assert.equal( historyDebounceCommand instanceof $e.modules.editor.CommandEditorInternal, false );
					// Editor-Document.
					assert.equal( historyDebounceCommand instanceof $e.modules.editor.document.CommandHistory, true );
					assert.equal( historyDebounceCommand instanceof $e.modules.editor.document.CommandHistoryDebounce, true );
				};

				validateHistoryDebounceCommand( new CommandHistoryDebounce( {} ) );
				validateHistoryDebounceCommand( new $e.modules.editor.document.CommandHistoryDebounce( {} ) );
			} );
		} );
	} );
} );
