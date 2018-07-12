var numSquares = 6;
var colors = randColorGenerate(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = randColor();
var rgbName = document.getElementById("displayName");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

messageDisplay.textContent = "";

// easy button logic
easyBtn.addEventListener("click", function(){
		hardBtn.classList.remove("selected");
		easyBtn.classList.add("selected");
		numSquares = 3;
		colors = randColorGenerate(numSquares);
		h1.style.backgroundColor = "steelblue";
		pickedColor = randColor();
		rgbName.textContent = pickedColor;
		
		// add inital colors to squares
		for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
	}
		// hide bottom row
		for(var i = 3; i < squares.length; i++){
			squares[i].style.backgroundColor = "#232323";
	} if(clickedColor === pickedColor) {
					messageDisplay.textContent = "Correct!"
					resetBtn.textContent = "Play Again?"
					winner(clickedColor);
					h1.style.backgroundColor = clickedColor;
				} else {	
					this.style.background = "#232323";
					messageDisplay.textContent = "Try Again"

				}
});


// hard button logic
hardBtn.addEventListener("click", function(){
		hardBtn.classList.add("selected");
		easyBtn.classList.remove("selected");
		h1.style.backgroundColor = "steelblue";
		numSquares = 6;
		colors = randColorGenerate(numSquares);
		pickedColor = randColor();
		rgbName.textContent = pickedColor;

		for(var i = 0; i < squares.length; i++){
	// add inital colors to squares
	squares[i].style.backgroundColor = colors[i];
	}
});


// reset button actions
resetBtn.addEventListener("click", function(){
	// generate new colors
	colors = randColorGenerate(numSquares);
	// PIK NEW RANDOM OLOR FORM ARRAY
	pickedColor = randColor();
// 	// CHANGE COLORS 
for(var i = 0; i < squares.length; i++){
	// add inital colors to squares
	squares[i].style.backgroundColor = colors[i];
	this.textContent = "New Colors";
	}

	h1.style.backgroundColor = "steelblue"
		//change display color name to mathc picked color
	 rgbName.textContent = pickedColor;
	 messageDisplay.textContent = "";
})



// add prompted color rgb value to display
rgbName.textContent =  pickedColor;


// loop through colors to display the rgb values as colors
for(var i = 0; i < squares.length; i++){
	// add inital colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add event listeners.click to squares 
	squares[i].addEventListener("click", function(){
			// grab color of picked square
			var clickedColor = this.style.backgroundColor;
			//  compare it to the rgbNAme value
			if(clickedColor === pickedColor) {
					messageDisplay.textContent = "Correct!"
					resetBtn.textContent = "Play Again?"
					winner(clickedColor);
					h1.style.backgroundColor =clickedColor;
				} else {	
					this.style.background = "#232323";
					messageDisplay.textContent = "Try Again"
				}

	});
}

// function to change all colors to correct color if gues is correct

function winner(color) {
	// loop throuhg squares
	for(var i = 0; i < squares.length; i++){
	// change colors to match winning color
	squares[i].style.backgroundColor = color;
	}
 }

function randColor(color){
// pick random number and assign to var
var randNum = Math.floor(Math.random() * colors.length)
return colors[randNum];
}

function randColorGenerate(num){
// make array
var arr = []
// reapeat num times
for (var i=0; i<num; i++){
	// get randome colors
	arr.push(randomColor())

	// push into array 

}

// return array

return arr;
}

function randomColor(){
	//pick a red from 0-255
	var r = Math.floor(Math.random() * 256 );
	//pick a green from 0-255
	var g =	Math.floor(Math.random() * 256 );
	//pick a blue from 0-255
	var b = Math.floor(Math.random() * 256 );
	// return random color in rgb format
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

