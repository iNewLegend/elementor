import ElementsHelper from 'elementor-tests-qunit/assets/dev/js/editor/document/elements/helper';

export const ToggleFolding = () => {
	QUnit.module( 'ToggleFolding', () => {
		QUnit.test( 'Simple', ( assert ) => {
			// Toggle possible states.
			const states = [ false, true ],
				sectionsCount = 2,
				eSections = [];

			for ( let i = 0; i < sectionsCount; i++ ) {
				eSections.push( ElementsHelper.createSection() );
			}

			states.forEach( ( state ) => {
				assert.ok( true, `Testing with state = ${ state }` );
				// Toggle.
				$e.run( 'navigator/elements/toggle-folding', {
					containers: eSections,
					state,
				} );

				eSections.forEach( ( eSection ) => {
					assert.equal( eSection.navView.$el.children().hasClass( 'elementor-active' ), state,
						`section id: '${ eSection.id }' navigator element active state: '${ state }'` );
				} );
			} );
		} );
	} );
};

export default ToggleFolding;
