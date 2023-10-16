document.querySelector('.burger').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('open');
    document.querySelector('.logo').classList.toggle('open_logo');
    document.querySelector('.all_menu').classList.toggle('open_all_menu');
})

let buttons = document.querySelectorAll('.menu_item');
for (let i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener('click', function() {
        let elementOne = document.getElementById('one');
		let elementTwo = document.getElementById('two');
		let elementThree = document.getElementById('three');
		let elementFour = document.getElementById('four');
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
   
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;
	let message = document.getElementById('choice').value;
   
	alert('Сообщение отправлено!');
	this.reset();
  });