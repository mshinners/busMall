'use strict';
console.log('wat');
//ImageDisplayField Constructor Function
function Product(productName, imageFilePath, productId) {
  this.productName = productName;
  this.imageFilePath = imageFilePath;
  this.productId = productId;
  this.shown = 0;
  this.votes = 0;
  productArray.push(this);
}

//Global variables
var productArray = [];
var lastThreeImgs = [];
var maxClicks = 25;

//newly created arrays replacing code block immediately below
var productName = ['bag', 'banbana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogDuck', 'dragon', 'pen', 'petSweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'waterCan', 'wine-Glass'];
var imageFilePath = ['imgs/bag.jpg', 'imgs/banana.jpg', 'imgs/bathroom.jpg', 'imgs/boots.jpg', 'imgs/breakfast.jpg', 'imgs/bubblegum.jpg', 'imgs/chair.jpg', 'imgs/cthulhu.jpg', 'imgs/dog-duck.jpg', 'imgs/dragon.jpg', 'imgs/pen.jpg', 'imgs/scissors.jpg', 'imgs/shark.jpg', 'imgs/sweep.png', 'imgs/tauntaun.jpg', 'imgs/unicorn.jpg', 'imgs/usb.gif', 'imgs/water-can.jpg', 'imgs/wine-glass.jpg', ];
var productId = ['bag', 'banbana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogDuck', 'dragon', 'pen', 'petSweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'waterCan', 'wine-Glass'];

//running the following list into a for loop for all products
for (var i = 0; i < imageFilePath.length; i++) {
  new Product(productName[i], imageFilePath[i], productId[i]);
}
function renderThreeProducts() {

  //ONE
  var imageOne = document.getElementById('imageSpotOne');
  imageOne.innerHTML = ' ';
  var productOne = document.createElement('img');
  var randomOne = Math.floor(Math.random() * productArray.length);
  while (lastThreeImgs.includes(randomOne)) {
    randomOne = Math.floor(Math.random() * productArray.length);
  }
  productOne.src = productArray[randomOne].imageFilePath;
  imageOne.appendChild(productOne);
  productArray[randomOne].shown++;
  productOne.productId = productArray[randomOne].productId;

  //TWO
  var imageTwo = document.getElementById('imageSpotTwo');
  imageTwo.innerHTML = ' ';
  var productTwo = document.createElement('img');
  var randomTwo = Math.floor(Math.random() * productArray.length);
  productTwo.src = productArray[randomTwo].imageFilePath;
  while (randomOne === randomTwo || lastThreeImgs.includes(randomTwo)){
    randomTwo = Math.floor(Math.random() * productArray.length);
  }
  productTwo.src = productArray[randomTwo].imageFilePath;
  imageTwo.appendChild(productTwo);
  productArray[randomTwo].shown++;
  productTwo.productId = productArray[randomTwo].productId;

  //THREE
  var imageThree = document.getElementById('imageSpotThree');
  imageThree.innerHTML = ' ';
  var productThree = document.createElement('img');
  var randomThree = Math.floor(Math.random() * productArray.length);
  while (randomThree === randomTwo || randomThree === randomOne || lastThreeImgs.includes(randomThree)) {
    randomThree = Math.floor(Math.random() * productArray.length);
  }
  productThree.src = productArray[randomThree].imageFilePath;
  imageThree.appendChild(productThree);
  productArray[randomThree].shown++;
  productThree.productId = productArray[randomThree].productId;

  lastThreeImgs = [];
  lastThreeImgs.push(randomOne, randomTwo, randomThree);
  productArray[randomOne].displayed += 1;
  productArray[randomTwo].displayed += 1;
  productArray[randomThree].displayed += 1;
};
renderThreeProducts();
////////////////////////////////////////////////////////////////////////////////
/////////////////////////////WORKING CODE ABOVE HERE////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var imageOneViewed = document.getElementById('imageSpotOne');
imageOneViewed.addEventListener('click', clickedTally);
var imageTwoViewed = document.getElementById('imageSpotTwo');
imageTwoViewed.addEventListener('click', clickedTally);
var imageThreeViewed = document.getElementById('imageSpotThree');
imageThreeViewed.addEventListener('click', clickedTally);

function clickedTally(event) {
  var voteCounter = 0;
  for (var i = 0; i < productArray.length; i++) {
    if (productArray[i].productId === event.target.productId && voteCounter < maxClicks) {
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
        list.innerText = productArray[j].votes / productArray[j].displayed * 100 + (' votes for the  ' + productArray[j].name + '.');
      }
    }
  }
};
// totalClicks++;
// var targetId = whichImage.target.getAttribute('productId');
// for (productArray = 0; productArray < 25; productArray++) {
//   if #################################
//     #############################.countClicks++;
//   }
// }
// }
//

// function clickTally() {
//   var imageOneSelected = document.getElementById('imageSpotOne');
//   var imageTwoSelected = document.getElementById('imageSpotTwo');
//   var imageThreeSelected = document.getElementById('imageSpotThree');
  // if productX is clicked, productXTally++;
// };

// row.appendChild()
// // Count how many times each image is shown
// when image is clicked
// count click for that image
// remove eventlistener
// reset images
// repeat
