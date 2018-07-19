var pointsBreak=function(t,e,n){function r(t){var e="W"===t.charAt(0)?u:f,n=t[1],r=t.split(t.charAt(1))[1];return">"===n&&e>r||"<"===n&&r>e?!0:!1}function i(){var t=/&&+/g;u=o.innerWidth||a.documentElement.clientWidth,f=o.innerHeight||a.documentElement.clientHeight;for(var e in p){var i=e.charAt(0);if(p.hasOwnProperty(e)&&("W"===i||"H"===i||"*"===i)){var c=p[e];if("*"===i&&"function"==typeof c&&c(u,f),null!==e.match(t)){for(var s=!1,h=e.split(/&&/),l=h.length;l--&&!s;)r(h[l])||(s=!0);s||"function"!=typeof c||(c(pointsBreak.currentState.breakpoint===n||pointsBreak.currentState.breakpoint!==e?!0:!1),pointsBreak.currentState.breakpoint=e)}else r(e)&&"function"==typeof c&&(c(pointsBreak.currentState.breakpoint===n||pointsBreak.currentState.breakpoint!==e?!0:!1),pointsBreak.currentState.breakpoint=e)}}}var o=t,a=e,c=200,u=o.innerWidth||a.documentElement.clientWidth,f=o.innerHeight||a.documentElement.clientHeight,p={};return{init:function(e,n){function r(){clearTimeout(o),o=setTimeout(i,c)}var o;for(var a in e)if(e.hasOwnProperty(a)){var u=e[a],f=a.replace(/\s+/g,"").toUpperCase();p[f]=u}return t.addEventListener?t.addEventListener("resize",r,!1):t.attachEvent&&t.attachEvent("onresize",r),i(),"function"==typeof n?n():this},setDelay:function(t,e){return c=t,"function"==typeof e?e(this):this},getWidth:function(){return u},getHeight:function(){return f},is:function(t){return r(t)},currentState:{}}}(window,window.document);

var app = {};

var Flickity = window.Flickity;



document.addEventListener('DOMContentLoaded', function () {
	var cards = [].slice.call(document.querySelectorAll('.cards__card')),
		modalWrap = document.querySelector('.modal-wrap'),
		modalClose = document.querySelector('.modal__close-btn');

	cards.forEach(function (card) {
		card.addEventListener('click', function () {
			modalWrap.classList.add('show');
		});
	});

	modalClose.addEventListener('click', function () {
		modalWrap.classList.remove('show');
	});

	pointsBreak.init({
		'W<769': function () {
			if (!app.flkyCards && !app.flkyItinerary) {

				app.flkyCards = new Flickity('.cards', {
					// options, defaults listed

					accessibility: true,
					// enable keyboard navigation, pressing left & right keys

					adaptiveHeight: false,
					// set carousel height to the selected slide

					autoPlay: false,
					// advances to the next cell
					// if true, default is 3 seconds
					// or set time between advances in milliseconds
					// i.e. `autoPlay: 1000` will advance every 1 second

					cellAlign: 'center',
					// alignment of cells, 'center', 'left', or 'right'
					// or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)

					cellSelector: undefined,
					// specify selector for cell elements

					contain: false,
					// will contain cells to container
					// so no excess scroll at beginning or end
					// has no effect if wrapAround is enabled

					draggable: '>1',
					// enables dragging & flicking
					// if at least 2 cells

					dragThreshold: 3,
					// number of pixels a user must scroll horizontally to start dragging
					// increase to allow more room for vertical scroll for touch devices

					freeScroll: false,
					// enables content to be freely scrolled and flicked
					// without aligning cells

					friction: 0.2,
					// smaller number = easier to flick farther

					groupCells: false,
					// group cells together in slides

					initialIndex: 0,
					// zero-based index of the initial selected cell

					lazyLoad: true,
					// enable lazy-loading images
					// set img data-flickity-lazyload="src.jpg"
					// set to number to load images adjacent cells

					percentPosition: true,
					// sets positioning in percent values, rather than pixels
					// Enable if items have percent widths
					// Disable if items have pixel widths, like images

					prevNextButtons: false,
					// creates and enables buttons to click to previous & next cells

					pageDots: true,
					// create and enable page dots

					resize: true,
					// listens to window resize events to adjust size & positions

					rightToLeft: false,
					// enables right-to-left layout

					setGallerySize: true,
					// sets the height of gallery
					// disable if gallery already has height set with CSS

					watchCSS: false,
					// watches the content of :after of the element
					// activates if #element:after { content: 'flickity' }

					wrapAround: true
					// at end of cells, wraps-around to first for infinite scrolling
				});


				app.flkyItinerary = new Flickity('.hometown-tourist__itinerary-wrap', {

					// options, defaults listed

					accessibility: true,
					// enable keyboard navigation, pressing left & right keys

					adaptiveHeight: false,
					// set carousel height to the selected slide

					autoPlay: false,
					// advances to the next cell
					// if true, default is 3 seconds
					// or set time between advances in milliseconds
					// i.e. `autoPlay: 1000` will advance every 1 second

					cellAlign: 'center',
					// alignment of cells, 'center', 'left', or 'right'
					// or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)

					cellSelector: undefined,
					// specify selector for cell elements

					contain: false,
					// will contain cells to container
					// so no excess scroll at beginning or end
					// has no effect if wrapAround is enabled

					draggable: '>1',
					// enables dragging & flicking
					// if at least 2 cells

					dragThreshold: 3,
					// number of pixels a user must scroll horizontally to start dragging
					// increase to allow more room for vertical scroll for touch devices

					freeScroll: false,
					// enables content to be freely scrolled and flicked
					// without aligning cells

					friction: 0.2,
					// smaller number = easier to flick farther

					groupCells: false,
					// group cells together in slides

					initialIndex: 0,
					// zero-based index of the initial selected cell

					lazyLoad: true,
					// enable lazy-loading images
					// set img data-flickity-lazyload="src.jpg"
					// set to number to load images adjacent cells

					percentPosition: true,
					// sets positioning in percent values, rather than pixels
					// Enable if items have percent widths
					// Disable if items have pixel widths, like images

					prevNextButtons: false,
					// creates and enables buttons to click to previous & next cells

					pageDots: true,
					// create and enable page dots

					resize: true,
					// listens to window resize events to adjust size & positions

					rightToLeft: false,
					// enables right-to-left layout

					setGallerySize: true,
					// sets the height of gallery
					// disable if gallery already has height set with CSS

					watchCSS: false,
					// watches the content of :after of the element
					// activates if #element:after { content: 'flickity' }

					wrapAround: true
					// at end of cells, wraps-around to first for infinite scrolling
				});
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




