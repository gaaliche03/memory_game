// déclaration des variables pour sléctionner les éléments HTML nécessaires
// querySelector: sélectionner un élément HTML dans le document en utilisant un sélecteur CSS
const input = document.querySelector(".login__input");
const button = document.querySelector(".login__button");
const form = document.querySelector(".login-form");

// fonction pour valider la saisie du nom de joueur
const validateInput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute("disabled");
    return;
  }

  button.setAttribute("disabled", "");
};

// fonction pour gérer la soumission du formulaire (button play)
const handleSubmit = (event) => {
  event.preventDefault();

  // stocker le nom du joueur  dans le stockage local
  localStorage.setItem("player", input.value);
  // direction vers game.html
  window.location = "pages/game.html";
};
//écouteurs d'événements
//gérer les soumission des éléments
input.addEventListener("input", validateInput); //champ nom modifé ->appel du fonction validateInput
form.addEventListener("submit", handleSubmit); //button play cliqué ->appel du fonction handleSubmit
