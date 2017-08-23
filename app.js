'use strict';
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
var voteCounter = 0;

//newly created arrays replacing code block immediately below
var productName = ['R2-D2 Suitcase', 'Banana Slicer', 'Bathroom Stand', 'Un-Boots', 'Breakfast', 'Meatball Bubblegum', 'Impossible Chair', 'Cthulhu Figurine', 'Dog Duckbill', 'Dragon Meat', 'Pen Cuttlery', 'Pet Sweeper', 'Pizza Scissors', 'Shark Sleeping Bag', 'Baby Sweeper', 'Taun-taun Sleeping Bag', 'Unicorn Meat', 'USB Tentacle', 'Watering Can', 'Wine Glass'];
var imageFilePath = ['imgs/bag.jpg', 'imgs/banana.jpg', 'imgs/bathroom.jpg', 'imgs/boots.jpg', 'imgs/breakfast.jpg', 'imgs/bubblegum.jpg', 'imgs/chair.jpg', 'imgs/cthulhu.jpg', 'imgs/dog-duck.jpg', 'imgs/dragon.jpg', 'imgs/pen.jpg', 'imgs/pet-sweep.jpg', 'imgs/scissors.jpg', 'imgs/shark.jpg', 'imgs/sweep.png', 'imgs/tauntaun.jpg', 'imgs/unicorn.jpg', 'imgs/usb.gif', 'imgs/water-can.jpg', 'imgs/wine-glass.jpg', ];
var productId = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogDuck', 'dragon', 'pen', 'petSweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'waterCan', 'wine-Glass'];

//function createItems () {}
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
};
renderThreeProducts();

var imageOneClicked = document.getElementById('imageSpotOne');
imageOneClicked.addEventListener('click', clickedTally);
var imageTwoClicked = document.getElementById('imageSpotTwo');
imageTwoClicked.addEventListener('click', clickedTally);
var imageThreeClicked = document.getElementById('imageSpotThree');
imageThreeClicked.addEventListener('click', clickedTally);

function clickedTally(event) {
  voteCounter++;
  renderThreeProducts();
  // if (voteCounter < maxClicks) {
  for (var i = 0; i < productArray.length; i++) {
    if (productArray[i].productId === event.target.productId) {
      productArray[i].votes++;
      if (voteCounter === maxClicks) {
        imageOneClicked.removeEventListener('click', clickedTally);
        imageTwoClicked.removeEventListener('click', clickedTally);
        imageThreeClicked.removeEventListener('click', clickedTally);
        var imageOne = document.getElementById('imageSpotOne');
        imageOne.innerHTML = ' ';
        var imageTwo = document.getElementById('imageSpotTwo');
        imageTwo.innerHTML = ' ';
        var imageThree = document.getElementById('imageSpotThree');
        imageThree.innerHTML = ' ';
        var barChart = new Chart (context, chartConfig);
      }
    }
  }
}
var tableData = [];
for (var i = 0; i < productArray.length; i++) {
  tableData.push(productArray[i].shown);
}
var canvas = document.getElementById('productChart');
var context = canvas.getContext('2d');
var chartConfig = {
  type: 'bar',
  data: {
    labels: productName,

    datasets: [{
      label: 'Number of Times Item was Seen.',
      data: tableData,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
};

        // var result = document.getElementById('listResult');
        // var unList = document.createElement('ul');
        // result.appendChild(unList);
        // for (var j = 0; j < productArray.length; j++) {
        //   var list = document.createElement ('li');
        //   if (productArray[j].shown > 0) {
        //     list.innerText = (productArray[j].votes) + (' votes for the  ' + productArray[j].productName + '.');
        //   } else {
        //     list.innerText = productArray[j].productName + ' was not shown.';
        //   }
        //   unList.appendChild(list);
