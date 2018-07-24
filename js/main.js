var pointsBreak=function(t,e,n){function r(t){var e="W"===t.charAt(0)?u:f,n=t[1],r=t.split(t.charAt(1))[1];return">"===n&&e>r||"<"===n&&r>e?!0:!1}function i(){var t=/&&+/g;u=o.innerWidth||a.documentElement.clientWidth,f=o.innerHeight||a.documentElement.clientHeight;for(var e in p){var i=e.charAt(0);if(p.hasOwnProperty(e)&&("W"===i||"H"===i||"*"===i)){var c=p[e];if("*"===i&&"function"==typeof c&&c(u,f),null!==e.match(t)){for(var s=!1,h=e.split(/&&/),l=h.length;l--&&!s;)r(h[l])||(s=!0);s||"function"!=typeof c||(c(pointsBreak.currentState.breakpoint===n||pointsBreak.currentState.breakpoint!==e?!0:!1),pointsBreak.currentState.breakpoint=e)}else r(e)&&"function"==typeof c&&(c(pointsBreak.currentState.breakpoint===n||pointsBreak.currentState.breakpoint!==e?!0:!1),pointsBreak.currentState.breakpoint=e)}}}var o=t,a=e,c=200,u=o.innerWidth||a.documentElement.clientWidth,f=o.innerHeight||a.documentElement.clientHeight,p={};return{init:function(e,n){function r(){clearTimeout(o),o=setTimeout(i,c)}var o;for(var a in e)if(e.hasOwnProperty(a)){var u=e[a],f=a.replace(/\s+/g,"").toUpperCase();p[f]=u}return t.addEventListener?t.addEventListener("resize",r,!1):t.attachEvent&&t.attachEvent("onresize",r),i(),"function"==typeof n?n():this},setDelay:function(t,e){return c=t,"function"==typeof e?e(this):this},getWidth:function(){return u},getHeight:function(){return f},is:function(t){return r(t)},currentState:{}}}(window,window.document);

var app = {},
	Flickity = window.Flickity;


document.addEventListener('DOMContentLoaded', function () {
	var cards = [].slice.call(document.querySelectorAll('.cards--header .cards__card')),
		modal = document.querySelector('.modal'),
		modalShareBtns = [].slice.call(document.querySelectorAll('.btn--share-card')),
		modalWrap = document.querySelector('.modal-wrap'),
		modalBg = document.querySelector('.modal-bg'),
		modalClose = document.querySelector('.modal__close-btn');


	// Setup for modal carousel
	app.flkyModal = new Flickity('.cards--modal', {
		adaptiveHeight: false,
		prevNextButtons: false,
		draggable: true
	});

	// Click a card to open modal
	cards.forEach(function (card, idx) {
		card.setAttribute('data-card-index', idx);
		card.addEventListener('click', function (e) {
			app.flkyModal.select(card.getAttribute('data-card-index'));
			modalWrap.classList.add('show');
		});
	});

	// Change modal carousel item = remove sharing screen
	app.flkyModal.on('change', function () {
		var cardsItems = [].slice.call(document.querySelectorAll('.cards__card--modal'));
		cardsItems.forEach(function (item) {
			item.classList.remove('share');
			var modalCarouselDots = [].slice.call(document.querySelectorAll('.modal .flickity-page-dots'));
			modalCarouselDots.forEach(function (dots) {
				dots.style.display = 'block';
			});
		});
	});

	// Close button for modal
	modalClose.addEventListener('click', function () {
		modalWrap.classList.remove('show');
		modalShareBtns.forEach(function (btn) {
			btn.parentElement.classList.remove('share');
		});
		modal.classList.remove('share');
	});

	// Close modal when background is clicked
	modalBg.addEventListener('click', function () {
		modalWrap.classList.remove('show');
		modalShareBtns.forEach(function (btn) {
			btn.parentElement.classList.remove('share');
		});
		modal.classList.remove('share');
	});

	// Toggle share screen
	modalShareBtns.forEach(function (btn) {
		btn.addEventListener('click', function (e) {
			var modalCarouselDots = [].slice.call(document.querySelectorAll('.modal .flickity-page-dots'));
			e.preventDefault();
			btn.parentElement.classList.add('share');
			modalCarouselDots.forEach(function (dots) {
				dots.style.display = 'none';
			});
		}, false);
	});

	// Header and itinerary carousels are for mobile only
	pointsBreak.init({
		'W<769': function () {
			if (!app.flkyCards && !app.flkyItinerary) {
				var mobileCarouselSettings = {
					autoPlay: true,
					prevNextButtons: false,
					wrapAround: true,
					draggable: true,
					dragThreshold: 1
				};

				app.flkyCards = new Flickity('.cards--header', mobileCarouselSettings);
				app.flkyItinerary = new Flickity('.hometown-tourist__itinerary-wrap', mobileCarouselSettings);
			}
		},
		'W>768': function () {
			if (app.flkyCards && app.flkyItinerary) {
				app.flkyCards.destroy();
				app.flkyItinerary.destroy();
				app.flkyCards = undefined;
				app.flkyItinerary = undefined;
			}
		}
	});
});


