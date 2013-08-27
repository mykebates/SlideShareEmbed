;(function ( $, window, document, undefined ) {

		var pluginName = "slideShareEmbed",
				defaults = {
		};

		// Plugin constructor
		function Plugin ( element, options ) {
				this.element = element;
				this.options = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}

		Plugin.prototype = {
				init: function () {
						var slideShareEle = $(this.element),
							slideShareURL = $(this.element).attr("href");
						slideShareEle.hide();
						this.loadSlideShareEmbed(slideShareURL);
				},
				loadSlideShareEmbed: function (slideShareURL) {
						var _this = this,
							requestData = {
		                    url: slideShareURL,
		                    format: "json"
		                };

						$.ajax({
	                        url: "http://www.slideshare.net/api/oembed/2",
	                        data: requestData,
	                        type: "GET",
	                        crossDomain: true,
	                        success: function(data){
	                            _this.injectEmbed(data);
	                        },
	                        dataType: "jsonp"
	                    });
				},
				injectEmbed: function (data) {
						$(this.element).replaceWith(data.html);
				}
		};

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function ( options ) {
				return this.each(function() {
						if ( !$.data( this, "plugin_" + pluginName ) ) {
								$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
						}
				});
		};

})( jQuery, window, document );
