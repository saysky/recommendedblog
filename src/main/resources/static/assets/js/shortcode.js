jQuery(function($) {

	"use strict";

	var alay = window.alay || {};
	alay.blogSliderSyncing = function() {
		$(".alay-sc-blog-slider.slider-syncing").each(function(){
			var data = $('.slider-for',$(this)).data('slides');
			var slider_for = $('.slider-for',$(this)),
				slidesToShow = data.slidesToShow,
				slidesToScroll = data.slidesToScroll,
				arrow = data.arrows,
				centerMode = data.centerMode,
				dot = data.dots,
				dotstyle = data.dotstyle,
				paramDefault = {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					arrows:false,
					focusOnSelect: true,
					centerMode:false,
					asNavFor: '.slider-nav',
					responsive: [
						{
							breakpoint: 600,
							settings: {
								dots: false,
							}
						},
					],
				};

				$.extend( paramDefault,{
					slidesToShow: parseInt(slidesToShow),
					slidesToScroll: parseInt(slidesToScroll),
					focusOnSelect: true,
					centerMode : centerMode,
				});

				if( dot == 'true' ){
					if( dotstyle == 'normal' ){
						$.extend(paramDefault,{
							dots: true,

						});
					}else{
						$.extend(paramDefault,{
							dots: true,
							customPaging : function (slider, i) {
							i++;
							return '<a class="slide-dot ">' + i + '</a>'

							}
						});
					}
				}

				if( arrow == 'true' ){
					$.extend( paramDefault,{
						arrows: true,
						nextArrow : "<div class='next-slide slick-arrow'><a class='arrow-slide'><i class='fa fa-long-arrow-right'></i></a></div>",
						prevArrow : "<div class='prev-slide slick-arrow'><a class='arrow-slide'><i class='fa fa-long-arrow-left'></i></a></div>",
					});
				}

				slider_for.slick(paramDefault);

				//nav
				var data = $('.slider-nav',$(this)).data('slides');
				var slider_nav = $('.slider-nav',$(this)),
				slidesToShow = data.slidesToShow,
				slidesToScroll = data.slidesToScroll,
				arrow = data.arrows,
				centerMode = data.centerMode,
				dot = data.dots,
				dotstyle = data.dotstyle,
				paramDefault = {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					arrows:false,
					focusOnSelect: true,
					centerMode:false,
					asNavFor: '.slider-for',
					responsive: [
						{
							breakpoint: 600,
							settings: {
								slidesToShow: 2,
							}
						},
					],
				};

				$.extend( paramDefault,{
					slidesToShow: parseInt(slidesToShow),
					slidesToScroll: parseInt(slidesToScroll),
					focusOnSelect: true,
					centerMode : centerMode,
				});

				if( dot == 'true' ){
					if( dotstyle == 'normal' ){
						$.extend(paramDefault,{
							dots: true,

						});
					}else{
						$.extend(paramDefault,{
							dots: true,
							customPaging : function (slider, i) {
							i++;
							return '<a class="slide-dot ">' + i + '</a>'

							}
						});
					}
				}
				if( arrow == 'true' ){
					$.extend( paramDefault,{
						arrows: true,
						nextArrow : "<div class='next-slide slick-arrow'><a class='arrow-slide'><i class='fa fa-long-arrow-right'></i></a></div>",
						prevArrow : "<div class='prev-slide slick-arrow'><a class='arrow-slide'><i class='fa fa-long-arrow-left'></i></a></div>",
					});
				}
				slider_nav.not('.slick-initialized').slick(paramDefault);

		});

	};

	alay.blogslider = function() {

		$(".alay-sc-blog-slider .blog-slick").each(function(){
			var data = $(this).data('slides');
			var dataMd = $(this).data('slides-md');
			var slidesToShow = data.slidesToShow,
				slidesToScroll = data.slidesToScroll,
				arrow = data.arrows,
				centerMode = data.centerMode,
				dot = data.dots,
				dotstyle = data.dotstyle,
				paramDefault = {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					arrows:false,
					focusOnSelect: true,
					centerMode: false,
					responsive: [
						{
							breakpoint: 600,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						},
					],
				};

				$.extend( paramDefault,{
					slidesToShow: parseInt(slidesToShow),
					slidesToScroll: parseInt(slidesToScroll),
					focusOnSelect: true,
					centerMode: centerMode,
					responsive: [
						...paramDefault.responsive,
						{
							breakpoint: 769,
							settings: dataMd,
						},
					]
				});

				if( dot == 'true' ){
					if( dotstyle == 'normal' ){
						$.extend(paramDefault,{
							dots: true,
						});
					}else{
						$.extend(paramDefault,{
							dots: true,
							customPaging : function (slider, i) {
							i++;
							return '<a class="slide-dot ">' + i + '</a>'

							}
						});
					}
				}

				if( arrow == 'true' ){
					$.extend( paramDefault,{
						arrows: true,
						nextArrow : "<div class='next-slide slick-arrow'><a class='arrow-slide'><i class='fa fa-long-arrow-right'></i></a></div>",
						prevArrow : "<div class='prev-slide slick-arrow'><a class='arrow-slide'><i class='fa fa-long-arrow-left'></i></a></div>",
					});
				}
				$(this).not('.slick-initialized').slick(paramDefault);
		});

	};

	alay.mainslider = function() {

		$(".alay-slider .slider-item").each(function(){
			var data = $(this).data('slides');
			var $main_slider = $(this),
				slidesToShow = data.slidesToShow,
				slidesToScroll = data.slidesToScroll,
				arrow = data.arrows,
				dot = data.dots,
				dotstyle = data.dotstyle,
				paramDefault = {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					arrows:false,
					focusOnSelect: true,
				};

				$.extend( paramDefault,{
					slidesToShow: parseInt(slidesToShow),
					slidesToScroll: parseInt(slidesToScroll),
				});

				if( dot == 'true' ){
					if (dotstyle == 'normal') {
						$.extend(paramDefault,{
							dots: true,
						});
					} else {
						$.extend(paramDefault,{
							dots: true,
							customPaging : function (slider, i) {
								i++;
								return '<a class="slide-dot ">' + i + '</a>'
							}
						});
					}
				}

				if( arrow == 'true' ){
					$.extend( paramDefault,{
						arrows: true,
						nextArrow : "<div class='next-slide slick-arrow'><a class='arrow-slide'><i class='fa fa-long-arrow-right'></i></a></div>",
						prevArrow : "<div class='prev-slide slick-arrow'><a class='arrow-slide'><i class='fa fa-long-arrow-left'></i></a></div>",
					});
				}
				$(this).not('.slick-initialized').slick(paramDefault);

		});

	};


	alay.masonry = function() {
		var $grid = $('.msr-grid').masonry({
		 	itemSelector: '.msr-grid-item',
		 	percentPosition: true,
		 	columnWidth: '.msr-grid-sizer'
		});
		// layout Masonry after each image loads
		$grid.imagesLoaded().progress( function() {
		 	$grid.masonry();
		});
	}

	/*------------------------------------------------------------------

	Initialize Function

	-------------------------------------------------------------------*/

	// Initialize function when document load

	$(document).ready(function(){
		alay.blogslider();
		alay.mainslider();
		alay.blogSliderSyncing();
		alay.masonry();
	});

	$(window).resize(function() {
		alay.blogslider();
		alay.mainslider();
		alay.blogSliderSyncing();
	});

});
