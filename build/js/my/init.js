$(document).ready(function() {
	$('[data-mask="phone"]').mask("+7 (999) 999-99-99");
	var owlMain = $('[data-item="slider-main"]');
	owlMain.owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dots:true,
		items:1,
		autoplayHoverPause: true,
		autoplayTimeout: 6000,
		autoplay:true,
		dotsContainer: '.absolute .dots'
	});
	$('[data-form="send"]').ajaxForm(function() {
		$('#call').modal('hide');
		$('#thx').modal('show');
	});
	/*
	 $('.slider-navigation a').on('click', function(event){
		var that = $(this).attr('data-to');
		var owl = $('[data-item="slider-main"]');
		owl.owlCarousel();
		owl.trigger('to.owl.carousel' , [that, 300]);
		
	  });
	$('[data-to="1d"]').click();
	
	$('[data-form="send"]').ajaxForm(function() { 
		$('#call').modal('hide');
		$('#thx').modal('show');
	});
	var myMap;

			// Дождёмся загрузки API и готовности DOM.
			ymaps.ready(init);

			function init () {
				// Создание экземпляра карты и его привязка к контейнеру с
				// заданным id ("map").
				myMap = new ymaps.Map('map', {
					// При инициализации карты обязательно нужно указать
					// её центр и коэффициент масштабирования.
					center: [63.5762467, 53.6615683],
					zoom: 15,
					controls: []
				}),
				myMap.behaviors
					// Отключаем часть включенных по умолчанию поведений:
					//  - drag - перемещение карты при нажатой левой кнопки мыши;
					//  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
					.disable(['rightMouseButtonMagnifier'])
					
				
					myPlacemark = new ymaps.Placemark([63.5762467, 53.6715683], {
						
						hintContent: [
						'<h3 class=\'map_header\'>Фактический адрес:<\/h3><div class=\'map_address\'>Республика Коми, г. Ухта, пер. Интернациональный, 1А<\/div><div class=\'map_phone\'><div class=\'icon\'><\/div>8 (8216) 79-57-16<\/div>'
					].join(''),
						balloonContentBody: [
						'<h3 class=\'map_header\'>Фактический адрес:<\/h3><div class=\'map_address\'>Республика Коми, г. Ухта, пер. Интернациональный, 1А<\/div><div class=\'map_phone\'><div class=\'icon\'><\/div>8 (8216) 79-57-16<\/div>'
					].join('')
					}, {
						
					});
					myMap.geoObjects.add(myPlacemark);
				
				
			}*/
	$('.arrow').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});