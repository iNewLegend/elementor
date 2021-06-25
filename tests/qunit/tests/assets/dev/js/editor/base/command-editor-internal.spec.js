import CommandInfra from 'elementor-api/modules/command-infra';
import CommandBase from 'elementor-api/modules/command-base';
import CommandInternalBase from 'elementor-api/modules/command-internal-base';
import CommandData from 'elementor-api/modules/command-data';
import CommandEditor from 'elementor-editor/base/command-editor';
import CommandEditorInternal from 'elementor-editor/base/command-editor-internal';

jQuery( () => {
	QUnit.module( 'File: assets/dev/js/editor/base/command-editor-internal.js', ( hooks ) => {
		hooks.beforeEach( () => $e.components.isRegistering = true );

		hooks.afterEach( () => $e.components.isRegistering = false );

		QUnit.module( 'CommandEditorInternal', () => {
			QUnit.test( 'instanceOf(): validation', ( assert ) => {
				const validateCommandEditorInternal = ( commandEditorInternal ) => {
					// Base.
					assert.equal( commandEditorInternal instanceof CommandInfra, true );
					assert.equal( commandEditorInternal instanceof CommandBase, true );
					assert.equal( commandEditorInternal instanceof CommandInternalBase, false, );
					assert.equal( commandEditorInternal instanceof CommandData, false, );
					// Editor.
					assert.equal( commandEditorInternal instanceof CommandEditor, true, );
					assert.equal( commandEditorInternal instanceof CommandEditorInternal, true );

					// Base.
					assert.equal( commandEditorInternal instanceof $e.modules.CommandBase, true );
					assert.equal( commandEditorInternal instanceof $e.modules.CommandInternalBase, false );
					assert.equal( commandEditorInternal instanceof $e.modules.CommandData, false );
					// Editor.
					assert.equal( commandEditorInternal instanceof $e.modules.editor.CommandEditor, true );
					assert.equal( commandEditorInternal instanceof $e.modules.editor.CommandEditorInternal, true );
				};

				validateCommandEditorInternal( new CommandEditorInternal( {} ) );
				validateCommandEditorInternal( new $e.modules.editor.CommandEditorInternal( {} ) );
			} );
		} );
	} );
} );
