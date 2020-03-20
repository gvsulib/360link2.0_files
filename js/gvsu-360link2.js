// Remove the bootstrap styles - we'll build our own for the handful of things we need. 
	// (They conflict like crazy with our CMS styles.)
	jQuery('head').find('link[href*="bootstrap"]').remove();

	// Add the appropriate CMS classes here. ProQuest doesn't understand how templates work, wso we have to hack it
	jQuery('.sticky-row.expand').attr('id','main').attr('role','main');
	jQuery('.sticky-row').find('.container-fluid').addClass('content');

	// We need the report a problem link inside the #main container. We can't do that with PQ's terrible template.
	// So again we have to hack it in there.
	var thisUrl = '<div id="s-la-widget-9529"></div>';

	jQuery('.container-fluid.content').append('<div class="hide-print"><br><hr><div class="row"><div class="col-6"></div><div class="col-6 text-right">' + thisUrl + '</div></div></div>');

	jQuery('.sticky-row.mobile-footer').removeClass('footer');
	jQuery('#mobile-action-page').find('.edit-citation').removeClass('text-center');

		// Alert adding
	var alertScript = document.createElement('script');
alertScript.src = 'https://prod.library.gvsu.edu/labs/alert/alert.js';
document.body.appendChild(alertScript);
	