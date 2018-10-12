var pointsBreak=function(t,e,n){function r(t){var e="W"===t.charAt(0)?u:f,n=t[1],r=t.split(t.charAt(1))[1];return">"===n&&e>r||"<"===n&&r>e?!0:!1}function i(){var t=/&&+/g;u=o.innerWidth||a.documentElement.clientWidth,f=o.innerHeight||a.documentElement.clientHeight;for(var e in p){var i=e.charAt(0);if(p.hasOwnProperty(e)&&("W"===i||"H"===i||"*"===i)){var c=p[e];if("*"===i&&"function"==typeof c&&c(u,f),null!==e.match(t)){for(var s=!1,h=e.split(/&&/),l=h.length;l--&&!s;)r(h[l])||(s=!0);s||"function"!=typeof c||(c(pointsBreak.currentState.breakpoint===n||pointsBreak.currentState.breakpoint!==e?!0:!1),pointsBreak.currentState.breakpoint=e)}else r(e)&&"function"==typeof c&&(c(pointsBreak.currentState.breakpoint===n||pointsBreak.currentState.breakpoint!==e?!0:!1),pointsBreak.currentState.breakpoint=e)}}}var o=t,a=e,c=200,u=o.innerWidth||a.documentElement.clientWidth,f=o.innerHeight||a.documentElement.clientHeight,p={};return{init:function(e,n){function r(){clearTimeout(o),o=setTimeout(i,c)}var o;for(var a in e)if(e.hasOwnProperty(a)){var u=e[a],f=a.replace(/\s+/g,"").toUpperCase();p[f]=u}return t.addEventListener?t.addEventListener("resize",r,!1):t.attachEvent&&t.attachEvent("onresize",r),i(),"function"==typeof n?n():this},setDelay:function(t,e){return c=t,"function"==typeof e?e(this):this},getWidth:function(){return u},getHeight:function(){return f},is:function(t){return r(t)},currentState:{}}}(window,window.document);

var app = {},
	Flickity = window.Flickity;

// Detect IE11
if ('-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style) { document.documentElement.className += ' ie11'; }


// Determine if an element is in the visible viewport
app.inView = function (el) {
	var edges = el.getBoundingClientRect(),
		html = document.documentElement,
		w = window;

	return (
		edges.top >= 0
		&& edges.left >= 0
		&& edges.bottom <= (w.innerHeight || html.clientHeight)
		&& edges.right <= (w.innerWidth || html.clientWidth)
	);
};


app.demoFlip = function (card) {
	if (app.inView(card) && !card.classList.contains('showFlip') && !card.classList.contains('showedFlip')) {
		card.classList.add('showFlip');
		setTimeout(function () {
			card.classList.remove('showFlip');
			card.classList.add('showedFlip');
		}, 600);
	}
};

document.addEventListener('DOMContentLoaded', function () {
	var cards = [].slice.call(document.querySelectorAll('.cards--header .cards__card')),
		socialBtns = [].slice.call(document.querySelectorAll('.at-follow-btn'));

	cards.forEach(function (card) {
		app.demoFlip(card);
	});

	window.addEventListener('scroll', function () {
		cards.forEach(function (card) {
			app.demoFlip(card);
		});
	});

	cards.forEach(function (card, idx) {
		card.addEventListener('click', function (e) {
			if (pointsBreak.getWidth() < 769) {
				card.classList.toggle('flip');
			}
		}, true);
	});

	// Open social links in new tab/window
	socialBtns.forEach(function (btn) {
		btn.setAttribute('target', '_blank');
	});

});

