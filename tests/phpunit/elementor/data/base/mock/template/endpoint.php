<?php
namespace Elementor\Tests\Phpunit\Elementor\Data\Base\Mock\Template;

use Elementor\Tests\Phpunit\Elementor\Data\Base\Mock\Template\Traits\MockBypassRegister;
use Elementor\Tests\Phpunit\Elementor\Data\Base\Mock\Template\Traits\MockItems;
use Elementor\Tests\Phpunit\Elementor\Data\Base\Mock\Template\Traits\MockNameType;

class Endpoint extends \Elementor\Data\Base\Endpoint {

	/**
	 * @var \Elementor\Tests\Phpunit\Elementor\Data\Base\Mock\Template\Controller
	 */
	public $controller;

	use MockNameType, MockItems, MockBypassRegister;

	public function get_type() {
		return 'endpoint';
	}

	public function do_register_sub_endpoint( $route, $endpoint_class ) {
		return parent::register_sub_endpoint( $route, $endpoint_class );
	}

	public function get_sub_endpoints() {
		return $this->sub_endpoints;
	}
}
