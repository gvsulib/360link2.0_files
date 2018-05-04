setTimeout(function() {

	jQuery(document).ready(function() {

		// Remove their terrible CSS
		jQuery('head').find('link[href*="bootstrap"]').remove();

		// Add custom CSS
		jQuery('head').append('<link rel="stylesheet" type="text/css" href="https://prod.library.gvsu.edu/labs/360link2.0/gvsu-360link2.css" />');

	});

}, 500);