/**
 * Prefills a form element with a hint of what to type.
 *
 * @author	Dave Widmer
 * @see		http://www.davewidmer.net
 */
(function($){
	// The public methods for the plugin
	var methods = {
		/**
		 * Prefill plugin
		 *
		 * @param options	An object of options.
		 */
		prefill: function(options){
			prefill.settings = $.extend(prefill.defaults, options);

			return this.each( function(){
				// Find the label and add the css class
				var label = $('label[for='+this.id+']');
				$(label).addClass(prefill.settings.css);

				// If the input has a value, hide the label
				if(this.value != ''){
					$(label).hide();
				}

				// Add focus and blur to input
				$(this).focus( function(){
					$(label).hide();
				});

				// Add blur
				$(this).blur( function(){
					if( this.value == '' ){
						$(label).show();
					}
				});
			});
		}
	};

	var prefill = {
		// The settings for the plugin
		settings: {},

		// The default settings for the plugin
		defaults: {
			css: 'prefill'
		}
	};

	// Inject the public methods into jQuery
	$.each(methods, function(i){
		$.fn[i] = this;
	});
})(jQuery);