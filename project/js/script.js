$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');// блокірує прокрутку коли ми в медія меню
	}); 

	$('.slider').slick({
		arrows:false, 
		dots:true,
		slidesToShow:6,
		speed:800,
		infinite:true,
		autoplay:true,
		waitForAnimate:false,
		centerMode:false,
		 responsive:[
{
    breakpoint: 768,
    settings: {
        slidesToShow:2
    }
},
{
    breakpoint: 550,
    settings: {
        slidesToShow:1
    }
}
]
	});
});