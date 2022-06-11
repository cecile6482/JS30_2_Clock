/*  Objectif: On nous donne une page web avec une horloge analogique créée avec du CSS. Il faut donc écrire la partie JS nécessaire pour rendre l'horloge fonctionnelle. On peut modifier le CSS si nécessaire. 
   */

    // Créer des références aux éléments HTML que nous voulons transformer

    (()=> {
        const
          secondHand = document.querySelector('.second-hand'),
          minuteHand = document.querySelector('.min-hand'),
          hourHand = document.querySelector('.hour-hand')
  
        // Fonction d'assistance chargée de calculer la rotation pour faire tourner une aiguille
        const calcDegrees = (time, max) => ((time / max) * 360) + 90;

        // Appeler la fonction une fois par seconde
        setInterval(() => {
  
        // Créer un nouvel objet Date
        const now = new Date();
  
        // Avoir les sec, min et h actuelles et calculer le décalage en degrés
        const
          secondHandDegrees = calcDegrees(now.getSeconds(), 60),
          minuteHandDegrees = calcDegrees(now.getMinutes(), 60),
          hourHandDegrees = calcDegrees(now.getHours(), 12);
  
        // Appliquer la rotation aux aiguilles correspondant à la valeur de l'heure actuelle
        secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;
        hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;
      }, 1000);
      })();