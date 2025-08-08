    // Sélection des éléments
    const formulaire = document.getElementById('formulaire');
    const prenomInput = document.getElementById('prenom');
    const message = document.getElementById('message');

    // Gestion de l'envoi du formulaire
    formulaire.addEventListener('submit', function(event) {
      event.preventDefault();

      const prenom = prenomInput.value.trim();

      if (prenom !== '') {
        message.innerText = `Merci ${prenom}, pour votre prénom`;
      } else {
        message.innerText = `Veuillez entrer votre prénom avant d'envoyer merci.`;
      }
    });
