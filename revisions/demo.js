// Déclaration de fonction
function saluer(nom) {
  return `Bonjour, ${nom}!`;
}

// Appel de la fonction
console.log(saluer('Alice')); // Bonjour, Alice!

// Expression de fonction anonyme
const saluer = function(nom) {
  return `Bonjour, ${nom}!`;
};

// Appel de la fonction
console.log(saluer('Bob')); // Bonjour, Bob!

/*
Un callback est une fonction passée en argument à une autre fonction et exécutée après que cette dernière a terminé son opération. Voici un exemple d'utilisation de callback avec une variable.


*/
// Fonction qui accepte un callback
function traitement(callback) {
  const resultat = 'Traitement terminé';
  callback(resultat);
}

// Déclaration de la fonction callback
function afficherMessage(message) {
  console.log(message);
}

// Appel de la fonction avec le callback
traitement(afficherMessage); // Traitement terminé


function MyComponent() {
  if (someCondition) {
    const [state, setState] = useState(0); // Ne faites pas cela
  }
  // ...
}

function MyComponent() {
  const [state, setState] = useState(0); // Toujours au niveau supérieur
  if (someCondition) {
    // Utilisez l'état ici
  }
  // ...
}

/**
 * Ce que cela signifie : Vous devez appeler les Hooks (comme useState, useEffect, etc.) uniquement au niveau supérieur de votre fonction composant. Ne les appelez pas à l'intérieur de boucles, de conditions ou de fonctions imbriquées.
Pourquoi c'est important : React s'appuie sur l'ordre des appels de Hooks pour associer l'état et les effets à un composant particulier. Si vous appelez des Hooks de manière conditionnelle ou dans des boucles, l'ordre des appels peut changer entre les rendus, ce qui peut entraîner des erreurs et des comportements imprévisibles.

2. Appelez uniquement les Hooks à partir des fonctions React
Ce que cela signifie : Vous devez appeler les Hooks uniquement à partir de fonctions composants React ou de Hooks personnalisés. Ne les appelez pas à partir de fonctions JavaScript normales.
Pourquoi c'est important : Les Hooks sont conçus pour fonctionner uniquement dans le contexte de la gestion de l'état et des effets secondaires des composants React. Les appeler en dehors de ce contexte peut entraîner des erreurs et des comportements imprévisibles.

Pourquoi ces règles sont importantes
Prévisibilité : En suivant ces règles, vous assurez que l'ordre des appels de Hooks reste constant entre les rendus, ce qui permet à React de gérer correctement l'état et les effets secondaires.
Lisibilité et maintenance : Ces règles rendent votre code plus lisible et plus facile à comprendre pour les autres développeurs, car elles imposent une structure claire et cohérente.
Éviter les erreurs : En respectant ces règles, vous évitez les erreurs courantes liées à l'utilisation incorrecte des Hooks, telles que les erreurs de dépendance et les comportements imprévisibles.
Conclusion
En résumé, les deux règles principales pour l'utilisation des Hooks sont :

Appelez uniquement les Hooks au niveau supérieur de votre fonction composant.
Appelez uniquement les Hooks à partir des fonctions composants React ou des Hooks personnalisés.
En suivant ces règles, vous pouvez tirer pleinement parti des Hooks tout en évitant les erreurs et en maintenant un code propre et prévisible.
 */