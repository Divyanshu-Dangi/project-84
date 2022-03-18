// Create a reference for the canvas

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;
canvas=document.getElementById('myCanvas');
ctx=canvas.getcontext("2d")
window.addEventListener("keydown",my_keydown);

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//write a code to check the type of key pressed
		{
			aplhabetkey();
			document.getElementById("d1").innerHTML="you pressed alphabet key"
			console.log("alphabet key");
		}
	if((keyPressed >=47 && keyPressed<=57))
		{
			numberkey();
		document.getElementById("d2").innerHTML="You pressed number key";
	console.log("number key");
		}

		if((keyPressed >=37 && keyPressed<=40))
		{
			arrowkey();
		document.getElementById("d3").innerHTML="You pressed arrow key";
	console.log("arrow key");
		}

		if((keyPressed =17/18/27))
		{
			specialkey();
		document.getElementById("d4").innerHTML="You pressed special key";
	console.log("special key");
		}
		else{
			otherkey()
			document.getElementById("d5").innerHTML="You pressed other key";
	console.log("other key")
		}

}

function aplhabetkey()
{
	//upload respective image with the message. 
img_image="Alpkey.png";
add();
}
function numberkey()
{
	img_image="numkey.png";
add();
}
function arrowkey()
{
	img_image="Arrkey.png";
add();
}
function specialkey()
{
	img_image="spkey.png";
	add();	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
