<?php
namespace Elementor\Tests\Phpunit\Elementor\Data\Base\Mock\Template\Traits;

trait MockBypassPermission {
	public $bypass_permission_value = true;
	public $is_permission_bypassed = false;

	public function bypass_original_permission( $status = true ) {
		$this->is_permission_bypassed = $status;
	}

	public function bypass_set_value( $value ) {
		$this->bypass_permission_value = $value;
	}

	public function get_permission_callback( $request ) {
		if ( $this->is_permission_bypassed ) {
			return $this->bypass_permission_value;
		}

		return parent::get_permission_callback( $request );
	}
}