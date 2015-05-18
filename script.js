
var movingMan = document.querySelector("img")
var clickCount = 0

var clickCountReturn = function(x){
	
	//var temp = ("\""+clickCount+"px\"").toString();
	var temp = parseInt(clickCount, 10) + 10 + 'px'
	clickCount += 10
	//console.log (temp, "temp")
	return temp
}

var runForver = function(x){
	
	var tempVar = setInterval(function(walker) {
	var temp = parseInt(clickCount, 10) + 50 + 'px'
	clickCount += 10
	console.log (temp, "temp")
	movingMan.style.marginLeft = temp
	},200) // end set interval
 } // end runForver

var moveMe = function (x) {
	console.log (document.querySelector("img"))
	console.log (document.images.length)
	console.log("Yo")
	document.querySelector("img").style.marginLeft = "40"
	//var movingMan = document.querySelector("img")
	movingMan.addEventListener("click", function() {
		
		//console.log(clickCountReturn())
		movingMan.style.marginLeft = clickCountReturn()
		//movingMan.style.marginLeft = "20px"
		//console.log(typeof("20px"))
	})
}

//moveMe()

var moveForver = function (x) {
	document.querySelector("img").style.marginLeft = runForver();
}
//moveForver();



