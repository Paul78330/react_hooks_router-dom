//Qu'est-ce qu'un évènement : C'est lorsque l'utilisateur intéragie avec l'interface

//le but : faire une action lorsque l'évènement va se déclancher

let a = document.querySelector('a');
let button = document.querySelector('button');


//Methode 2
// a.onclick = () => {
//   if(confirm('Voulez-vous vraiment quitter cette page ?')){
//     location.href ="https://www.google.com";
//   }
// };

// button.onmouseover = () => {
//   document.body.style.backgroundColor = 'orange';
// }

// button.onmouseout = () => {
//   document.body.style.backgroundColor = 'white';
// }

a.addEventListener('click', (e) => {//ecouter l'évènement 'click' sur "a"... si 'click' => ALORS (instruction)
  if(!confirm('Voulez-vous vraiment quitter cette page ?')){
    e.preventDefault();
    location.href = "https://believemy.com";
  }
});


button.addEventListener('mouseover', () => {
  document.body.style.backgroundColor = 'orange';
});

function backgroundWhite() {
  document.body.style.backgroundColor = 'white';
}

button.addEventListener('mouseout', () => {
  document.body.style.fontFamily = 'arial';
});

button.removeEventListener('mouseout', backgroundWhite);