'use strict';
// array of all image files (currently working with not needing this, but too much to retype, so keep it for now.)
// var productImageArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'usb.jpg', 'water-can.jpg', 'wine-glass.jpg'];

//ImageDisplayField Constructor Function
function Product(productName, imageFilePath, productId) {
  this.productName = productName;
  this.imageFilePath = imageFilePath;
  this.productId = productId;
  this.timesImageShown = 0;
  this.timesImageClicked = 0;
  productArray.push(this);
}
//Global variables
var productArray = [];
var lastThreeImgs = [];

//newly created arrays for immediately below
var names = ['bag', 'banbana', 'bathroom'];
var imagePath = ['imgs/bag.jpg', 'imgs/banana.jpg', 'imgs/bathroom.jpg'];
var productId = ['bag', 'banbana', 'bathroom'];
//running the following list into a for loop for all products
for (var i = 0; i < images.length; i++) {
  new Product(names[i], images[i], ids[i]);
}

// var Bag = new Product('bag', 'imgs/bag.jpg', 0, 0);
// var banana = new Product('banana', 'imgs/banana.jpg', 0, 0);
// var bathroom = new Product('bathroom', 'imgs/bathroom.jpg', 0, 0);
// var boots = new Product('boots', 'imgs/boots.jpg', 0, 0);
// var breakfast = new Product('breakfast', 'imgs/breakfast.jpg', 0, 0);
// var bubblegum = new Product('bubblegum', 'imgs/bubblegum.jpg', 0, 0);
// var chair = new Product('chair', 'imgs/chair.jpg', 0, 0);
// var cthulhu = new Product('cthulhu', 'imgs/cthulhu.jpg', 0, 0);
// var dogDuck = new Product('dogDuck', 'imgs/dog-duck.jpg', 0, 0);
// var dragon = new Product('dragon', 'imgs/dragon.jpg', 0, 0);
// var pen = new Product('pen', 'imgs/pen.jpg', 0, 0);
// var petSweep = new Product('petSweep', 'imgs/pet-sweep.jpg', 0, 0);
// var scissors = new Product('scissors', 'imgs/scissors.jpg', 0, 0);
// var shark = new Product('shark', 'imgs/shark.jpg', 0, 0);
// var sweep = new Product('sweep', 'imgs/sweep.png', 0, 0);
// var tauntaun = new Product('tauntaun', 'imgs/tauntaun.jpg', 0, 0);
// var unicorn = new Product('unicorn', 'imgs/unicorn.jpg', 0, 0);
// var usb = new Product('usb', 'imgs/usb.gif', 0, 0);
// var waterCan = new Product('waterCan', 'imgs/water-can.jpg', 0, 0);
// var wineGlass = new Product('wineGlass', 'imgs/wine-glass.jpg', 0, 0);
//Renders the 3 randomly chosen images
function renderThreeProducts() {
  var imageOne = document.getElementById('imageSpotOne');
  var productOne = document.createElement('img');
  var randomOne = Math.floor(Math.random() * productArray.length);
  while (lastThreeImgs.includes(randomOne)) {
    randomOne = Math.floor(Math.random() * productArray.length);
  }
  productOne.src = productArray[randomOne].imageFilePath;
  imageOne.appendChild(productOne);
  var imageTwo = document.getElementById('imageSpotTwo');
  var productTwo = document.createElement('img');
  productTwo.src = Bag.imageFilePath;
  imageTwo.appendChild(productTwo);
  var randomTwo = Math.floor(Math.random() * productArray.length);
  while (randomOne === randomTwo || lastThreeImgs.includes(randomTwo)){
    randomTwo = Math.floor(Math.random() * productArray.length);
  }
  productTwo.src = productArray[randomTwo].imageFilePath;
  imageTwo.appendChild(productTwo);
  var imageThree = document.getElementById('imageSpotThree');
  var productThree = document.createElement('img');
  var randomThree = Math.floor(Math.random() * productArray.length);
  while (randomThree === randomTwo || randomThree === randomOne || lastThreeImgs.includes(randomThree)) {
    randomThree = Math.floor(Math.random() * productArray.length);
  }
  productThree.src = productArray[randomThree].imageFilePath;
  imageThree.appendChild(productThree);
  lastThreeImgs = [];
  lastThreeImgs.push(randomOne, randomTwo, randomThree);
};
renderThreeProducts();
//
//below this point is rough code, practicing different theories, thats why its not yet deleted.
//
//
//
//
//
//
//
//

function imageShownTally(event) {
event.preventDefault();
  var imageOneRender = document.getElementById('imageSpotOne');
  var imageTwoRender = document.getElementById('imageSpotTwo');
  var imageThreeRender = document.getElementById('imageSpotThree');
  // if productX is displayed, productXTally++;
 row.appendChild()
};
imageOneRender.addEventListener('load', clickTally);
imageTwoRender.addEventListener('load', clickTally);
imageThreeRender.addEventListener('load', clickTally);

function clickTally() {
  var imageOneSelection = document.getElementById('imageSpotOne');
  var imageTwoSelection = document.getElementById('imageSpotTwo');
  var imageThreeSelection = document.getElementById('imageSpotThree');
  // if productX is clicked, productXTally++;
};
imageOneSelection.addEventListener('click', imageShownTally);
imageTwoSelection.addEventListener('click', imageShownTally);
imageThreeSelection.addEventListener('click', imageShownTally);

  totalClicks++;
  var targetId = whichImage.target.getAttribute('id');
  for (productArray = 0; productArray < 25; productArray++) {
    if #################################
      #############################.countClicks++;
    }
  }
}
// Count how many times each image is shown
// when image is clicked
// count click for that image
// remove eventlistener
// reset images
// repeat
