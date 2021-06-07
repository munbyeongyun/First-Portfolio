  $(function(){  
    //scroll
    $(window).scroll(function(){
		var wds = $(this);
		
    animation(wds,$('.beside > div'));  
		animation(wds,$('.mall_inner > div'));
		animation(wds,$('.store_inner > h2'));
		animation(wds,$('.store_inner > p'));
		animation(wds,$('.store_inner > a'));
		
	})
	
	// animation function
	
	 function animation(ws,pr) {
        if(ws.scrollTop() >= pr.offset().top - ws.height()){
            pr.addClass('ani');
        } else {
            pr.removeClass('ani');
        }
    }
	});