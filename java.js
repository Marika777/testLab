document.querySelector('.burger').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('open');
    document.querySelector('.logo').classList.toggle('open_logo');
    document.querySelector('.all_menu').classList.toggle('open_all_menu');
})

var buttons = document.querySelectorAll('.menu_item');
for (var i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener('click', function() {
        var elementOne = document.getElementById('one');
		var elementTwo = document.getElementById('two');
		var elementThree = document.getElementById('three');
		var elementFour = document.getElementById('four');
		elementOne.classList.remove("active");
		elementTwo.classList.remove("open");
		elementThree.classList.remove("open_logo");
		elementFour.classList.remove("open_all_menu");
    });
}


$('.single-item').slick({
	dots: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 1500,
	responsive: [
		{
			breakpoint: 1185,
			settings: {
		  	arrows:false,
			}
	  	},
	    {
	      	breakpoint: 972,
	      	settings: {
	    	slidesToShow: 2,
			arrows:false,
			infinite: true,
	      }
	    },
	    {
	      	breakpoint: 660,
	      	settings: {
	        slidesToShow: 1,
			arrows:false,
			infinite: true,
	      }
	    }
    ]
});

$('.question').click(function() {
	$(this).find('.contents').toggle(200); 
	$(this).find('span').css('transform', 'rotate(0deg)');
	if ($(this).hasClass('open')) {
		$(this).removeClass('open');
	} else {
		$(this).addClass('open');
		$(this).find('span').css('transform', 'rotate(45deg)');
	};
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
	event.preventDefault();
   
	var name = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var message = document.getElementById('choice').value;
   
	alert('Сообщение отправлено!');
	this.reset();
  });