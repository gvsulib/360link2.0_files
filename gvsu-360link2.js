setTimeout(function() {
	jQuery(document).ready(function() {
	
		// Remove bootstrap and all the other crappy CSS they load, but keep ours
		jQuery('head').find('link:nth-of-type(-n+4)').remove();
	
		// Fix the poorly worded 'not available' link
		if(jQuery('body').length > 0) {
			var headerText = jQuery('h3.custom-links-rectangle-header').text();
		
			console.log(headerText);
		
			if (headerText == 'Sorry, this item is not available online. Please use options below to get it:') {
				jQuery('h3.custom-links-rectangle-header').text('Sorry, this item is not available online.').css('font-size', '1.5em').css('font-weight', 'bold');
			}
		
		}

	});
}, 800);