$(function(){
	$("#box").fullpage({
		// navigation:true
		anchors:['page1','page2','page3','page4'],
		menu:'menu'

	});
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });



	var box = $(".work-box").each(function(i,o){
		var a = 200;
		$(this).css({transition:"all 1s "+a*i+"ms"})
	})
})