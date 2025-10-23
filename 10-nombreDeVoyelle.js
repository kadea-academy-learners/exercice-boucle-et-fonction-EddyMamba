/*
  Énoncé :
  Écris une fonction `nombreDeVoyelles(phrase)` qui retourne le nombre de voyelles
  (a, e, i, o, u, y) dans une chaîne, insensible à la casse.

  Signature attendue :
    function nombreDeVoyelles(phrase) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function nombreDeVoyelles(phrase) {
  // Exercice non implémenté : doit compter les voyelles
  // Placeholder neutre : retourne 0 pour indiquer non-implémentation
  // 1. Vérification de l'entrée : si ce n'est pas une chaîne, on considère qu'il y a 0 voyelle.
 if (typeof phrase !== 'string') {
 return 0;
 }

 // 2. Définir les voyelles pour la comparaison
 const voyelles = 'aeiouy';
 let compteur = 0;

 // 3. Parcourir la chaîne
 for (let i = 0; i < phrase.length; i++) {
 // Récupérer le caractère courant et le mettre en minuscule pour l'insensibilité à la casse
 const caractere = phrase[i].toLowerCase();

 // 4. Vérifier si le caractère est une voyelle

 if (voyelles.includes(caractere)) {
 compteur++;
 }
}

 return compteur;
}

// Ne pas modifier la ligne ci-dessous
module.exports = { nombreDeVoyelles }
