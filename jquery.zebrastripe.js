/**
 * Zebra Striping Plugin
 *
 * @author	Dave Widmer
 * @see		http://www.davewidmer.net
 */
(function($){
	/**
	 * A pluging that zebra sripes a table
	 *
	 * @param options	Options for the zebra striping
	 */
	var methods = {
		zebrastripe: function(options){
			options = $.extend(defaults, options);

			// Add in some properties
			options.stripes = options.classes.length;
			options.css = options.classes.join(' ');

			return this.each(function(){
				$(this).find(options.selector).each(function(i){
					$(this).removeClass(options.css);
					$(this).addClass(options.classes[i % options.stripes] );
				});
			});
		}
	}

	// Default settings
	var defaults = {
		selector: 'tr:visible',
		classes: ['odd','even']
	};

	// Inject the public methods into jQuery
	$.each(methods, function(i){
		$.fn[i] = this;
	});
})(jQuery);