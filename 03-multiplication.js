/*
  Énoncé :
  Écris une fonction nommée `multiplication(a, b)` qui retourne le résultat de a * b.

  Signature attendue :
    function multiplication(a, b) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function multiplication(a, b) {
  // Vérifier le nombre d'arguments
  if (arguments.length !== 2) return undefined;

  // Vérifier les types
  if (typeof a !== 'number' || typeof b !== 'number') return undefined;
  if (isNaN(a) || isNaN(b)) return undefined;

  let result = a * b;

  // Corriger le cas du -0
  if (Object.is(result, -0)) result = 0;

  return result;
}


// Ne pas modifier la ligne ci-dessous
module.exports = { multiplication }
