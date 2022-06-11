# JS30_2_Clock
Deuxième challenge de <a href="https://github.com/wesbos">Wes Bos</a> avec le "30 Day Vanilla JS Coding Challenge".

On nous donne une page web avec une horloge analogique créée avec du CSS. Il faut donc écrire la partie JS nécessaire pour rendre l'horloge fonctionnelle. On peut modifier le CSS si nécessaire. 

## Guide 

Le fichier HTML comporte 3 éléments ```div```qui correspondent aux aiguilles des secondes, des minutes, et des heures de l'horloge. 

Le code JS nécessaire ne devrait pas être trop difficile. 
On devrait créer des références à ces élèments et mettre à jour certaines propriétés CSS dynamiquement pour modifier leurs positions afin qu'elles donnent l'heure actuelle. Facile. 

# Poue le CSS: 
1. Les aiguilles sont positionnées horizonatalement alors que nous avons besoin de les bouger verticalement. On va donc faire pivoter les aiguilles de 90 degrés afin qu'elles soient droites en donnant à la class ```.hand```une propriété ```transform```d'une valeur de ```rotate(90deg)```.

2. Définir la propriété CSS ```transform-origin```de la class ```.hand``` à 100%; la valeur par défault est 50%, mais on laisse comme ça, les aiguilles de l'horloge se transformeront à partir des centres respectifs de leurs lignes au lieu du centre de l'horloge. Changer la valeur à 100% déplace donc le point d'origine de la transformation vers le point le plus éloigné de l'axe des x de l'élément HTML. 

3. Définir la ```transition``` de ```.hand``` avec une valeur de ```all 0.05s```; cela indique au navigateur qu'il faut appliquer progressivement tout changement au style de l'élément sur une période de 0,05 secondes.

4. Définir la ```transition-timing-function``` de ```.hand``` avec votre propre fonction en utilisant le ```cubic-bezier()```.  

# Pour JavaScript : 

1. Déclarer et définir des variables pour chaque aiguilles de l'horloge et référencer l'élément HTML correspondant. 

EX: 
```js script
const secondHand = document.querySelector('.second-hand');
```

2. Créer une fonction qui va calculer les degrés dont nous avons besoin pour faire tourner chaque aiguille de l'horloge. Elle doit avoir deux arguments : la valeur num actuelle de l'aiguille et la valeur max possible de l'aiguille. 

>> Divisez la valeur numérique actuelle de l'aiguille par sa valeur maximale possible pour obtenir la rotation en pourcentage, puis multipliez le résultat par 360 pour convertir la valeur d'un pourcentage en un entier, puis ajoutez à ce résultat 90 degrés pour compenser le décalage appliqué à l'origine par le CSS lors du chargement de la page. 

```js script
const calcDegrees = (time, max) => ((time / max) * 360) + 90;
```

3. Créer une fonction qui s'éxecutera automatiquement chaque seconde; dans la fonction, créer une variable et la définir comme un nouvel objet Date. Ensuite, créer trois variables qui vont contenir des références à la rotation à appliquer à chaque aiguille. Pour obtenir la rotation, définir les variables comme le retour de la valeur de la fonction ```calcDegrees```.

4. Toujours dans le fonction de l'étape 3, mettre à jour le ```transform``` pour chaque aiguille avec leurs valeurs correspondantes (mises à jour aussi!). 

```js script 
    /* étapes 3 & 4 */

    // Appel de la fonction à chaque seconde

    setInterval(() => {

    //Création du nouvel objet Date 
    const now = new Date();

    // Avoir les sec, min et h actuelles et calculer le décalage en deg
    const
        secondHandDegrees = calcDegrees(now.getSeconds(), 60),
        minuteHandDegrees = calcDegrees(now.getMinutes(), 60),
        hourHandDegrees = calcDegrees(now.getHours(), 12);

    // Application de la rotation correspondant à la valeur de l'heure actuelle
    secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;
    }, 1000); // 1000ms === 1s
```

Et voilà le travail ! 