// STOP! Read ACTEX's Copy right first.

var canvasClass = "canvas0";
var elements = document.getElementsByClassName(canvasClass);
var canvas = elements[0];
canvas.style.backgroundColor = "white";
var img = canvas.toDataURL("image/png");

// Option 1
var link = document.createElement('a');
link.innerHTML = 'download image';
link.addEventListener('click', function(ev) {
    link.href = img;
    link.download = "img0.png";
}, false);
var containerId = "pageWidgetContainer0";
var container = document.getElementById(containerId);
container.appendChild(link);

// Option 2
var imgEl = document.createElement("IMG");
imgEl.setAttribute("src", img);
var imgId = "img0";
imgEl.setAttribute("id", imgId);
imgEl.style.backgroundColor = "white";
document.body.style.overflow = "scroll";
document.body.appendChild(imgEl);

// Option 3
document.write('<img src="'+img+'"/>');


// Real Script

// Alternative 1

for (var i = 0; i <= 2; i++) {
	var canvasClass = "canvas" + i;
	var elements = document.getElementsByClassName(canvasClass);  
	var canvas = elements[0];
	canvas.style.backgroundColor = "white";
	var img = canvas.toDataURL("image/png");
	// Option 2
	var imgEl = document.createElement("IMG");
	imgEl.setAttribute("src", img);
	var imgId = "img" + i;
	imgEl.setAttribute("id", imgId);
	imgEl.style.backgroundColor = "white";
	document.body.style.overflow = "scroll";
	document.body.appendChild(imgEl);
}

// Alternative 2

var content = '';
for (var i = 0; i <= 2; i++) {
	var canvasClass = 'canvas' + i;
	var elements = document.getElementsByClassName(canvasClass);  
	var canvas = elements[0];
	canvas.style.backgroundColor = 'white';
	

	var ctx = canvas.getContext("2d");
	ctx.globalCompositeOperation='destination-over';
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width + 100, canvas.height + 150);

	var img = canvas.toDataURL('image/png');
	console.log(img);
	content = content + '<img src="'+img+'"/>';
}
document.write(content);

// Alternative 3

var content = '';
for (var i = 0; i <= 2; i++) {
	var canvasClass = 'canvas' + i;
	var elements = document.getElementsByClassName(canvasClass);  
	var canvas = elements[0];
	canvas.style.backgroundColor = 'white';
	

	var ctx = canvas.getContext("2d");
	ctx.globalCompositeOperation='destination-over';
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width + 100, canvas.height + 150);

	var img = canvas.toDataURL('image/png');
	content = content + '"' + img + '",';
}
document.write('[' + content + ']');

// Alternative 4

var imagesData = [];
var containerId = "pageWidgetContainer0";
var container = document.getElementById(containerId);
var link = document.createElement('a');
link.innerHTML = 'download images';
container.appendChild(link);
for (var i = 0; i <= 2; i++) {
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
}
var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(imagesData));
console.log(dataStr);
link.setAttribute("href", dataStr);
link.setAttribute("download", "data.json");
link.click();

link.addEventListener('click', function(ev) {
    link.href = dataStr;
    link.download = "data.json";
}, false);


// Alternative 5

var imagesData = [];
var containerId = "ui-display";
var container = document.getElementById(containerId);
var link = document.createElement('a');
link.innerHTML = 'download images';
container.appendChild(link);
var i = 0;
var myVar = setInterval(myTimer, 2000);
function myTimer() {
	if (i >= 5) {
		clearInterval(myVar);
		var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(imagesData));
		//console.log(dataStr);
		link.setAttribute("href", dataStr);
		link.setAttribute("download", "data.json");
		link.addEventListener('click', function(ev) {
			link.href = dataStr;
    		link.download = "data.json";
		}, false);
		setTimeout(() => {
  			link.click();
		}, 2000);
	}
	console.log('Scrolling');
	document.getElementById('pageSection' + i).scrollIntoView();
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

// Alternative 6

var imagesData = [];
var containerId = "ui-display";
var container = document.getElementById(containerId);
var link = document.createElement('a');
link.innerHTML = 'download images';
container.appendChild(link);
var i = 0;
var myVar = setInterval(myTimer, 2000);
function myTimer() {
	if (i >= 5) {
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
	console.log('Scrolling');
	document.getElementById('pageSection' + i).scrollIntoView();
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