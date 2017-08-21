"use strict";
// array of all image files
var productImageArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'usb.jpg', 'water-can.jpg', 'wine-glass.jpg'];
// iterate through arrsay using a counter
//
// for (var i = 0; i < productImageArray.length; i++) {
//
// }


//ImageDisplayField Constructor Function
function Product(productName, imageFilePath, timesImageShown, timesImageClicked) {
  this.productName = productName;
  this.imageFilePath = imageFilePath;
  this.timesImageShown = timesImageShown;
  this.timesImageClicked = timesImageClicked;
}

var Bag = new Product('bag', 'imgs/bag.jpg', 0, 0);
var banana = new Product('banana', 'imgs/banana.jpg', 0, 0);
var bathroom = new Product('bathroom', 'imgs/bathroom.jpg', 0, 0);
var boots = new Product('boots', 'imgs/boots.jpg', 0, 0);
var breakfast = new Product('breakfast', 'imgs/breakfast.jpg', 0, 0);
var bubblegum = new Product('bubblegum', 'imgs/bubblegum.jpg', 0, 0);
var chair = new Product('chair', 'imgs/chair.jpg', 0, 0);
var cthulhu = new Product('cthulhu', 'imgs/cthulhu.jpg', 0, 0);
var dogDuck = new Product('dogDuck', 'imgs/dog-duck.jpg', 0, 0);
var dragon = new Product('dragon', 'imgs/dragon.jpg', 0, 0);
var pen = new Product('pen', 'imgs/pen.jpg', 0, 0);
var petSweep = new Product('petSweep', 'imgs/pet-sweep.jpg', 0, 0);
var scissors = new Product('scissors', 'imgs/scissors.jpg', 0, 0);
var shark = new Product('shark', 'imgs/shark.jpg', 0, 0);
var sweep = new Product('sweep', 'imgs/sweep.png', 0, 0);
var tauntaun = new Product('tauntaun', 'imgs/tauntaun.jpg', 0, 0);
var unicorn = new Product('unicorn', 'imgs/unicorn.jpg', 0, 0);
var usb = new Product('usb', 'imgs/usb.gif', 0, 0);
var waterCan = new Product('waterCan', 'imgs/water-can.jpg', 0, 0);
var wineGlass = new Product('wineGlass', 'imgs/wine-glass.jpg', 0, 0);

function renderProduct() {
  var imageOne = document.getElementById('imageSpotOne');
  var productOne = document.createElement('img');
  productOne.src = Bag.imageFilePath;
  imageOne.appendChild(productOne);
};
renderProduct();

//Product();
