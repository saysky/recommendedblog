jQuery(function ($) {
	"use strict";
	/**
	 * @param {{alay:string}} data
	 */
	var alay = window.alay || {};
	/*------------------------------------------------------------------
	This file include js code for layout like header, navigation, footer, ...
	-------------------------------------------------------------------*/
	alay.mainLayoutFuntion = function () {
    // Waiting for first section load all images, then hide the preloader
    $('.loaded-images-wrapper').imagesLoaded()
      .done( function( instance ) {
        $('.preloader').addClass('hiding');
  			setTimeout(function() {
  				$('.preloader').addClass('hidden');
  			}, 300);
      });

    // totop function
		$('#totop').on('click', function () {
			$('html, body').animate({ scrollTop: 0 }, 'slow');
			return false;
		});

    // toggle search dialog
		$('.search-bar').on('click', function () {
			var input = $(this).next().find('input');
			input.focus();
		});

    // toogle color mode
    $('#switch-mode').on('click', function() {
      $('body').toggleClass('dark-mode');
      if ($('body').hasClass('dark-mode')) {
        $(this).find('.dark-mode').addClass('d-none');
        $(this).find('.light-mode').removeClass('d-none');
      } else {
        $(this).find('.dark-mode').removeClass('d-none');
        $(this).find('.light-mode').addClass('d-none');
      }
    });
	};

	// Set menu fixed when scroll
	alay.menuScroll = function () {
		var window_height = $(window).height();
		$(window).bind('scroll', function () {
			if ($(this).scrollTop() > window_height) {
				$(".sticky-enable header").addClass("header-fixed");
				$('#totop').removeClass('zoomOut');
				$('#totop').addClass('zoomIn');
				$('#totop').fadeIn();
			} else {
				$("header").removeClass("header-fixed");
				$('#totop').addClass('zoomOut');
				$('#totop').removeClass('zoomIn');
				$('#totop').fadeOut();
			}
		});
	};

	// Menu Hover
	alay.menuHover = function () {
		// Dropdown Hover
		$('ul#main-nav li.dropdown').hover(function () {
			var $this = $(this);
			$this.find('.dropdown-menu').show();
			setTimeout(function () {
				$this.addClass('open');
			}, 200)
		}, function () {
			var $this = $(this);
			$this.find('.dropdown-menu').hide();
			setTimeout(function () {
				$this.removeClass('open');
			}, 200)
		});
	};

	// Menu Offcanvas for table and mobile device
	alay.mobileMenu = function () {
		$('.dropdown-toggle > .btn-open-dropdown').on('click', function (e) {
			e.preventDefault();
			e.stopPropagation();
			const menuItem = $(this).parents('.menu-item');
			const submenu = menuItem.find('> .dropdown-menu');

			menuItem.toggleClass('menu-open');
			submenu.toggle();
		});

		$('.open-menuMobile').on('click', function() {
			$('.header-mobile').addClass('show');
			$('.header-mobile-backdrop').addClass('show');
		});

		$('.toggle-header-mobile').on('click', function() {
			$('.header-mobile').removeClass('show');
			$('.header-mobile-backdrop').removeClass('show');
		})

		$('.header-mobile-backdrop').on('click', function() {
			$('.header-mobile').removeClass('show');
			$(this).removeClass('show');
		})
	};

	/*------------------------------------------------------------------
	Initialize Function
	-------------------------------------------------------------------*/
	$(document).ready(function () {
		// Main function
		alay.mainLayoutFuntion();
		alay.menuScroll();

		// Check Menu Style
		if ($(window).width() < 1025) {
			// active offcanvas menu
			alay.mobileMenu();
		} else {
			// active hover menu
			alay.menuHover();
		}

	});
});
