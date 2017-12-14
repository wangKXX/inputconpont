(function() {
	zymedia('video',{autoplay: true});
	var videoHeight = document.querySelector(".videowrap").offsetHeight;
	document.querySelector(".font-content").style.marginTop = videoHeight + "px";
})()