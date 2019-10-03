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

$('[data-countdown]').each(function() {
  var $this = $(this), finalDate = $(this).data('countdown');
  $this.countdown(finalDate, function(event) {
    $this.html(event.strftime('%Dd %Hh %Mm'));
  });
});
