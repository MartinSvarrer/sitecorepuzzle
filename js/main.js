(function () {
	var showMore = document.querySelector('#showMore'),
		imageList = document.querySelector('#imageList'),
		imgTmpl = document.querySelector('#imgTmpl').innerHTML,
		emptyMessage = imageList.querySelector('.empty');

	showMore.addEventListener('click', function () {
		layOutImages([
			{ name: 'Image 1', url: 'http://farm5.staticflickr.com/4010/4578838483_f9c66aece1_z.jpg'},
			{ name: 'Image 2', url: 'http://farm8.staticflickr.com/7214/7030801869_0dbf5fa4a3_z.jpg'}
		]);
	});

	function applyOrientation (image) {
		var orientation = image.width > image.height ? 'landscape' : 'portrait';
		image.className = orientation;
	}

	window.layOutImages = function (images) {
		var res = _.template(imgTmpl, {images: images});
		imageList.innerHTML += res;

		// listen for images to load then apply orientation logic
		var allImages = imageList.querySelectorAll('img');
		_.each(allImages, function (image) {
			image.addEventListener('load', function () {
				this.removeEventListener('load', arguments.callee);
				applyOrientation(this);
			});
		})
	}
})();