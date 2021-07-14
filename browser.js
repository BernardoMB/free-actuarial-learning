// Copy and paste the content of this file into the browser JavaScript console

var containerId = "document"; // The name of any element on the screen where a link can be placed
var numberOfPages = 495; // Number of pages

var imagesData = [];
var arrOfElements = document.getElementsByClassName(containerId);
var container = arrOfElements[0];
var link = document.createElement('a');
link.innerHTML = 'download images';
container.appendChild(link);

var i = 1;
function myTimer() {
	if (i >= numberOfPages) {
		clearInterval(myVar);
		var dataStr = JSON.stringify(imagesData);
		var a = window.document.createElement('a');
		a.href = window.URL.createObjectURL(new Blob([dataStr], {type: 'text/json'}));
		a.download = 'data.json';
		// Append anchor to body.
		document.body.appendChild(a);
		a.click();
		// Remove anchor from body
		document.body.removeChild(a);
	}
    var pageSection = 'pageSection' + i;
	console.log('Scrolling to page section', pageSection);
	var targetPageSection = document.getElementById(pageSection);
    targetPageSection.scrollIntoView();
	var myVar2 = setInterval(myTimer2, 1000);
	function myTimer2() {
		console.log('Doing the thing...');
		var canvasClass = 'canvas' + i;
		var elements = document.getElementsByClassName(canvasClass);  
		var canvas = elements[0];
		canvas.style.backgroundColor = 'white';
		var ctx = canvas.getContext("2d");
		ctx.globalCompositeOperation='destination-over';
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, canvas.width + 100, canvas.height + 150);
		var img = canvas.toDataURL('image/png');
		imagesData.push(img + '');
		i = i + 1;
		clearInterval(myVar2);
	}
}

var myVar = setInterval(myTimer, 2000);
