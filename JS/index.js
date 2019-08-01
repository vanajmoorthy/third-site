window.onload = function() {
	// Because idk how to use git
	console.log("update!");
	document.body.addEventListener("touchmove", function(e) {
		document.getElementsByTagName("body")[0].style.height = "100vh";
		document.getElementsByTagName("body")[0].style.overflow = "hidden";
	});
};

// Another measure to disable scroll
