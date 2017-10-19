$(function() {

	$(".top-line .sf-menu").superfish({
		cssArrows: false,
		hoverClass: 'no-class',
		delay: 200
	});

	var owl = $('.slider');
  owl.owlCarousel({
   loop: true,
   items: 1,
   itemElement: 'slide',
   nav: true
  });

  $('.next').on('click', function () {
      owl.trigger('next.owl.carousel', [500]);
  });
  $('.prev').on('click', function () {
      owl.trigger('prev.owl.carousel', [500]);
  }); 

  // $(".slider").owlCarousel({
  // 	loop: true,
  // 	items: 1,
  // 	itemElement: 'slide',
  // 	nav: true
  // });

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
