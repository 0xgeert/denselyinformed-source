/**
 * Your code goes here. 
 * Depending on your structering you may consider adding this code to the grunt minify task.
 * @return {[type]} [description]
 */
$(function(){

	//////////////
	//HOMEPAGE
	//animate to saturated color
	$("#hero").addClass("intense");

	/////////////
	// POST
	if($(".post-content").length){
		var w = $(window);
		w.on("scroll",function() {
			var a =$(".author-box");
			a.addClass("js_unobtrusive");
			setTimeout(function(){
				a.addClass("js_unobtrusive_defer");
			}, 1200);
			w.off("scroll");
		});	

		//medium editing (http://jakiestfu.github.io/Medium.js/docs/)
		// new Medium({
		// 	element: $(".post-content article")[0]
		// });

	}

	
	
});

