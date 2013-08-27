SlideShareEmbed
===============

jQuery plugins to embed SlideShare player by providing the URL


#Usage

Right now the plugin is very bare.  Simply create an anchor tag with the SlideShare URL as the href attribute and then supply the element/class/id to the slideShareEmbed plugin.

##Example

```
<a class="slideshare" href="http://www.slideshare.net/mykebates/power-without-plugins-wordcamp-miami-2012">SlideShare Test</a>
```

```
<script>
	$(function() {
		$(".slideshare").slideShareEmbed();
	});
</script>
```