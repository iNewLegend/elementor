import CommandBase from 'elementor-api/modules/command-base';

export class AddTransaction extends CommandBase {
	apply( args ) {
		const currentId = elementor.history.history.getCurrentId();

		if ( currentId ) {
			// If log already started chain his historyId.
			args.id = currentId;
		}

		args = this.component.normalizeLogTitle( args );

		this.component.transactions.push( args );
	}
}

export default AddTransaction;
