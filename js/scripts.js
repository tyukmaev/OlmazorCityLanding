$(function() {
	wow = new WOW(
		{
			offset: 60
		}
	)
	wow.init();
});


$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 90
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#navmenu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top 
        	+ refElement.height() > scrollPos) {
            $('#navmenu ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}


$(function(){ 
     var navMain = $(".navbar-collapse");
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });



$(function() {
	$(".ds01").click(function(e) {
		$(".ds01").toggleClass("opened");
		$(".ds02, .ds03, .ds04, .ds05, .ds06, .ds07, .ds08").removeClass("opened");
	});
	$(".ds02").click(function(e) {
		$(".ds02").toggleClass("opened");
		$(".ds01, .ds03, .ds04, .ds05, .ds06, .ds07, .ds08").removeClass("opened");
	});
	$(".ds03").click(function(e) {
		$(".ds03").toggleClass("opened");
		$(".ds01, .ds02, .ds04, .ds05, .ds06, .ds07, .ds08").removeClass("opened");
	});
	$(".ds04").click(function(e) {
		$(".ds04").toggleClass("opened");
		$(".ds01, .ds03, .ds02, .ds05, .ds06, .ds07, .ds08").removeClass("opened");
	});
	$(".ds05").click(function(e) {
		$(".ds05").toggleClass("opened");
		$(".ds01, .ds03, .ds04, .ds02, .ds06, .ds07, .ds08").removeClass("opened");
	});
	$(".ds06").click(function(e) {
		$(".ds06").toggleClass("opened");
		$(".ds01, .ds03, .ds04, .ds05, .ds02, .ds07, .ds08").removeClass("opened");
	});
	$(".ds07").click(function(e) {
		$(".ds07").toggleClass("opened");
		$(".ds01, .ds03, .ds04, .ds05, .ds06, .ds02, .ds08").removeClass("opened");
	});
	$(".ds08").click(function(e) {
		$(".ds08").toggleClass("opened");
		$(".ds01, .ds03, .ds04, .ds05, .ds06, .ds07, .ds02").removeClass("opened");
	});
});