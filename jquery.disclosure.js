/**
 * Disclosure plugin.
 *
 * @author	Dave Widmer
 * @see		http://www.davewidmer.net
 */
(function($){
	// The methods to inject into jQuery
	var methods = {
		/**
		 * Adds a disclosre +/- to a section
		 *
		 * @param	selector	The jQuery selector of the section to disclose
		 * @param	options		Additional Options
		 * @return	this		For Chaining
		 */
		disclosure: function(selector, options){
			// Set the settings for the plugin
			options = options || {};
			options.selector = selector;
			disclosure.settings = $.extend(disclosure.defaults, options);

			return this.each( function(i){
				var section = $(this).next(disclosure.selector);

				// Hide section on load?
				if( disclosure.settings.hideOnLoad ){
					$(section).hide();
				}

				// Add the disclosure and event
				disclosure.activate(this, section);
			});
		}
	};

	// Hidden methods for this plugin
	var disclosure = {
		// The current settings
		settings: {},

		// The default settings
		defaults: {
			selector: 'div',
			css: 'disclosure',
			show: '[+]',
			hide: '[–]',
			animation: 'slide',
			animationSpeed: 'normal',
			hideOnLoad: false
		},

		/**
		 * Adds and activates the disclosure
		 *
		 * @param	link	The main disclosure link
		 * @param	section	The section to disclose.
		 */
		activate: function(link, section){
			var html = (disclosure.settings.hideOnLoad) ? disclosure.settings.show : disclosure.settings.hide;
			html = '<span class="'+disclosure.settings.css+'">'+html+'</span>';
			$(link).prepend(html).css('cursor', 'pointer');

			link.indicator = $(link).find('.'+disclosure.settings.css);

			$(link).click(function(){
				if( $(section).is(':visible') ){
					$(this.indicator).html(disclosure.settings.show);
					disclosure.hide(section);
				} else {
					$(this.indicator).html(disclosure.settings.hide);
					disclosure.show(section);
				}
			});
		},

		/**
		 * Hides the section.
		 *
		 * @param	section	The section to hide.
		 */
		hide: function(section){
			switch(disclosure.settings.animation) {
				case 'slide':
					$(section).slideUp(disclosure.settings.animationSpeed);
					break;
				case 'fade':
					$(section).fadeOut(disclosure.settings.animationSpeed);
					break;
				default:
					$(section).hide();
			}
		},

		/**
		 * Shows the section.
		 *
		 * @param	section	The section to show.
		 */
		show: function(section){
			switch(disclosure.settings.animation) {
				case 'slide':
					$(section).slideDown(disclosure.settings.animationSpeed);
					break;
				case 'fade':
					$(section).fadeIn(disclosure.settings.animationSpeed);
					break;
				default:
					$(section).show();
			}
		}
	};

	// Inject the public methods into jQuery
	$.each(methods, function(i){
		$.fn[i] = this;
	});
})(jQuery);