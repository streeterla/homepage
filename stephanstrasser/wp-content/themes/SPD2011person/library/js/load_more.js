// JavaScript Document
jQuery(document).ready(function($) {
 
	// The number of the next page to load (/page/x/).
	var pageNum = parseInt(pbd_alp.startPage) + 1;
 
	// The maximum number of pages the current query can return.
	var max = parseInt(pbd_alp.maxPages);
 
	// The link of the next page of posts.
	var nextLink = pbd_alp.nextLink;
/**
 * Replace the traditional navigation with our own,
 * but only if there is at least one page of new posts to load.
 */
if(pageNum <= max) {
	// Insert the "More Posts" link.
	$('#main')
		.append('<div class="pbd-alp-placeholder-'+ pageNum +'"></div>')
		.append('<p id="pbd-alp-load-posts"><a href="#">weitere Artikel</a></p>');
 
	// Remove the traditional navigation.
	$('.pagination').remove();
}
/**
 * Load new posts when the link is clicked.
 */
$('#pbd-alp-load-posts a').click(function() {
 
	// Are there more posts to load?
	if(pageNum <= max) {
 
		// Show that we're working.
		$(this).text('Lade Artikel...');
$('.pbd-alp-placeholder-'+ pageNum).load(nextLink + ' .post',
	function() {
		// Update page number and nextLink.
		pageNum++;
		nextLink = nextLink.replace(/\/page\/[0-9]?/, '/page/'+ pageNum);
 
		// Add a new placeholder, for when user clicks again.
		$('#pbd-alp-load-posts')
			.before('<div class="pbd-alp-placeholder-'+ pageNum +'"></div>')
 
		// Update the button message.
		if(pageNum <= max) {
			$('#pbd-alp-load-posts a').text('weitere Artikel');
		} else {
			$('#pbd-alp-load-posts a').text('Keine weiteren Artikel verfügbar.');
		}
	}
);
		} else {
			$('#pbd-alp-load-posts a').append('');
		}	
 
		return false;
	});
});