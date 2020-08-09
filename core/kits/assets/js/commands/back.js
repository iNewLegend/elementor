import Command from 'elementor-api/modules/command';

export class Back extends Command {
	confirmDialog = null;

	apply() {
		const panelHistory = $e.routes.getHistory( 'panel' );

		// Don't go back if no where.
		if ( 1 === panelHistory.length ) {
			this.getCloseConfirmDialog( event ).show();
			return;
		}

		return $e.routes.back( 'panel' );
	}

	getCloseConfirmDialog( event ) {
		if ( ! this.confirmDialog ) {
			const modalOptions = {
				id: 'elementor-kit-warn-on-close',
				headerMessage: elementor.translate( 'Exit' ),
				message: elementor.translate( 'Would you like to exit?' ),
				position: {
					my: 'center center',
					at: 'center center',
				},
				strings: {
					confirm: elementor.translate( 'Exit' ),
					cancel: elementor.translate( 'Cancel' ),
				},
				onConfirm: () => {
					$e.run( 'panel/global/close' );
				},
			};

			this.confirmDialog = elementorCommon.dialogsManager.createWidget( 'confirm', modalOptions );
		}

		this.confirmDialog.setSettings( 'hide', {
			onEscKeyPress: ! event,
		} );

		return this.confirmDialog;
	}
}

export default Back;
