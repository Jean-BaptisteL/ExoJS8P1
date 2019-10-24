document.getElementById('submit').addEventListener('click', majorOrMinor);
function majorOrMinor(){
  let age = document.getElementById('age').value;
  if (age == '') { //On vérifie la variable a une valeur. Si elle n'en a pas, un message d'erreur apparait.
    alert('Veuillez entrer votre âge.');
  }else if (isNaN(age)) { //On vérifie si la valeur de la variable est un nombre. Si ce n'est pas le cas, un message d'erreur apparait.
    alert('Veuillez entrer un nombre.');
  }else if (age < 0){ //On vérifie si la valeur de la variable est > 0. Si ce n'est pas le cas, un message d'erreur apparait.
    alert ('Comment faites-vous pour être ici alors que vous n\'ètes pas né.');
  }else if (age > 120) { //On vérifie si la valeur de la variable est < 120. Si ce n'est pas le cas, un message d'erreur apparait.
    alert ('Vous êtes un vampire ?');
  }else if (age >= 18 && age <= 120) { //On vérifie si la valeur de la variable est comprise entre 18 et 120 ans.
    alert ('Vous êtes majeur !');
  }else { // Il ne reste plus que l'intervalle entre 0 et 18.
    alert ('Vous êtes mineur !');
  }
}
