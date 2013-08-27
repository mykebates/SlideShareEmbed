SlideShareEmbed
===============

jQuery plugin to embed SlideShare player by simply providing the URL


#Usage

Right now the plugin is very bare.  Simply create an anchor tag with the SlideShare URL as the href attribute and then supply the element/class/id to the slideShareEmbed plugin.

Include the script after jQuery is included
```HTMl
<script src="../YourPathHere/jquery.slideShareEmbed.js"></script>
```

##Example


###HTML
```HTMl
<a class="slideshare" href="http://www.slideshare.net/mykebates/power-without-plugins-wordcamp-miami-2012">SlideShare Test</a>
```

###JavaScript
```JavaScript
$(function() {
	$(".slideshare").slideShareEmbed();
});
```