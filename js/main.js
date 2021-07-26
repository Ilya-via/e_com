jQuery(document).ready(function ($) {
	"use strict";
	// Ajax search
	$('.ajax-search input[type="text"]').on('blur', function () {
		$('.list-product-search').removeClass('active');
	});
	$('.ajax-search input[type="text"]').on('keydown', function () {
		if ($(this).val() == "") {
			$('.list-product-search').removeClass('active');
		} else {
			$('.list-product-search').addClass('active');
		}
	});
	// close quickview

	$(".quickview-close").on("click", function () {
		$('.quickview-wrapper').hide();
		$('.quickview-wrapper').removeClass('open');
		$('.quick-modal').removeClass('show');
	});
	// open Vertical menu 
	$(".js-vertical-menu").on("click", function () {
		$('.vertical-wrapper').slideToggle(200);
		$(this).toggleClass('active');
	});
	//menu change icon and dropdown
	$(".icon-mobile").on("click", function () {
		$(this).toggleClass('active');
	});
	//menu change icon and dropdown
	$(".js-menubar li .js-plus-icon").on("click", function () {
		$(this).toggleClass('minus');
		$(this).parent().find(".dropdown-menu").slideToggle(function () {
			$(this).next().stop(true).toggleClass('open', $(this).is(":visible"));
		});
	});

	$(".js-filter-menu li .js-plus-icon").on("click", function () {
		$(this).toggleClass('minus');
		$(this).parent().find(".filter-menu").slideToggle(function () {
			$(this).next().stop(true).toggleClass('open', $(this).is(":visible"));
		});
	});

	$(".filter .js-drop").on("click", function () {
		$(this).parent().find(".ion-ios-arrow-down").toggleClass('ion-ios-arrow-up');
		$(this).parent().find("ul").slideToggle(function () {
			$(this).next().stop(true).toggleClass('open', $(this).is(":visible"));
		});
		$(this).parent().find(".sidebar-product-list").slideToggle(function () {
			$(this).next().stop(true).toggleClass('open', $(this).is(":visible"));
		});
	});

	$(".checkout-page .js-drop").on("click", function () {
		$(this).toggleClass('active');

		$(this).parent().find(".filter-content").slideToggle(function () {
			$(this).next().stop(true).toggleClass('open', $(this).is(":visible"));
		});
	});
	// Product detail
	$(".js-close-tab").on("click", function () {
		$(this).removeClass('open')
		$('.detail-content').removeClass('active');
		$('.detail-tab').removeClass('open');

	});
	$('.js-tabs a').on("click", function () {
		$(".js-close-tab").addClass('open');
		$('.detail-tab').addClass('open');
		$('.detail-content').addClass('active');

	})
	if ($('.js-tabs > li').hasClass('active')) {
		$(".js-close-tab").addClass('open');
		$('.detail-tab').addClass('open');
		$('.detail-content').addClass('active');
	}

	// Product Grid
	$(".js-filter-menu li .js-plus-icon").on("click", function () {
		$(".js-filter-menu > li > a").toggleClass('active');
		$(this).toggleClass('minus');
		$(this).parent().find(".filter-menu").slideToggle(function () {
			$(this).next().stop(true).toggleClass('open', $(this).is(":visible"));
		});
	});
	// Open menu dropdown home 5
	$(".js-menubar li .icon-sub-menu, .js-menubar li a").on("click", function () {

		$(this).toggleClass('up-icon');
		$(this).parent().find(".js-open-menu").slideToggle('fast', function () {
			$(this).next().stop(true).toggleClass('open', $(this).is(":visible"));
		});
	});
	// Open menu other page. Header-v2
	$(".js-menu").on("click", function () {
		$(this).toggleClass('active');
		$('.js-open-menu').toggleClass('open');
	});


	// Push menu home 5
	var menuLeft = $('.pushmenu-left');
	var menuHome6 = $('.menu-home5');
	var nav_list = $('.open-cart');
	var nav_click = $('.icon-pushmenu');
	nav_list.on("click", function (event) {
		event.stopPropagation();
		$(this).toggleClass('active');
		$('body').toggleClass('pushmenu-push-toright-cart');
		menuLeft.toggleClass('pushmenu-open');
		$(".container").toggleClass("canvas-container");
	});
	nav_click.on("click", function (event) {
		event.stopPropagation();
		$(this).toggleClass('active');
		$('body').toggleClass('pushmenu-push-toleft');
		menuHome6.toggleClass('pushmenu-open');
	});
	$(".wrappage").on("click", function () {
		$(this).removeClass('active');
		$('body').removeClass('pushmenu-push-toright-cart').removeClass('pushmenu-push-toleft');
		menuLeft.removeClass('pushmenu-open');
		menuHome6.removeClass('pushmenu-open');
	});
	$(".close-left").on("click", function () {
		$(this).removeClass('active');
		$('body').removeClass('pushmenu-push-toright-cart');
		menuLeft.removeClass('pushmenu-open');
	});
	$(".close-left").on("click", function () {
		$('body').removeClass('pushmenu-push-toleft');
		menuHome6.removeClass('pushmenu-open');
	});
	// SHOPPING CART Quantity increment buttons

	var quantitiy = 0;
	$('.js-plus').on("click", function (e) {

		// Stop acting like a button
		e.preventDefault();
		// Get the field name
		var quantity = parseInt($('.js-number').val(), 10);

		// If is not undefined

		$('.js-number').val(quantity + 1);


		// Increment    
	});

	$('.js-minus').on("click", function (e) {
		// Stop acting like a button
		e.preventDefault();
		// Get the field name
		var quantity = parseInt($('.js-number').val(), 10);

		// If is not undefined

		// Increment
		if (quantity > 0) {
			$('.js-number').val(quantity - 1);
		}
	});
	// Js product single slider
	$('.js-click-product').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.js-product-slider',
		dots: false,
		focusOnSelect: true,
		infinite: true,
		arrows: false,
		vertical: true,
		responsive: [

			{
				breakpoint: 1367,
				settings: {
					vertical: false
				}
			}
		]
	});
	$('.js-product-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.js-click-product'
	});
	//SHOP LISTING FILTER
	// Price Slider
	if ($('.price-slider').length > 0) {
		$('.price-slider').slider({
			min: 100,
			max: 700,
			step: 10,
			value: [100, 400],


		});
	}
	//SHOP GRID
	$(".view-mode > a").on("click", function () {
		$(this).addClass('active').siblings().removeClass('active');;

		if ($(this).hasClass('col2')) {
			$(".product-grid").addClass("product-grid-v2");
			$(".product-grid").removeClass("product-list");
		}
		if ($(this).hasClass('col')) {
			$(".product-grid").removeClass("product-grid-v2 product-list");
		}
		if ($(this).hasClass('list')) {
			$(".product-grid").addClass("product-list product-grid-v2");
		}
	});
	// Open zipcode
	$(".calculate").on('click', function () {
		$(this).next().slideToggle();
		$(this).toggleClass("active");
	});
	// Checkout : open login box
	$(".js-showlogin").on('click', function () {
		$(".js-openlogin").slideToggle();
		$(this).toggleClass("active");
	});
	// Checkout : open coupon
	$(".js-showcp").on('click', function () {
		$(".js-opencp").slideToggle();
		$(this).toggleClass("active");

	});
	//Open filter menu mobile
	$('.filter-collection-left > a').on('click', function () {
		$('.wrappage').addClass('show-filter');
	});
	$(document).bind("mouseup touchend", function (e) {
		var container = jQuery("#filter-sidebar");
		if (!container.is(e.target) // if the target of the click isn't the container...
			&&
			container.has(e.target).length === 0) // ... nor a descendant of the container
		{
			$('.wrappage').removeClass('show-filter');
		}
	});
	$('.close-sidebar-collection').click(function () {
		$('.wrappage').removeClass('show-filter');
	});

	// Scroll slider

	$('.scroll-down').on('click', function () {
		$('html, body').animate({
			scrollTop: $('section#main-content').offset().top
		}, 'slow');
		return false;
	});
	// Scroll to TOP
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scroll_top').fadeIn();
		} else {
			$('.scroll_top').fadeOut();
		}
	});

	$('.scroll_top').on('click', function () {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();

		if (scroll > 500) {
			$(".intro").hide();
			$(".scroll_down").hide();
		}
	});
	// scroll down
	$(".scroll_down").on('click', function (e) {
		e.preventDefault();
		$(".intro").hide();
		$(this).hide();
		return false;
	});

	// owl category
	$('.js-owl-cate').owlCarousel({
		margin: 30,
		autoplay: false,
		autoplayTimeout: 3000,
		loop: true,
		dots: false,
		nav: true,
		navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			1024: {
				items: 3,

			},
			1200: {
				items: 4,
				nav: false,
				dots: true
			},
			1600: {
				items: 4,
				margin: 40,
				nav: false,
				dots: true
			}
		}
	});
	$('.js-owl-team').owlCarousel({
		margin: 30,
		autoplay: false,
		autoplayTimeout: 3000,
		loop: true,
		dots: false,
		nav: true,
		navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			1024: {
				items: 3
			},
			1200: {
				items: 4,
				margin: 40
			}
		}
	});
	$('.js-owl-cate2').owlCarousel({
		margin: 30,
		autoplay: false,
		autoplayTimeout: 3000,
		loop: true,
		dots: true,
		nav: false,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			1024: {
				items: 3
			},
			1200: {
				items: 3
			},
			1600: {
				items: 3,
				margin: 40
			}
		}
	});


	// owl brand
	$('.js-owl-brand').owlCarousel({
		margin: 30,
		autoplay: false,
		autoplayTimeout: 3000,
		loop: true,
		dots: false,
		nav: true,
		navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 3
			},
			1024: {
				items: 5
			},
			1200: {
				items: 7
			}
		}
	});
	$('.js-owl-brand2').owlCarousel({
		margin: 30,
		autoplay: false,
		autoplayTimeout: 3000,
		loop: true,
		dots: false,
		nav: true,
		navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 3
			},
			1024: {
				items: 4
			},
			1200: {
				items: 6
			}
		}
	});
	$(".js-owl-brand2 .owl-nav > div").on("click", function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
	// product carousel
	$('.js-owl-product').owlCarousel({
		margin: 30,
		autoplay: true,
		autoplayTimeout: 3000,
		loop: true,
		dots: false,
		nav: true,
		navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			1024: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});
	$('.js-owl-product2').owlCarousel({

		margin: 30,
		autoplay: false,
		autoplayTimeout: 3000,
		loop: true,
		dots: false,
		nav: true,
		navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			1200: {
				items: 3
			},
			1600: {
				items: 3,
				margin: 40
			}
		}
	});
	$(".js-owl-product2 .owl-nav > div").on("click", function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
	$('.js-owl-blog').owlCarousel({

		margin: 30,
		autoplay: false,
		autoplayTimeout: 3000,
		loop: true,
		dots: true,
		nav: true,
		navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			1200: {
				items: 3
			},
			1600: {
				items: 3,
				margin: 40
			}
		}
	});
	$(".js-owl-blog .owl-nav > div").on("click", function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
	$(".js-quickview-slide  .slick-arrow").on("click", function () {
		$(this).addClass('active');
	});
	$('.js-owl-post').owlCarousel({
		nav: true,
		navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
		items: 1,
		dots: false
	});
	$('.js-owl-quote').owlCarousel({
		nav: false,
		items: 1,
		dots: true,
		singleItem: true,
	});
	$('.js-oneitem').owlCarousel({
		nav: false,
		items: 1,
		dots: true,
		singleItem: true,
	});
	$('.js-oneitem2').owlCarousel({
		nav: false,
		items: 1,
		singleItem: true,
		dots: true,
	});
	// Instagram carousel
	$('.js-owl-instagram').owlCarousel({
		margin: 0,
		autoplay: true,
		autoplayTimeout: 3000,
		loop: true,
		nav: false,
		navText: ["", ""],
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			1000: {
				items: 5
			}
		}
	});

	$('.js-multiple-row2').slick({
		dots: true,
		arrows: false,
		slidesPerRow: 4,
		rows: 2,
		responsive: [{
				breakpoint: 1025,
				settings: {
					slidesPerRow: 3,
				}
			},
			{
				breakpoint: 813,
				settings: {
					slidesPerRow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: true,
					prevArrow: '<span class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
					nextArrow: '<span class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
					infinite: true,
					dots: false,
					slidesPerRow: 1,
					rows: 1,
				}
			}
		]
	});

	$('.js-multiple-row').slick({
		dots: true,
		arrows: false,
		slidesPerRow: 3,
		rows: 2,
		responsive: [{
				breakpoint: 1025,
				settings: {
					slidesPerRow: 3,
				}
			},
			{
				breakpoint: 813,
				settings: {
					slidesPerRow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: true,
					prevArrow: '<span class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
					nextArrow: '<span class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
					infinite: true,
					dots: false,
					slidesPerRow: 1,
					rows: 1,
				}
			}
		]
	});
	$('.js-multiple-row3').slick({
		dots: true,
		arrows: false,
		slidesPerRow: 2,
		rows: 2,
		responsive: [{
				breakpoint: 1025,
				settings: {
					slidesPerRow: 2,
				}
			},
			{
				breakpoint: 813,
				settings: {
					slidesPerRow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: true,
					prevArrow: '<span class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
					nextArrow: '<span class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
					infinite: true,
					dots: false,
					slidesPerRow: 1,
					rows: 1,
				}
			}
		]
	});




	// js slick one item homepage 3

	// Slider collectiion full
	var $status = $('.pagingInfo');
	var $slickElement = $('.js-slider-collectionf');
	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var i = (currentSlide ? currentSlide : 0) + 1;
		$status.text('0' + i);
	});
	$('.js-slider-collectionf').on('afterChange', function (event, slick, currentSlide) {
		$('.slick-active').append('<div class="pagingInfo"');
	});
	$('.js-slider-collectionf').slick({
		autoplay: true,
		dots: true,
		centerMode: true,
		infinite: true,
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		appendDots: $('.post-fade'),
		dotsClass: 'custom_paging',
		customPaging: function (slider, i) {
			var thumb = $(slider.$slides[i]).data();
			return '<a class="dots"></a>';
		},

	});

	// Slider collectiion full
	var $status = $('.pagingInfo');
	var $slickElement = $('.js-slider-home4');
	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var i = (currentSlide ? currentSlide : 0) + 1;
		$status.text('0' + i);
	});
	$('.js-slider-home4').on('afterChange', function (event, slick, currentSlide) {
		$('.slick-active').append('<div class="pagingInfo"');
	});
	$('.js-slider-home4').slick({
		autoplay: true,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		appendDots: $('.post-fade'),
		dotsClass: 'custom_paging',
		customPaging: function (slider, i) {
			var thumb = $(slider.$slides[i]).data();
			return '<a class="dots"></a>';
		},
	});
	// Slider collection detail
	$('.js-slider-collectiond').slick({
		autoplay: true,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		appendDots: $('.post-fade'),
		dotsClass: 'custom_paging',
		customPaging: function (slider, i) {
			var thumb = $(slider.$slides[i]).data();
			return '<a class="dots"></a>';
		},

	});
	//  Show more

	// slider home 3 and home 2
	$('.js-slider-3items').slick({
		autoplay: false,
		infinite: false,
		arrows: false,
		dots: true
	});
	// js blogpost
	$('.js-single-post').slick({
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		dots: true
	});
	// js quickview
	$('.js-quickview-slide').slick({
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		prevArrow: '<span class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
		nextArrow: '<span class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
		dots: true
	});
	// slider home 1
	$('.js-slider-home2').slick({
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		arrows: true,
		prevArrow: '<span class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
		nextArrow: '<span class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
	});

	// JS owl team Carousel 
	$('.js-owl-test').owlCarousel({
		items: 1,
		singleItem: true,
		nav: true,
		navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
		dots: false,
	});
	// Scroll slide homepage 2

	$('.slide-scroll').on('click', function () {
		$('html, body').animate({
			scrollTop: $('section#contenthome2').offset().top
		}, 'slow');
		return false;
	});
	var handleScrollTop = function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 250);
	};
	// Footer to top
	$('footer > .scroll-top').on('click', function (e) {
		handleScrollTop(e);
	});

	$('.backto.vow-top').on('click', function (e) {
		handleScrollTop(e);
	});
	// Read more
	$(function () {
		var $header = $('.entry-content');
		var $half = parseInt($(".img-cal").height()) / 2;
		var $window = $(window).on('resize', function () {
			var height = $header.height() - $half;
			$header.height(height);
		}).trigger('resize'); //on page load


	});
	$(function () {

		var $el, $ps, $up, $p, totalHeight;

		$(".entry-content .btn-show").click(function () {

			// IE 7 doesn't even get this far. I didn't feel like dicking with it.

			totalHeight = 0

			$el = $(this);
			$p = $el.parent();
			$up = $p.parent();
			$ps = $up.find(".e-text");

			// measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
			$ps.each(function () {
				totalHeight += $(this).outerHeight();
				// FAIL totalHeight += $(this).css("margin-bottom");
			});

			$up
				.css({
					// Set height to prevent instant jumpdown when max height is removed
					"height": $up.height(),
					"max-height": 9999,
					"margin-bottom": 30
				})
				.animate({
					"height": totalHeight
				});

			// fade out read-more
			$up.removeClass('active');
			$p.fadeOut();

			// prevent jump-down
			return false;

		});

	});
});
// Убираем действие ссылок по умолчанию
$(document).ready(function () {
	$("a[href^='#']").on("click", function (e) {
		e.preventDefault();
	});
});

// Скрыть блок при клике вне его.
hiddenBlockEventClick(".vertical-wrapper");

function hiddenBlockEventClick(block) {
	jQuery(function ($) {
		$(document).mouseup(function (e) { // событие клика по веб-документу
			var div = $(block); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&&
				div.has(e.target).length === 0) { // и не по его дочерним элементам
				div.hide(); // скрываем его
				// $('.navbar-toggles.navbar-drop.js-vertical-menu').removeClass('active');
			}
		});
	});
}


let tovarObj = [
	robot_sos = {
		title: 'Робот Пылесос',
		link: '/product_robot.html',
		img_link: 'img/product/hit_tov_4.png',
	},
	smart_watch_v6 = {
		title: 'Smart-часы V6',
		link: '/product_smart_w6.html',
		img_link: 'img/product/hit_tov_1.png',
	},
	disco_ball = {
		title: 'Диско шар',
		link: '/product_disco_ball.html',
		img_link: 'img/product/tovar_127.png',
	},
	airpods_pro = {
		title: 'Наушники Копия Pro',
		link: '/product_airpods_pro.html',
		img_link: 'img/product/tovar_125.png',
	},
	gamak_mexico = {
		title: 'Гамак Мексиканский',
		link: '/product_gamak_mexico.html',
		img_link: 'img/product/nov_tov_8.png',
	},
	fitness_bras = {
		title: 'Фитнес браслет M6',
		link: '/product_fitness_bras.html',
		img_link: 'img/product/hit_tov_3.png',
	},
	airbuds = {
		title: 'Наушники Беспроводные Airbuds',
		link: '/product_airbuds.html',
		img_link: 'img/product/hit_tov_2.png',
	},
	odeyalo_2_pillows = {
		title: 'Одеяло + 2 Подушки',
		link: '/product_odeyalo_2_pillows.html',
		img_link: 'img/product/action_tov_3.png',
	},
	shvabra_samo = {
		title: 'Швабра Самоочищающаяся',
		link: '/product_shvabra_samo.html',
		img_link: 'img/product/hit_tov_6.png',
	},
	clean = {
		title: 'Чистящее Средство',
		link: '/product_clean.html',
		img_link: 'img/product/hit_tov_7.png',
	},
	svabra_rasp = {
		title: 'Швабра С Распылителем',
		link: '/product_svabra_rasp.html',
		img_link: 'img/product/hit_tov_8.png',
	},
	conditioner = {
		title: 'Кондиционер Arctic Air',
		link: '/product_conditioner.html',
		img_link: 'img/product/tovar_131.jpg',
	},
	nochnik_nebo = {
		title: 'Ночник Звёздное Небо',
		link: '/product_nochnik_nebo.html',
		img_link: 'img/product/tovar_113.png',
	},
	pillow_with_grecha = {
		title: 'Подушка С Наполнителем (Гречка)',
		link: '/product_pillow_with_grecha.html',
		img_link: 'img/product/tovar_128.png',
	},
	podstavki = {
		title: 'Подставки Антивибрационные',
		link: '/product_podstavki.html',
		img_link: 'img/product/tovar_109.png',
	},
	avto_sos = {
		title: 'Автомобильный Пылесос',
		link: '/product_avto_sos.html',
		img_link: 'img/product/pilesos_tov.png',
	},
	scratch_remedy = {
		title: 'Средство Для Удаления Царапин',
		link: '/product_scratch_remedy.html',
		img_link: 'img/product/nov_tov_2.png',
	},
	nipples = {
		title: 'Ниппели Светодиодные',
		link: '/product_nipples.html',
		img_link: 'img/product/nov_tov_3.png',
	},
	сar_holder = {
		title: 'Держатель Автомобильный',
		link: '/product_сar_holder.html',
		img_link: 'img/product/nov_tov_4.png',
	},
	trimer_sad = {
		title: 'Беспроводной Садовый Триммер',
		link: '/product_trimer_sad.html',
		img_link: 'img/product/nov_tov_5.png',
	},
	parnik_exp = {
		title: 'Парники Эксперт',
		link: '/product_parnik_exp.html',
		img_link: 'img/product/nov_tov_6.png',
	},
	сultivator = {
		title: 'Культиватор Торнадика',
		link: '/product_сultivator.html',
		img_link: 'img/product/nov_tov_7.png',
	},
	led_lamp = {
		title: 'Светильник Светодиодный Эвербрайт',
		link: '/product_led_lamp.html',
		img_link: 'img/product/tovar_100.png',
	},
	lamzak = {
		title: 'Ламзак Надувной',
		link: '/product_lamzak.html',
		img_link: 'img/product/tovar_112.png',
	},
	dozator = {
		title: 'Дозатор Для Зубной Пасты',
		link: '/product_dozator.html',
		img_link: 'img/product/tovar_129.png',
	},
	roller = {
		title: 'Флеш-Роллеры + Светящиеся Шнурки',
		link: '/product_roller.html',
		img_link: 'img/product/tovar_104.png',
	},
	zont_kapsulni = {
		title: 'Зонт Капсульный',
		link: '/product_zont_kapsulni.html',
		img_link: 'img/product/tovar_111.png',
	},
	deti_kovrik = {
		title: 'Детский Коврик Аквариум',
		link: '/product_deti_kovrik.html',
		img_link: 'img/product/tovar_110.png',
	},
	magnit_res = {
		title: 'Магнитные Ресницы',
		link: '/product_magnit_res.html',
		img_link: 'img/product/nov_tov_1.jpg',
	},
	mask_black_head = {
		title: 'Маска От Черных Точек Black Head',
		link: '/product_mask_black_head.html',
		img_link: 'img/product/tovar_126.png',
	},
	teip_face = {
		title: 'Тейп Для Лица',
		link: '/product_teip_face.html',
		img_link: 'img/product/tovar_106.png',
	},
	tonal = {
		title: 'Крем Тональный',
		link: '/product_tonal.html',
		img_link: 'img/product/tovar_107.png',
	},
	mask_lifting = {
		title: 'Лифтинговая Маска Для Лица',
		link: '/product_mask_lifting.html',
		img_link: 'img/product/mask_for_face.png',
	},
	podvodka = {
		title: '4D Подводка',
		link: '/product_4d_podvodka.html',
		img_link: 'img/product/tovar_132.png',
	},
	tush = {
		title: '4D Тушь',
		link: '/product_4d_tush.html',
		img_link: 'img/product/tovar_119.png',
	},
	makeup_brushes = {
		title: 'Набор Кисточек Для Макияжа',
		link: '/product_makeup_brushes.html',
		img_link: 'img/product/tovar_133.jpg',
	},
	lens = {
		title: 'Линзы Цветные Freshlook Colorblends',
		link: '/product_lens.html',
		img_link: 'img/product/tovar_124.png',
	},
	viniri = {
		title: 'Виниры Snap On Smile',
		link: '/product_viniri.html',
		img_link: 'img/product/tovar_115.png',
	},
	mask_hair = {
		title: 'Маска Для Роста Волос',
		link: '/product_mask_hair.html',
		img_link: 'img/product/tovar_139.png',
	},
	female_stockings = {
		title: 'Колготки Женские',
		link: '/product_female_stockings.html',
		img_link: 'img/product/tovar_123.png',
	},
	trimmer = {
		title: 'Триммер С Насадками',
		link: '/product_trimmer.html',
		img_link: 'img/product/tovar_118.png',
	},
	eyebrow_marker = {
		title: 'Водостойкий Маркер Для Бровей',
		link: '/product_eyebrow_marker.html',
		img_link: 'img/product/tovar_116.png',
	},
	massage_gun = {
		title: 'Массажер Терапевтический Пистолет',
		link: '/product_massage_gun.html',
		img_link: 'img/product/massage_gun.png',
	},
	corrector_magnetic = {
		title: 'Корректор Осанки Магнитный',
		link: '/product_corrector_magnetic.html',
		img_link: 'img/product/tovar_108.png',
	},
	slimming_patch = {
		title: 'Пластырь Для Похудения',
		link: '/product_slimming_patch.html',
		img_link: 'img/product/tovar_121.png',
	},
	body_shaping = {
		title: 'Комбидресс Для Коррекции Фигуры',
		link: '/product_body_shaping.html',
		img_link: 'img/product/tovar_134.png',
	},
	orthopedic_pillow_ostio = {
		title: 'Подушка Ортопедическая Ostio',
		link: '/product_orthopedic_pillow_ostio.html',
		img_link: 'img/product/tovar_122.png',
	},
	set_of_pots = {
		title: 'Набор Кастрюль',
		link: '/product_set_of_pots.html',
		img_link: 'img/product/kastruli.png',
	},
	vegetable_cutter = {
		title: 'Тёрка Овощерезка С Контейнером',
		link: '/product_vegetable_cutter.html',
		img_link: 'img/product/tovar_102.png',
	},
	knife_set = {
		title: 'Набор Ножей 6 В 1',
		link: '/product_knife_set.html',
		img_link: 'img/product/tovar_101.png',
	},
	filter_1 = {
		title: 'Фильтр Для Воды',
		link: '/product_filter_1.html',
		img_link: 'img/product/tovar_135.png',
	},
	manual_juicer = {
		title: 'Соковыжималка Ручная',
		link: '/product_manual_juicer.html',
		img_link: 'img/product/tovar_136.jpg',
	},
	manual_mixer = {
		title: 'Миксер Ручной',
		link: '/product_manual_mixer.html',
		img_link: 'img/product/tovar_137.jpg',
	},
	scaler_fishman = {
		title: 'Рыбочистка Fishman',
		link: '/product_scaler_fishman.html',
		img_link: 'img/product/tovar_138.jpg',
	},
	automatic_animal_feeder = {
		title: 'Кормушка Для Животных Автоматическая',
		link: '/product_automatic_animal_feeder.html',
		img_link: 'img/product/tovar_130.png',
	},
	pet_grooming_kit = {
		title: 'Набор Для Ухода За Питомцем',
		link: '/product_pet_grooming_kit.html',
		img_link: 'img/product/tovar_103.png',
	},
	animal_ottoman = {
		title: 'Пуфик Для Животных',
		link: '/product_animal_ottoman.html',
		img_link: 'img/product/puf_for_animal.png',
	},

]




let findArray = [],
	gotovoe,
	trigger_for_create_html;
$(document).on("keyup", '#tov_name_header', function () {
	if ($('#tov_name_header').val().length > 1) {
		gotovoe = '';
		clearBlockTovar('#header-find__tovar-list');
		comparisonInputValueWithTovarValue();
		createHtmlTovar();
	}
	if ($('#tov_name_header').val().length < 2) {
		drawFindTovar('<li><p>Введите 2 символа или больше</p></li>')
	}
});
$(document).on("focusin", '#tov_name_header', function () {
	$('#header-find__tovar-list').fadeIn(400, 0, "linear");
});

jQuery(function ($) {
	$(document).mouseup(function (e) {
		var div = $('#header-find__tovar-list');
		if (!(div.is(e.target) || $('#tov_name_header').is(e.target)) && div.has(e.target).length === 0) {
			div.hide();
		}
	});
});

function comparisonInputValueWithTovarValue() {
	tovarObj.forEach(
		function (item, index) {

			let inputValue = $('#tov_name_header').val().toLowerCase().trim().replace(/-/g, ' '),
				massiveValue = item.title.toLowerCase().trim().replace(/-/g, ' ');
			// console.log(inputValue);
			// console.log(massiveValue);


			if (massiveValue.includes(inputValue, 0)) {
				findArray.push(item);
			}
			if (massiveValue.includes(inputValue, 0) == true) {
				trigger_for_create_html = true;
			}
		});
}

function createHtmlTovar() {

	findArray.forEach(
		function (item, index) {
			gotovoe = gotovoe + templateTovar(item.title, item.link, item.img_link);

		});
	if (trigger_for_create_html) {
		drawFindTovar(gotovoe);
	} else {
		drawFindTovar('<li><p>Товар не найден</p></li>')
	}
	clearfindArray(findArray);
	gotovoe = '';
	trigger_for_create_html = '';

}

function drawFindTovar(drawHtmlValue) {
	$('#header-find__tovar-list').html(drawHtmlValue);
}

function templateTovar(title_g, link_g, img_link_g) {
	return `<li>
		<a class="flex align-center" href="${link_g}">
			<div class="product-img">
				<img src="${img_link_g}" alt="">
			</div>
			<h3 class="product-title">${title_g}</h3>
		</a>
	</li>

	`
}

function clearfindArray(massive_name) {
	massive_name.splice(0, massive_name.length)
}

function clearBlockTovar(block_id) {
	$(block_id).html(``);
}



function showDir() {
	Swal.fire({
		title: "Помогите нам развиваться быстрее. ",
		html: `<h3 style="font-size:120%;">Задайте вопрос, поделитесь мнением о продукте и сервисе, расскажите, как улучшить сайт или работу специалистов. Все замечания и предложения важны, ведь благодаря вашему мнению мы становимся лучше.</h3>
      <form class="order_form1" id="order_form1" method="POST" action="/php/ed.php" onsubmit='setButtonSubmitProperties("btn_1")'>
      <div>
      <input autocomplete="off" name='name' class="inputq" placeholder="Введите ваше имя"/>
      </div>
      <div>
      <input autocomplete="off" required name='phone' class="inputq minLength="7" maxLength="13" placeholder="Введите ваш телефон"/>
      </div>
      <div>
      <input autocomplete="off" required name='email' type='email' class="inputq" placeholder="Введите вашу почту"/>
      </div>
      <div>
      <textarea name='obr' placeholder="Введите ваше обращение" rows="10" cols="45" name="text"></textarea>
      </div>
      <button id="btn_1"  type='submit'>Отправить обращение</button>
      </form>
    `,
	})
}

function openItemModal(
	id,
	title,
	img,
	price_old,
	price_new,
	special,
) {


	Swal.fire({
		html: `
		<div class="box-modal__image">
		<img src="${img}">
		</div>
		<div class="box-modal__title">${title}</div>
		<br>
		<div class="card_price">
		<div class="old_price"><span>обычная цена:</span><span>${price_old} руб</span></div>
		<div class="new_price"><span>новая цена:</span><span class="new_price__number">${price_new} руб</span></div>
		</div>
		<br>
			<br>
		<form id="order_form1" class="order_form" action="/php/send_tovar_to_retail.php" method="post" onsubmit='setButtonSubmitProperties("btn_2")'>
		<input type="hidden" class="input" placeholder="Количество" id="col_item" name="colichestvo" value="">
		<input type="hidden" class="input" placeholder="АЙ ДИ" id="color_item" name="product" value="${id}">
		<input class="input" id="order_form_name" type="text" name="order_form_name" placeholder="Имя: Иван" required="">
		<input class="input" id="order_form_phone" type="tel" name="order_form_phone" placeholder="Телефон: 375 ХХ ХХХ ХХ ХХ" required="" minlength="7" maxlength="13">
		<button id="btn_2" class="button">Оформить заказ</button>
		<label style="font-size: 13px; line-height: 13px;margin-top:15px;width:100%;display:block;text-align: center;">
						<input type="checkbox" checked="" required="" style="-webkit-appearance:checkbox;display:inline-block;width:auto;height: auto">
						Я согласен с политикой конфиденциальности и пользовательским соглашением
		</label>
		</form>
    `,
	});

}

function getInputValue() {
	Number($('#col_item').val(`${$('.e-quantity input').val()}`));
}


function openItemModalBanner(
	id,
	title,
	img,
	price_old,
	price_new,
	special,
) {


	Swal.fire({
		html: `
		<div class="box-modal__image">
		<img src="${img}">
		</div>
		<div class="box-modal__title">${title}</div>
		<br>
		<div class="card_price">
		<div class="old_price"><span>обычная цена:</span><span>${price_old} руб</span></div>
		<div class="new_price"><span>новая цена:</span><span class="new_price__number">${price_new} руб</span></div>
		</div>
		<br>
			<br>
		<form id="order_form" class="order_form" action="/php/send_tovar_to_retail__banner.php" method="post" onsubmit='setButtonSubmitProperties("btn_3")'>
		<input type="hidden" class="input" placeholder="Количество" id="col_item" name="colichestvo" value="">
		<input type="hidden" class="input" placeholder="АЙ ДИ" id="color_item" name="product" value="${id}">
		<input class="input" id="order_form_name" type="text" name="order_form_name" placeholder="Имя: Иван" required="">
		<input class="input" id="order_form_phone" type="tel" name="order_form_phone" placeholder="Телефон: 375 ХХ ХХХ ХХ ХХ" required="" minlength="7" maxlength="13">
		<button class="button" id="btn_3">Оформить заказ</button>
		<label style="font-size: 13px; line-height: 13px;margin-top:15px;width:100%;display:block;text-align: center;">
						<input type="checkbox" checked="" required="" style="-webkit-appearance:checkbox;display:inline-block;width:auto;height: auto">
						Я согласен с политикой конфиденциальности и пользовательским соглашением
		</label>
		</form>
    `,
	});
}

function openItemModalSetTwo(
	id,
	id_1,
	title,
	img,
	price_old,
	price_new,
) {


	Swal.fire({
		html: `
		<div class="box-modal__image">
		<img src="${img}">
		</div>
		<div class="box-modal__title">${title}</div>
		<br>
		<div class="card_price">
		<div class="old_price"><span>обычная цена:</span><span>${price_old} руб</span></div>
		<div class="new_price"><span>новая цена:</span><span class="new_price__number">${price_new} руб</span></div>
		</div>
		<br>
			<br>
		<form id="order_form" class="order_form" action="/php/send_tovar_to_retail__set_2.php" method="post" onsubmit='setButtonSubmitProperties("btn_4")'>
		<input type="hidden" id="product_1" name="product_1" value="${id_1}">
		<input type="hidden" id="popup_price" name="popup_price" value="${price_new}">

		<input type="hidden" class="input" placeholder="АЙ ДИ" id="product" name="product" value="${id}">
		<input class="input" id="order_form_name" type="text" name="order_form_name" placeholder="Имя: Иван" required="">
		<input class="input" id="order_form_phone" type="tel" name="order_form_phone" placeholder="Телефон: 375 ХХ ХХХ ХХ ХХ" required="" minlength="7" maxlength="13">
		<button class="button" id="btn_4">Оформить заказ</button>
		<label style="font-size: 13px; line-height: 13px;margin-top:15px;width:100%;display:block;text-align: center;">
						<input type="checkbox" checked="" required="" style="-webkit-appearance:checkbox;display:inline-block;width:auto;height: auto">
						Я согласен с политикой конфиденциальности и пользовательским соглашением
		</label>
		</form>
    `,
	});

}

function openItemModalSetThree(
	id,
	id_1,
	id_2,
	title,
	img,
	price_old,
	price_new,
) {


	Swal.fire({
		html: `
		<div class="box-modal__image">
		<img src="${img}">
		</div>
		<div class="box-modal__title">${title}</div>
		<br>
		<div class="card_price">
		<div class="old_price"><span>обычная цена:</span><span>${price_old} руб</span></div>
		<div class="new_price"><span>новая цена:</span><span class="new_price__number">${price_new} руб</span></div>
		</div>
		<br>
			<br>
		<form id="order_form" class="order_form" action="/php/send_tovar_to_retail__set_3.php" method="post" onsubmit='setButtonSubmitProperties("btn_4")'>
		<input type="hidden" id="product_2" name="product_2" value="${id_2}">
		<input type="hidden" id="product_1" name="product_1" value="${id_1}">
		<input type="hidden" id="popup_price" name="popup_price" value="${price_new}">
		<input type="hidden" class="input" placeholder="АЙ ДИ" id="product" name="product" value="${id}">
		<input class="input" id="order_form_name" type="text" name="order_form_name" placeholder="Имя: Иван" required="">
		<input class="input" id="order_form_phone" type="tel" name="order_form_phone" placeholder="Телефон: 375 ХХ ХХХ ХХ ХХ" required="" minlength="7" maxlength="13">
		<button class="button" id="btn_4">Оформить заказ</button>
		<label style="font-size: 13px; line-height: 13px;margin-top:15px;width:100%;display:block;text-align: center;">
						<input type="checkbox" checked="" required="" style="-webkit-appearance:checkbox;display:inline-block;width:auto;height: auto">
						Я согласен с политикой конфиденциальности и пользовательским соглашением
		</label>
		</form>
    `,
	});

}

function openItemModalSetFour(
	id,
	id_1,
	id_2,
	id_3,
	title,
	img,
	price_old,
	price_new,
) {


	Swal.fire({
		html: `
		<div class="box-modal__image">
		<img src="${img}">
		</div>
		<div class="box-modal__title">${title}</div>
		<br>
		<div class="card_price">
		<div class="old_price"><span>обычная цена:</span><span>${price_old} руб</span></div>
		<div class="new_price"><span>новая цена:</span><span class="new_price__number">${price_new} руб</span></div>
		</div>
		<br>
			<br>
		<form id="order_form" class="order_form" action="/php/send_tovar_to_retail__set_4.php" method="post" onsubmit='setButtonSubmitProperties("btn_4")'>
		<input type="hidden" id="product_2" name="product_3" value="${id_3}">
		<input type="hidden" id="product_2" name="product_2" value="${id_2}">
		<input type="hidden" id="product_1" name="product_1" value="${id_1}">
		<input type="hidden" id="popup_price" name="popup_price" value="${price_new}">
		<input type="hidden" class="input" placeholder="АЙ ДИ" id="product" name="product" value="${id}">
		<input class="input" id="order_form_name" type="text" name="order_form_name" placeholder="Имя: Иван" required="">
		<input class="input" id="order_form_phone" type="tel" name="order_form_phone" placeholder="Телефон: 375 ХХ ХХХ ХХ ХХ" required="" minlength="7" maxlength="13">
		<button class="button" id="btn_4">Оформить заказ</button>
		<label style="font-size: 13px; line-height: 13px;margin-top:15px;width:100%;display:block;text-align: center;">
						<input type="checkbox" checked="" required="" style="-webkit-appearance:checkbox;display:inline-block;width:auto;height: auto">
						Я согласен с политикой конфиденциальности и пользовательским соглашением
		</label>
		</form>
    `,
	});

}

function setButtonSubmitProperties(button_id) {
	let btnn = document.getElementById(button_id);
	btnn.style.opacity = "0.7";
	btnn.textContent = "Отправка...";
	btnn.disabled = true;
}










function openItemModalSetTwoWithoutPrice(
	id,
	id_1,
	title,
	img,
	price_new,
) {


	Swal.fire({
		html: `
		<div class="box-modal__image">
		<img src="${img}">
		</div>
		<div class="box-modal__title">${title}</div>
		<br>
		<div class="card_price">
		<span>Цену уточняйте у менеджера</span>
		</div>
		<br>
			<br>
		<form id="order_form" class="order_form" action="/php/send_tovar_to_retail__set_2.php" method="post" onsubmit='setButtonSubmitProperties("btn_4")'>
		<input type="hidden" id="product_1" name="product_1" value="${id_1}">
		<input type="hidden" id="popup_price" name="popup_price" value="${price_new}">

		<input type="hidden" class="input" placeholder="АЙ ДИ" id="product" name="product" value="${id}">
		<input class="input" id="order_form_name" type="text" name="order_form_name" placeholder="Имя: Иван" required="">
		<input class="input" id="order_form_phone" type="tel" name="order_form_phone" placeholder="Телефон: 375 ХХ ХХХ ХХ ХХ" required="" minlength="7" maxlength="13">
		<button class="button" id="btn_4">Оформить заказ</button>
		<label style="font-size: 13px; line-height: 13px;margin-top:15px;width:100%;display:block;text-align: center;">
						<input type="checkbox" checked="" required="" style="-webkit-appearance:checkbox;display:inline-block;width:auto;height: auto">
						Я согласен с политикой конфиденциальности и пользовательским соглашением
		</label>
		</form>
    `,
	});

}


function openItemModalSetThreeWithoutPrice(
	id,
	id_1,
	id_2,
	title,
	img,
	price_new,
) {


	Swal.fire({
		html: `
		<div class="box-modal__image">
		<img src="${img}">
		</div>
		<div class="box-modal__title">${title}</div>
		<br>
		<div class="card_price">
		<span>Цену уточняйте у менеджера</span>
		</div>
		<br>
			<br>
		<form id="order_form" class="order_form" action="/php/send_tovar_to_retail__set_3.php" method="post" onsubmit='setButtonSubmitProperties("btn_4")'>
		<input type="hidden" id="product_2" name="product_2" value="${id_2}">
		<input type="hidden" id="product_1" name="product_1" value="${id_1}">
		<input type="hidden" id="popup_price" name="popup_price" value="${price_new}">
		<input type="hidden" class="input" placeholder="АЙ ДИ" id="product" name="product" value="${id}">
		<input class="input" id="order_form_name" type="text" name="order_form_name" placeholder="Имя: Иван" required="">
		<input class="input" id="order_form_phone" type="tel" name="order_form_phone" placeholder="Телефон: 375 ХХ ХХХ ХХ ХХ" required="" minlength="7" maxlength="13">
		<button class="button" id="btn_4">Оформить заказ</button>
		<label style="font-size: 13px; line-height: 13px;margin-top:15px;width:100%;display:block;text-align: center;">
						<input type="checkbox" checked="" required="" style="-webkit-appearance:checkbox;display:inline-block;width:auto;height: auto">
						Я согласен с политикой конфиденциальности и пользовательским соглашением
		</label>
		</form>
    `,
	});

}

function openItemModalSetFourWithoutPrice(
	id,
	id_1,
	id_2,
	id_3,
	title,
	img,
	price_new,
) {


	Swal.fire({
		html: `
		<div class="box-modal__image">
		<img src="${img}">
		</div>
		<div class="box-modal__title">${title}</div>
		<br>
		<div class="card_price">
		<span>Цену уточняйте у менеджера</span>
		</div>
		<br>
			<br>
		<form id="order_form" class="order_form" action="/php/send_tovar_to_retail__set_4.php" method="post" onsubmit='setButtonSubmitProperties("btn_4")'>
		<input type="hidden" id="product_2" name="product_3" value="${id_3}">
		<input type="hidden" id="product_2" name="product_2" value="${id_2}">
		<input type="hidden" id="product_1" name="product_1" value="${id_1}">
		<input type="hidden" id="popup_price" name="popup_price" value="${price_new}">
		<input type="hidden" class="input" placeholder="АЙ ДИ" id="product" name="product" value="${id}">
		<input class="input" id="order_form_name" type="text" name="order_form_name" placeholder="Имя: Иван" required="">
		<input class="input" id="order_form_phone" type="tel" name="order_form_phone" placeholder="Телефон: 375 ХХ ХХХ ХХ ХХ" required="" minlength="7" maxlength="13">
		<button class="button" id="btn_4">Оформить заказ</button>
		<label style="font-size: 13px; line-height: 13px;margin-top:15px;width:100%;display:block;text-align: center;">
						<input type="checkbox" checked="" required="" style="-webkit-appearance:checkbox;display:inline-block;width:auto;height: auto">
						Я согласен с политикой конфиденциальности и пользовательским соглашением
		</label>
		</form>
    `,
	});

}

function goToPage(value)
{
	document.location.href = value;
}