const myForm = document.querySelector('form');

let memeDepot = document.getElementById('memeDepot');

function checkIfNull(val) {
  if (val === null) {
    return undefined;
  }
}
myForm?.addEventListener('submit', function (event) {
  event.preventDefault();

  const imgURL = document.getElementById('imageURL');
  // const color = document.getElementById('textColor');
  const topText = document.getElementById('topText');
  const bottomText = document.getElementById('bottomText');

  const memeDiv = document.createElement('div');
  const topDiv = document.createElement('div');
  const bottomDiv = document.createElement('div');
  const newImg = document.createElement('img');

  memeDiv.setAttribute('class', 'meme container');
  topDiv.innerText = topText.value;
  topDiv.setAttribute('class', 'top');
  bottomDiv.innerText = bottomText.value;
  bottomDiv.setAttribute('class', 'bottom');
  newImg.src = imgURL.value;
  console.log(memeDiv.getAttribute('class'));

  memeDiv.appendChild(newImg);
  memeDiv.appendChild(topDiv);
  memeDiv.appendChild(bottomDiv);
  memeDepot.appendChild(memeDiv);
  myForm.reset();
});
