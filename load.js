window.onload = function() {
	// document.getElementsByClassName("g-drive-embed").style.display = "block";
	console.log("fuck");

	var iframeElements = document.getElementsByClassName("g-drive-embed");

	for (var i = 0, max = iframeElements.length; i < max; i++) {
		iframeElements[i].style.display = "block";
	}

	var circleLoader = document.getElementById("hold-loader");
	circleLoader.style.display = "none";
};
