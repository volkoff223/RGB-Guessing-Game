let numSquares = 6;
let colors = [];
let pickedColor;
let square = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#message')
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode');


init();

function init() {
  setUpModeButtons();
  setupSquares();
  reset();
}

function setupSquares() {
  for (let i = 0; i < square.length; i++) {
    // add click listener
    square[i].addEventListener('click', function() {
      // grab color and compare to picked color
      let clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct!'
        changeColors();
        h1.style.background = pickedColor;
        resetButton.textContent = 'Play Again?'
      }else{
        this.style.backgroundColor = '#232323'
        messageDisplay.textContent = 'Try Again!'
      }
    })
  }
}

function setUpModeButtons() {
  //mode buttons event listeners
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
    modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();  
    })
  }
}

function reset() {
    // clear "Correct" from #message
    messageDisplay.textContent = '';
    //change resetButton back to "New Colors"
    resetButton.textContent = 'New Colors'
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick new random color from array
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    // change color of h1 to default
    h1.style.backgroundColor = 'steelblue'
    // change colors of squares
    for(let i=0; i<square.length; i++) {
      if (colors[i]) {
        square[i].style.display = 'block';
        square[i].style.background = colors[i];
      } else {
        square[i].style.display = 'none';
      }
      square[i].style.backgroundColor = colors[i];
    }
}

resetButton.addEventListener('click', function() {
  reset();
})

changeColors = () => {
  // loop through all squares and change to picked color
  for(let i=0; i < square.length; i++) {
    square[i].style.backgroundColor = pickedColor;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  let arr = [];
  // repeate num times
  for(let i=0; i<num; i++) {
    // get random color and push into array
    arr.push(randomColor())
  }
  // return that array
  return arr;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)

  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}