const myForm = document.querySelector('form');
let memes = [];
let memeDepot = document.getElementById('memeDepot');

myForm?.addEventListener('submit', function (event) {
  event.preventDefault();

  // const color = document.getElementById('textColor');
  const topText = document.getElementById('topText');
  const bottomText = document.getElementById('bottomText');
  const imgURL = document.getElementById('imageURL');
  if (imgURL.value === '') {
    return alert(
      "Even Bob Ross couldn't paint without a canvas. Give me a URL"
    );
  }

  const memeDiv = document.createElement('div');
  const topDiv = document.createElement('div');
  const bottomDiv = document.createElement('div');
  const newImg = document.createElement('img');
  const deleteButton = document.createElement('button');

  memeDiv.setAttribute('class', 'meme');
  topDiv.innerText = topText.value;
  topDiv.setAttribute('class', 'top');
  bottomDiv.innerText = bottomText.value;
  bottomDiv.setAttribute('class', 'bottom');
  newImg.src = imgURL.value;
  // console.log(memeDiv.getAttribute('class'));
  deleteButton.setAttribute('class', 'button');
  deleteButton.innerText = 'Delete';
  // const deleteIcon = document.createElement('img');
  // deleteIcon.src = 'remove.svg';
  // deleteButton.appendChild(deleteIcon);

  memeDiv.appendChild(newImg);
  memeDiv.appendChild(topDiv);
  memeDiv.appendChild(bottomDiv);
  memeDiv.appendChild(deleteButton);
  memeDepot.appendChild(memeDiv);
  myForm.reset();
  memes = document.querySelectorAll('.button');

  deleteButton.addEventListener('click', function (event) {
    let GetOutaHere = event.target;
    GetOutaHere.parentNode.parentNode.removeChild(GetOutaHere.parentNode);
    console.log(event.target);
  });
});
// for (let i = 0; i < memes.length; i++) {
//   memes[i].addEventListener('click', function (event) {

//   });
// }
