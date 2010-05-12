/**
 * Notification system for jQuery.
 *
 * @author	Dave Widmer
 * @see		http://www.davewidmer.net
 */
(function($){
	/**
	 * Notification system.
	 *
	 * @param	message		Message to set
	 * @param	options		Extra options
	 */
	$.fn.notify = function(message, options){
		// First element is an empty object so it won't override the defaults object
		options = $.extend( {}, $.fn.notify.defaults, options );
		options.id = this;
		options.message = message;
		$.fn.notify.options = options;

		// Show the notification
		$(this).html(message).addClass(options.css).slideDown('normal');

		// Set the timer
		window.setTimeout($.fn.notify.close, options.time);

		// Return for chaining
		return this;
	};

	/**
	 * Defaults.
	 */
	$.fn.notify.defaults = {
		time: 3000,
		css: 'message'
	};

	// Options
	$.fn.notify.options = {};

	/**
	 * Close function
	 */
	$.fn.notify.close = function() {
		var opts = $.fn.notify.options;
		$(opts.id).slideUp('normal', function(){
			$(this).removeClass(opts.css);
		});
	};
})(jQuery)