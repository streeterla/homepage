  jQuery(document).ready(function(){
    if($('#socialshareprivacy').length > 0){
		  $('#socialshareprivacy').socialSharePrivacy({
		  services : {
			facebook : {
			  'perma_option': 'off',
			  'txt_info' : 'Erster Klick: aktivieren<br /> Zweiter Klick: empfehlen'
			}, 
			twitter : {
				'perma_option': 'off',
			    'txt_info' : ''
			},
			gplus : {
			  'perma_option': 'off',
			  'txt_info' : ''
     		}
		  },
		  'cookie_domain' : 'heise.de',
		  'txt_help' : ''
		 });
    }
	else {
		console.debug("socialSharePrivacyDiv not found")
	}
  });
  
