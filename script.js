const myForm = document.querySelector('form');
let newDiv = document.createElement('div');
let newImg = document.createElement('img');

let topText = document.getElementById('top');
let bottomText = document.getElementById('bottom');
let imgURL = document.getElementById('imageURL');
let memeDepot = document.getElementById('memeDepot');
let color = document.getElementById('color');

function checkIfNull(val) {
  if (val === null) {
    return undefined;
  }
}
myForm?.addEventListener('submit', function (event) {
  event.preventDefault();
  memeDepot?.appendChild(newDiv);
  newDiv.classList.add('freshMeme');
  newDiv.appendChild(newImg);
  newImg.appendChild(newDiv);
  newDiv.innerText = bottomText.value;
  myForm.reset();
});
