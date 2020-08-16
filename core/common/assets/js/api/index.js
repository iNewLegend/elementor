/* Alphabetical order */
import BackwardsCompatibility from './core/backwards-compatibility';
import Command from './modules/command';
import CommandInternal from './modules/command-internal';
import CommandData from './modules/command-data';
import Commands from './core/commands';
import CommandsInternal from './core/commands-internal';
import ComponentBase from './modules/component-base';
import ComponentModalBase from './modules/component-modal-base';
import Components from './core/components';
import Data from './core/data.js';
import HookBreak from './modules/hook-break';
import Hooks from './core/hooks';
import Routes from './core/routes';
import Shortcuts from './core/shortcuts';

import * as hookData from './modules/hooks/data/';
import * as hookUI from './modules/hooks/ui';

export default class API {
	/**
	 * Function constructor().
	 *
	 * Creates 'elementor' api.
	 */
	constructor() {
		window.$e = this;

		this.components = new Components();

		this.commands = new Commands();
		this.commandsInternal = new CommandsInternal();

		this.hooks = new Hooks();
		this.routes = new Routes();
		this.shortcuts = new Shortcuts( jQuery( window ) );
		this.data = new Data();

		this.modules = {
			get CommandBase() {
				elementorCommon.helpers.hardDeprecated(
					'$e.modules.CommandBase',
					'3.0.0',
					'$e.modules.Command'
				);

				return this.Command;
			},

			get CommandInternalBase() {
				elementorCommon.helpers.hardDeprecated(
					'$e.modules.CommandInternalBase',
					'3.0.0',
					'$e.modules.CommandInternal'
				);

				return this.CommandInternal;
			},

			Command,
			CommandInternal,
			CommandData,

			ComponentBase,
			ComponentModalBase,

			HookBreak,

			hookData,
			hookUI,
		};

		// Backwards compatibility should be last, in order to handle others.
		this.bc = new BackwardsCompatibility();
	}

	/**
	 * Function run().
	 *
	 * Alias of `$e.commands.run()`.
	 *
	 * @param {string} command
	 * @param {{}} [args={}]
	 *
	 * @returns {*}
	 */
	run( command, args = {} ) {
		return $e.commands.run( command, args );
	}

	/**
	 * Function internal().
	 *
	 * Alias of `$e.commandsInternal.run()`.
	 *
	 * @param {string} command
	 * @param {{}} [args={}]
	 *
	 * @returns {*}
	 */
	internal( command, args = {} ) {
		return $e.commandsInternal.run( command, args );
	}

	/**
	 * Function route().
	 *
	 * Alias of `$e.routes.to()`.
	 *
	 * @param {string} route
	 * @param [args={}]
	 */
	route( route, args = {} ) {
		return $e.routes.to( route, args );
	}

	// TODO: shortcut();
}
