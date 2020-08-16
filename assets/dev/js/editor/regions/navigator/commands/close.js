import Command from 'elementor-api/modules/command';

export class Close extends Command {
	apply() {
		if ( ! this.component.close() && ! elementor.navigator.isOpen() ) {
			return false;
		}

		this.component.manager.close();

		return true;
	}
}

export default Close;
