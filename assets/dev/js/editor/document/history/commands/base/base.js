import CommandEditorInternal from 'elementor-editor/base/command-editor-internal';

export default class Base extends CommandEditorInternal {
	initialize( args ) {
		super.initialize( args );

		/**
		 * @type {HistoryManager}
		 */
		this.history = elementor.documents.getCurrent().history;
	}
}
