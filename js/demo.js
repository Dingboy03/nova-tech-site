document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("demoForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Récupération des valeurs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const solution = document.getElementById("solution").value;
    const message = document.getElementById("message").value.trim();

    // Validation simple
    if (!name || !email || !solution || !message) {
      alert("Veuillez remplir tous les champs du formulaire.");
      return;
    }

    // (Ici, tu pourrais envoyer les données à un serveur via fetch/AJAX si besoin)

    // Affichage d'une confirmation
    alert(
      `Merci ${name} ! Votre demande de démo pour "${solution}" a bien été envoyée.`
    );

    // Réinitialisation du formulaire
    form.reset();
  });
});
