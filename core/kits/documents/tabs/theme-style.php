<?php

namespace Elementor\Core\Kits\Documents\Tabs;

use Elementor\Controls_Manager;
use Elementor\Core\Kits\Manager;
use Elementor\Group_Control_Background;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Css_Filter;
use Elementor\Group_Control_Text_Shadow;
use Elementor\Group_Control_Typography;
use Elementor\Plugin;
use Elementor\Settings;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Theme_Style extends Tab_Base {

	public function get_id() {
		return 'theme-style';
	}

	public function get_title() {
		return __( 'Theme Style', 'elementor' );
	}

	public function register_tab_controls() {
		$this->add_body_section();
		$this->add_typography_section();
		$this->add_buttons_section();
		$this->add_form_fields_section();
		$this->add_images_section();

		Plugin::$instance->controls_manager->add_custom_css_controls( $this->parent, $this->get_id() );
	}

	private function add_body_section() {
		$this->start_controls_section(
			'section_body',
			[
				'label' => __( 'Background', 'elementor' ),
				'tab' => $this->get_id(),
			]
		);

		$this->add_schemes_notice();

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'body_background',
				'types' => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}}',
				'fields_options' => [
					'background' => [
						'frontend_available' => true,
					],
					'color' => [
						'dynamic' => [],
					],
					'color_b' => [
						'dynamic' => [],
					],
				],
			]
		);

		$this->end_controls_section();
	}

	private function add_buttons_section() {
		// Use an array for better readability.
		$button_selectors = [
			'{{WRAPPER}} button',
			'{{WRAPPER}} input[type="button"]',
			'{{WRAPPER}} input[type="submit"]',
			'{{WRAPPER}} .elementor-button',
		];

		$button_hover_selectors = [
			'{{WRAPPER}} button:hover',
			'{{WRAPPER}} button:focus',
			'{{WRAPPER}} input[type="button"]:hover',
			'{{WRAPPER}} input[type="button"]:focus',
			'{{WRAPPER}} input[type="submit"]:hover',
			'{{WRAPPER}} input[type="submit"]:focus',
			'{{WRAPPER}} .elementor-button:hover',
			'{{WRAPPER}} .elementor-button:focus',
		];

		$button_selector = implode( ',', $button_selectors );
		$button_hover_selector = implode( ',', $button_hover_selectors );

		$this->start_controls_section(
			'section_buttons',
			[
				'label' => __( 'Buttons', 'elementor' ),
				'tab' => $this->get_id(),
			]
		);

		$this->add_schemes_notice();

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'label' => __( 'Typography', 'elementor' ),
				'name' => 'button_typography',
				'selector' => $button_selector,
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'button_text_shadow',
				'selector' => $button_selector,
			]
		);

		$this->start_controls_tabs( 'tabs_button_style' );

		$this->start_controls_tab(
			'tab_button_normal',
			[
				'label' => __( 'Normal', 'elementor' ),
			]
		);

		$this->add_control(
			'button_text_color',
			[
				'label' => __( 'Text Color', 'elementor' ),
				'type' => Controls_Manager::COLOR,
				'dynamic' => [],
				'selectors' => [
					$button_selector => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'button_background_color',
			[
				'label' => __( 'Background Color', 'elementor' ),
				'type' => Controls_Manager::COLOR,
				'dynamic' => [],
				'selectors' => [
					$button_selector => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'button_box_shadow',
				'selector' => $button_selector,
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'button_border',
				'selector' => $button_selector,
				'fields_options' => [
					'color' => [
						'dynamic' => [],
					],
				],
			]
		);

		$this->add_control(
			'button_border_radius',
			[
				'label' => __( 'Border Radius', 'elementor' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors' => [
					$button_selector => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_button_hover',
			[
				'label' => __( 'Hover', 'elementor' ),
			]
		);

		$this->add_control(
			'button_hover_text_color',
			[
				'label' => __( 'Text Color', 'elementor' ),
				'type' => Controls_Manager::COLOR,
				'dynamic' => [],
				'selectors' => [
					$button_hover_selector => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'button_hover_background_color',
			[
				'label' => __( 'Background Color', 'elementor' ),
				'type' => Controls_Manager::COLOR,
				'dynamic' => [],
				'selectors' => [
					$button_hover_selector => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'button_hover_box_shadow',
				'selector' => $button_hover_selector,
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'button_hover_border',
				'selector' => $button_hover_selector,
				'fields_options' => [
					'color' => [
						'dynamic' => [],
					],
				],
			]
		);

		$this->add_control(
			'button_hover_border_radius',
			[
				'label' => __( 'Border Radius', 'elementor' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors' => [
					$button_hover_selector => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_responsive_control(
			'button_padding',
			[
				'label' => __( 'Padding', 'elementor' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					$button_selector => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);

		$this->end_controls_section();
	}

	private function add_typography_section() {
		$this->start_controls_section(
			'section_typography',
			[
				'label' => __( 'Typography', 'elementor' ),
				'tab' => $this->get_id(),
			]
		);

		$this->add_schemes_notice();

		$this->add_control(
			'body_heading',
			[
				'type' => Controls_Manager::HEADING,
				'label' => __( 'Body', 'elementor' ),
			]
		);

		$this->add_control(
			'body_color',
			[
				'label' => __( 'Text Color', 'elementor' ),
				'type' => Controls_Manager::COLOR,
				'dynamic' => [],
				'selectors' => [
					'{{WRAPPER}}' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'label' => __( 'Typography', 'elementor' ),
				'name' => 'body_typography',
				'selector' => '{{WRAPPER}}',
			]
		);

		$this->add_responsive_control(
			'paragraph_spacing',
			[
				'label' => __( 'Paragraph Spacing', 'elementor' ),
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}} p' => 'margin-bottom: {{SIZE}}{{UNIT}}',
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
					'em' => [
						'min' => 0.1,
						'max' => 20,
					],
					'vh' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'size_units' => [ 'px', 'em', 'vh' ],
			]
		);

		//Link Selectors
		$link_selectors = [
			'{{WRAPPER}} a',
		];

		$link_hover_selectors = [
			'{{WRAPPER}} a:hover',
		];

		$link_selectors = implode( ',', $link_selectors );
		$link_hover_selectors = implode( ',', $link_hover_selectors );

		$this->add_control(
			'link_heading',
			[
				'type' => Controls_Manager::HEADING,
				'label' => __( 'Link', 'elementor' ),
				'separator' => 'before',
			]
		);

		$this->start_controls_tabs( 'tabs_link_style' );

		$this->start_controls_tab(
			'tab_link_normal',
			[
				'label' => __( 'Normal', 'elementor' ),
			]
		);

		$this->add_control(
			'link_normal_color',
			[
				'label' => __( 'Color', 'elementor' ),
				'type' => Controls_Manager::COLOR,
				'dynamic' => [],
				'selectors' => [
					$link_selectors => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'label' => __( 'Typography', 'elementor' ),
				'name' => 'link_normal_typography',
				'selector' => $link_selectors,
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_link_hover',
			[
				'label' => __( 'Hover', 'elementor' ),
			]
		);

		$this->add_control(
			'link_hover_color',
			[
				'label' => __( 'Color', 'elementor' ),
				'type' => Controls_Manager::COLOR,
				'dynamic' => [],
				'selectors' => [
					$link_hover_selectors => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'label' => __( 'Typography', 'elementor' ),
				'name' => 'link_hover_typography',
				'selector' => $link_hover_selectors,
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		// Headings.
		$this->add_element_controls( __( 'H1', 'elementor' ), 'h1', '{{WRAPPER}} h1' );
		$this->add_element_controls( __( 'H2', 'elementor' ), 'h2', '{{WRAPPER}} h2' );
		$this->add_element_controls( __( 'H3', 'elementor' ), 'h3', '{{WRAPPER}} h3' );
		$this->add_element_controls( __( 'H4', 'elementor' ), 'h4', '{{WRAPPER}} h4' );
		$this->add_element_controls( __( 'H5', 'elementor' ), 'h5', '{{WRAPPER}} h5' );
		$this->add_element_controls( __( 'H6', 'elementor' ), 'h6', '{{WRAPPER}} h6' );

		$this->end_controls_section();
	}

	private function add_form_fields_section() {
		// Use an array for better readability.
		$label_selectors = [
			'{{WRAPPER}} label',
		];

		$input_selectors = [
			'{{WRAPPER}} input:not([type="button"]):not([type="submit"])',
			'{{WRAPPER}} textarea',
			'{{WRAPPER}} .elementor-field-textual',
		];

		$input_focus_selectors = [
			'{{WRAPPER}} input:focus:not([type="button"]):not([type="submit"])',
			'{{WRAPPER}} textarea:focus',
			'{{WRAPPER}} .elementor-field-textual:focus',
		];

		$label_selector = implode( ',', $label_selectors );
		$input_selector = implode( ',', $input_selectors );
		$input_focus_selector = implode( ',', $input_focus_selectors );

		$this->start_controls_section(
			'section_form_fields',
			[
				'label' => __( 'Form Fields', 'elementor' ),
				'tab' => $this->get_id(),
			]
		);

		$this->add_schemes_notice();

		$this->add_control(
			'form_label_heading',
			[
				'type' => Controls_Manager::HEADING,
				'label' => __( 'Label', 'elementor' ),
			]
		);

		$this->add_control(
			'form_label_color',
			[
				'label' => __( 'Color', 'elementor' ),
				'type' => Controls_Manager::COLOR,
				'dynamic' => [],
				'selectors' => [
					$label_selector => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'label' => __( 'Typography', 'elementor' ),
				'name' => 'form_label_typography',
				'selector' => $label_selector,
			]
		);

		$this->add_control(
			'form_field_heading',
			[
				'type' => Controls_Manager::HEADING,
				'label' => __( 'Field', 'elementor' ),
				'separator' => 'before',
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'label' => __( 'Typography', 'elementor' ),
				'name' => 'form_field_typography',
				'selector' => $input_selector,
			]
		);

		$this->start_controls_tabs( 'tabs_form_field_style' );

		$this->start_controls_tab(
			'tab_form_field_normal',
			[
				'label' => __( 'Normal', 'elementor' ),
			]
		);

		$this->add_form_field_state_tab_controls( 'form_field', $input_selector );

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_form_field_focus',
			[
				'label' => __( 'Focus', 'elementor' ),
			]
		);

		$this->add_form_field_state_tab_controls( 'form_field_focus', $input_focus_selector );

		$this->add_control(
			'form_field_focus_transition_duration',
			[
				'label' => __( 'Transition Duration', 'elementor' ) . ' (ms)',
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					$input_selector => 'transition: {{SIZE}}ms',
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 3000,
					],
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_responsive_control(
			'form_field_padding',
			[
				'label' => __( 'Padding', 'elementor' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					$input_selector => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);

		$this->end_controls_section();
	}

	private function add_images_section() {

		//Image Selectors
		$image_selectors = [
			'{{WRAPPER}} img',
		];

		$image_hover_selectors = [
			'{{WRAPPER}} img:hover',
		];

		$image_selectors = implode( ',', $image_selectors );
		$image_hover_selectors = implode( ',', $image_hover_selectors );

		$this->start_controls_section(
			'section_images',
			[
				'label' => __( 'Images', 'elementor' ),
				'tab' => $this->get_id(),
			]
		);

		$this->add_schemes_notice();

		$this->start_controls_tabs( 'tabs_image_style' );

		$this->start_controls_tab(
			'tab_image_normal',
			[
				'label' => __( 'Normal', 'elementor' ),
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'image_border',
				'selector' => $image_selectors,
				'fields_options' => [
					'color' => [
						'dynamic' => [],
					],
				],
			]
		);

		$this->add_responsive_control(
			'image_border_radius',
			[
				'label' => __( 'Border Radius', 'elementor' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors' => [
					$image_selectors => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'image_opacity',
			[
				'label' => __( 'Opacity', 'elementor' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'max' => 1,
						'min' => 0.10,
						'step' => 0.01,
					],
				],
				'selectors' => [
					$image_selectors => 'opacity: {{SIZE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'image_box_shadow',
				'exclude' => [
					'box_shadow_position',
				],
				'selector' => $image_selectors,
			]
		);

		$this->add_group_control(
			Group_Control_Css_Filter::get_type(),
			[
				'name' => 'image_css_filters',
				'selector' => '{{WRAPPER}} img',
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_image_hover',
			[
				'label' => __( 'Hover', 'elementor' ),
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'image_hover_border',
				'selector' => '{{WRAPPER}} img:hover',
				'fields_options' => [
					'color' => [
						'dynamic' => [],
					],
				],
			]
		);

		$this->add_responsive_control(
			'image_hover_border_radius',
			[
				'label' => __( 'Border Radius', 'elementor' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors' => [
					$image_hover_selectors => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'image_hover_opacity',
			[
				'label' => __( 'Opacity', 'elementor' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'max' => 1,
						'min' => 0.10,
						'step' => 0.01,
					],
				],
				'selectors' => [
					$image_hover_selectors => 'opacity: {{SIZE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'image_hover_box_shadow',
				'exclude' => [
					'box_shadow_position',
				],
				'selector' => $image_hover_selectors,
			]
		);

		$this->add_group_control(
			Group_Control_Css_Filter::get_type(),
			[
				'name' => 'image_hover_css_filters',
				'selector' => $image_hover_selectors,
			]
		);

		$this->add_control(
			'image_hover_transition',
			[
				'label' => __( 'Transition Duration', 'elementor' ) . ' (s)',
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'max' => 3,
						'step' => 0.1,
					],
				],
				'selectors' => [
					$image_selectors => 'transition-duration: {{SIZE}}s',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->end_controls_section();
	}

	private function add_element_controls( $label, $prefix, $selector ) {
		$this->add_control(
			$prefix . '_heading',
			[
				'type' => Controls_Manager::HEADING,
				'label' => $label,
				'separator' => 'before',
			]
		);

		$this->add_control(
			$prefix . '_color',
			[
				'label' => __( 'Color', 'elementor' ),
				'type' => Controls_Manager::COLOR,
				'dynamic' => [],
				'selectors' => [
					$selector => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'label' => __( 'Typography', 'elementor' ),
				'name' => $prefix . '_typography',
				'selector' => $selector,
			]
		);
	}

	private function add_schemes_notice() {
		// Get the current section config (array - section id and tab) to use for creating a unique control ID and name
		$current_section = $this->parent->get_current_section();

		/** @var Manager $module */
		$kits_manager = Plugin::$instance->kits_manager;

		if ( ! $kits_manager->is_custom_colors_enabled() || ! $kits_manager->is_custom_typography_enabled() ) {
			$this->add_control(
				$current_section['section'] . '_schemes_notice',
				[
					'name' => $current_section['section'] . '_schemes_notice',
					'type' => Controls_Manager::RAW_HTML,
					'raw' => sprintf( __( 'In order for Theme Style to affect all relevant Elementor elements, please disable Default Colors and Fonts from the <a href="%s" target="_blank">Settings Page</a>.', 'elementor' ), Settings::get_url() ),
					'content_classes' => 'elementor-panel-alert elementor-panel-alert-warning',
					'render_type' => 'ui',
				]
			);
		}
	}

	private function add_form_field_state_tab_controls( $prefix, $selector ) {
		$this->add_control(
			$prefix . '_text_color',
			[
				'label' => __( 'Text Color', 'elementor' ),
				'type' => Controls_Manager::COLOR,
				'dynamic' => [],
				'selectors' => [
					$selector => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			$prefix . '_background_color',
			[
				'label' => __( 'Background Color', 'elementor' ),
				'type' => Controls_Manager::COLOR,
				'dynamic' => [],
				'selectors' => [
					$selector => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => $prefix . '_box_shadow',
				'selector' => $selector,
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => $prefix . '_border',
				'selector' => $selector,
				'fields_options' => [
					'color' => [
						'dynamic' => [],
					],
				],
			]
		);

		$this->add_control(
			$prefix . '_border_radius',
			[
				'label' => __( 'Border Radius', 'elementor' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors' => [
					$selector => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
	}
}
