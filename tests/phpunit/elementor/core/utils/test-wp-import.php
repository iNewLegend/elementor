<?php
namespace Elementor\Tests\Phpunit\Elementor\Core\Utils;

use Elementor\Core\Utils\WP_Import;
use Elementor\Testing\Elementor_Test_Base;

class Test_WP_Import extends Elementor_Test_Base {
	public function test_run() {
		// Arrange.
		$importer = new WP_Import( __DIR__ . '/mock/fresh-install.WordPress.2021-02-14.xml' );

		// Act.
		$output = $importer->run();
		$posts = get_posts( [
			'numberposts' => -1,
			'post_status' => 'any',
			'post_type' => get_post_types('', 'names'),
		] );

		// Assert.
		$this->assertEquals( 'All done.' . PHP_EOL, $output );
		$this->assertCount( 3, $posts );
	}
}
