const addLink = document.getElementById('addLink');
const goToLink = document.getElementById('goToLink');
// console.log(btnAddLink);
// console.log(goToLink);
let myLink;

addLink.addEventListener('click', () =>{
  addLink.style.backgroundColor = 'yellow';
  myLink = prompt('Введіть ссилку!');

  if(myLink.startsWith('http') === false && myLink.startsWith('https') === false ) {
    myLink = `https://${myLink}`;

  }
});

goToLink.addEventListener("click", () => {
  if (!myLink) {
      alert('Ссилка відсутня');
  } else {
      location.href = myLink;
  }
});


