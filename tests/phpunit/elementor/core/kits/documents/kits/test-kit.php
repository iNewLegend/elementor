<?php
namespace Elementor\Tests\Phpunit\Elementor\Core\Kits\Documents;

use Elementor\Modules\History\Revisions_Manager;
use Elementor\Plugin;
use Elementor\Testing\Elementor_Test_Base;

class Test_Kit extends Elementor_Test_Base {

	/**
	 * @var \Elementor\Core\Kits\Documents\Kit
	 */
	private $kit;

	public function setUp() {
		wp_set_current_user( $this->factory()->get_administrator_user()->ID );

		$kit = Plugin::$instance->kits_manager->get_active_kit();
		$this->kit = Plugin::$instance->documents->get( $kit->get_id(), false );

		// In the production environment 'JS' sends empty array, do the same.
		add_post_meta( $kit->get_main_id(), '_elementor_data', '[]' );
	}

	public function test_save_kits_revision_ensure_changed() {
		// Arrange.
		$this->kit->set_settings( 'post_status', 'draft');

		$excepted_count = count( Revisions_Manager::get_revisions( $this->kit->get_main_id() ) );

		// Ensure new revision added.
		$excepted_count++;

		// Act.
		$this->kit->save( [ 'settings' => $this->kit->get_settings() ] );

		// Assert.
		$this->assertCount( $excepted_count, Revisions_Manager::get_revisions( $this->kit->get_main_id() ) );
	}

	public function test_save_kits_revision_ensure_same() {
		// Arrange.
		$this->kit->set_settings( 'post_status', 'publish');
		$this->kit->save( [ 'settings' => $this->kit->get_settings() ] );

		$this->kit->set_settings( 'post_status', 'publish');

		$excepted_count = count( Revisions_Manager::get_revisions( $this->kit->get_main_id() ) );

		// Act.
		$this->kit->save( [ 'settings' => $this->kit->get_settings() ] );

		// Assert.
		$this->assertCount( $excepted_count, Revisions_Manager::get_revisions( $this->kit->get_main_id() ) );
	}
}
