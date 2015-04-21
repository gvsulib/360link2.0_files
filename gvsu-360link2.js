setTimeout(function() {
	jQuery(document).ready(function() {
	
		// Remove bootstrap and all the other crappy CSS they load, but keep ours
		jQuery('head').find('link:nth-of-type(-n+4)').remove();
		
		// Hide browse journal chunks and set click event to show them
		jQuery('.link-details.hide').hide();
		
		// Add a mailto: link to the custom links at the bottom, since ProQuest won't let you using their custom links tool (Lame)
		jQuery('.custom-links').find('div:only-of-type').append('<div class="gvsu-custom-link"><a href="mailto:erms@gvsu.edu?subject=Problem%20Linking%20to%20Full%20Text&amp;body=' + encodeURIComponent(location.pathname) + encodeURIComponent(location.search) + '">Found a problem? Let our crack team of link-fixers know!</a>');
		
		// Attempt to style the elementless heading that divides browse and full text
		jQuery('div.resource-row:contains("Browse the online journal by issue or volume")').css('font-weight', 'bold').css('font-size', '1.2em').find('a').css('font-size','.9em').next('.resource-description-text').css('font-weight','normal').css('font-size','.8em');
		
		// Fix the bad label on Print items		
		jQuery(".resource-description-text:contains('Print Journal at GVSU Libraries')").contents().filter(function () {
		     return this.nodeType === 3;
		     jQuery(this).find('resource-name').text('in Print at GVSU Libraries');
		}).remove();
	
		// Fix the poorly worded 'not available' link
		if(jQuery('body').length > 0) {
			var headerText = jQuery('h3.custom-links-rectangle-header').text();
		
			console.log(headerText);
		
			if (headerText == 'Sorry, this item is not available online. Please use options below to get it:') {
				jQuery('h3.custom-links-rectangle-header').text('Sorry, this item is not available online.').css('font-size', '1.5em').css('font-weight', 'bold');
			}
		
		}

	});
}, 400);