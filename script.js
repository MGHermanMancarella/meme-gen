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

  memeDiv.setAttribute('id', 'meme');
  topDiv.innerText = topText.value;
  topDiv.setAttribute('id', 'top');
  bottomDiv.innerText = bottomText.value;
  bottomDiv.setAttribute('id', 'bottom');
  newImg.src = imgURL.value;

  // @ts-ignore
  memeDiv.appendChild(newImg, topDiv, bottomDiv);

  memeDepot.appendChild(memeDiv);
  myForm.reset();
});
