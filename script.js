// const touches= [...document.querySelectorAll(".bouton")];
// console.log(touches);
// const listeKeycode= touches.map((touche) =>touche.dataset.key);
// const ecran=document.querySelector(".ecran")
// console.log(listeKeycode);

// document.addEventListener("keydown", (e)=>{
// //    const valeur = e.key
// const valeur = e.keyCode.toString;
// calculer(valeur)

// })

// document.addEventListener("click", (e)=>{
// const valeur= e.target.dataset.key
// })

// const calculer = (valeur) =>{
// if(listeKeycode.includes(valeur))
//     console.log(listeKeycode);
// switch(valeur){
//     case '8':
//         ecran.textContent="";
//         break;
//         case '13':
//         const calcul = eval(ecran.textContent);
//         ecran.textContent = calcul;
//         break;
//         default:
//             const indexKeycode = listeKeycode.indexOf(valeur);
//             const touche = touches[indexKeycode];
//             ecran.textContent+= touche.innerHTML;
// }
// }

const touches = [...document.querySelectorAll(".bouton")];
console.log(touches);
const listeKeycode = touches.map((touche) => touche.dataset.key);
const ecran = document.querySelector(".ecran");
console.log(listeKeycode);

document.addEventListener("keydown", (e) => {
  const valeur = e.keyCode.toString();
  calculer(valeur);
});

document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
  if (valeur) calculer(valeur); // Vérifie si la touche cliquée a un data-key
});

const calculer = (valeur) => {
  if (listeKeycode.includes(valeur)) {
    switch (valeur) {
      case '8': // Touche 'Backspace'
        ecran.textContent = "";
        break;
      case '13': // Touche 'Enter'
        try {
          const calcul = Function('"use strict";return (' + ecran.textContent + ')')();
          ecran.textContent = calcul;
        } catch {
          ecran.textContent = "Erreur";
        }
        break;
      default:
        const indexKeycode = listeKeycode.indexOf(valeur);
        const touche = touches[indexKeycode];
        ecran.textContent += touche.innerHTML;
    }
  }
};


// window.addEventListener("error", (e)=>{
// alert("ue erreur est survenu dans votre calcul!")
// })