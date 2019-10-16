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

getData('btc', 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD');

getData('eth', 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD');

getData('ltc', 'https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD');

getData('bch', 'https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=USD');

function getData(prefix, url) {
  $.getJSON(url, function(data) {
    $.each(data, function(key, val) {
      $('.' + prefix + '-' + key.toLowerCase()).html(val);
    });
  });
}
