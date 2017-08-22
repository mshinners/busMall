'use strict';
console.log('wat');
//ImageDisplayField Constructor Function
function Product(productName, productId, imageFilePath) {
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

//newly created arrays replacing code block immediately below
var productName = ['bag', 'banbana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogDuck', 'dragon', 'pen', 'petSweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'waterCan', 'wine-Glass'];
var imageFilePath = ['imgs/bag.jpg', 'imgs/banana.jpg', 'imgs/bathroom.jpg', 'imgs/boots.jpg', 'imgs/breakfast.jpg', 'imgs/bubblegum.jpg', 'imgs/chair.jpg', 'imgs/cthulhu.jpg', 'imgs/dog-duck.jpg', 'imgs/dragon.jpg', 'imgs/pen.jpg', 'imgs/scissors.jpg', 'imgs/shark.jpg', 'imgs/sweep.png', 'imgs/tauntaun.jpg', 'imgs/unicorn.jpg', 'imgs/usb.gif', 'imgs/water-can.jpg', 'imgs/wine-glass.jpg', ];
var productId = ['bag', 'banbana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogDuck', 'dragon', 'pen', 'petSweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'waterCan', 'wine-Glass'];

//running the following list into a for loop for all products
for (var i = 0; i < imageFilePath.length; i++) {
  new Product(productName[i], imageFilePath[i], productId[i]);
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
  imageOne.innerHTML = ' ';
  var productOne = document.createElement('img');
  var randomOne = Math.floor(Math.random() * productArray.length);
  while (lastThreeImgs.includes(randomOne)) {
    randomOne = Math.floor(Math.random() * productArray.length);
  }
  productOne.src = productArray[randomOne].imageFilePath;
  imageOne.appendChild(productOne);
  // productOne.id = productArray[randomOne].id;

  var imageTwo = document.getElementById('imageSpotTwo');
  imageTwo.innerHTML = ' ';
  var productTwo = document.createElement('img');
  productTwo.src = productArray[randomTwo].imageFilePath;
  imageTwo.appendChild(productTwo);
  var randomTwo = Math.floor(Math.random() * productArray.length);
  while (randomOne === randomTwo || lastThreeImgs.includes(randomTwo)){
    randomTwo = Math.floor(Math.random() * productArray.length);
  }
  productTwo.src = productArray[randomTwo].imageFilePath;
  imageTwo.appendChild(productTwo);
  productTwo.id = productArray[randomTwo].id;

  var imageThree = document.getElementById('imageSpotThree');
  imageThree.innerHTML = ' ';
  var productThree = document.createElement('img');
  var randomThree = Math.floor(Math.random() * productArray.length);
  while (randomThree === randomTwo || randomThree === randomOne || lastThreeImgs.includes(randomThree)) {
    randomThree = Math.floor(Math.random() * productArray.length);
  }
  productThree.src = productArray[randomThree].imageFilePath;
  imageThree.appendChild(productThree);
  productThree.id = productArray[randomThree].id;

  lastThreeImgs = [];
  lastThreeImgs.push(randomOne, randomTwo, randomThree);
  productArray[randomOne].displayed += 1;
  productArray[randomTwo].displayed += 1;
  productArray[randomThree].displayed += 1;
};
renderThreeProducts();
//
//below this point is rough code, practicing different theories, thats why its not yet deleted.
//
//   var imageOneRender = document.getElementById('imageSpotOne');
// imageOneRender.addEventListener('load', clickTally);
//
//
//
//
//
//
//
function imageShownTally() {
  for (var i = 0; i < productArray.length; i++) {
    if (productArray[i].productId === event.target.id && voteCounter < maxClicks) {
      productArray[i].votes++;
      voteCounter++;
      renderThreeProducts();
    } else if (voteCounter === maxClicks){
      oneClick.removeEventListener('click', vote, true);
      twoClick.removeEventListener('click', vote, true);
      threeClick.removeEventListener('click', vote, true);
          // document.createElement
      //  then create list and append
      result.appendChild(theList);
      for (var j = 0; j < productArray.length; i++) {
        var list = document.createElement ('li');
        list.innerText = productArray[j].votes / productArray[j].displayed * 100 + (' votes for the  ' + + productArray[j].name + '.');
      }
    }
  }
};
// //   var imageTwoRender = document.getElementById('imageSpotTwo');
//   var imageThreeRender = document.getElementById('imageSpotThree');
//   // if productX is displayed, productXTally++;
//  row.appendChild()
// };
// imageTwoRender.addEventListener('load', clickTally);
// imageThreeRender.addEventListener('load', clickTally);
//
// function clickTally() {
//   var imageOneSelection = document.getElementById('imageSpotOne');
//   var imageTwoSelection = document.getElementById('imageSpotTwo');
//   var imageThreeSelection = document.getElementById('imageSpotThree');
//   // if productX is clicked, productXTally++;
// };
// imageOneSelection.addEventListener('click', imageShownTally);
// imageTwoSelection.addEventListener('click', imageShownTally);
// imageThreeSelection.addEventListener('click', imageShownTally);
//
//   totalClicks++;
//   var targetId = whichImage.target.getAttribute('id');
//   for (productArray = 0; productArray < 25; productArray++) {
//     if #################################
//       #############################.countClicks++;
//     }
//   }
// }
// // Count how many times each image is shown
// when image is clicked
// count click for that image
// remove eventlistener
// reset images
// repeat
