import * as eData from 'elementor-tests-qunit/mock/e-data';
import * as Ajax from 'elementor-tests-qunit/mock/ajax';

export const DeleteGlobalCache = () => {
	QUnit.test( 'apply(): simple', async ( assert ) => {
		eData.attachCache();

		$e.data.setCache( $e.components.get( 'globals' ), 'globals/typography', {}, {
			test: true,
		} );

		const origDocument = elementor.documents.getCurrent(),
			documentKitConfig = { id: 2, type: 'kit' },
			documentKit = elementor.documents.addDocumentByConfig( documentKitConfig ),
			globalsCache = await $e.data.get( 'globals/index' );

		eData.emptyFetch();

		documentKit.container = origDocument.container;

		assert.equal( globalsCache.data.typography.test, true );

		Ajax.mock();

		// Active the hook.
		await $e.internal( 'document/save/save', {
			document: documentKit,
			status: 'publish',
		} );

		Ajax.silence();

		const result = await $e.data.get( 'globals/index' );

		assert.deepEqual( result.data, {} );
	} );
};

export default DeleteGlobalCache;
