function updateSlider(slideAmount) {
//get the element
var display = document.getElementById("chosen");
//show the amount
display.innerHTML=slideAmount;
//get the element
var pic = document.getElementById("pic");
//set the dimensions
pic.style.width=slideAmount+"px";
pic.style.height=slideAmount+"auto";
}