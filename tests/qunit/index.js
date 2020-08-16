export const tests = () => {
	// require( './core/common/build/js/api/modules/command-base.spec.js' );
	// require( './core/common/build/js/api/modules/command-data.spec.js' );
	//
	// require( './core/common/build/js/api/core/components.spec.js' );
	// require( './core/common/build/js/api/core/data.spec.js' );
	//
	// require( './core/common/build/js/api/core/hooks/base.spec.js' );
	//
	// require( './build/dev/js/editor/container/container.spec' );
	//
	// require( './build/dev/js/editor/document/commands/base/command-history.spec' );
	// require( './build/dev/js/editor/document/dynamic/commands/base/disable-enable.spec' );
	// require( './build/dev/js/editor/document/globals/commands/base/disable-enable.spec' );
	//
	// require( './build/dev/js/editor/document/manager.spec' );
	// require( './build/dev/js/editor/document/component.spec' );

	require( './assets/dev/js/editor/data/globals/component.spec' );

	require( './assets/dev/js/editor/regions/navigator/component.spec' );
};

// Export for external build.
if ( $e?.devTools?.external && ! $e.devTools.external.tests ) {
	$e.devTools.external.tests = tests;
}

export default tests;
