document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    clearErrors();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    let hasError = false;

    if (!name) {
      showError("name", "Le nom est requis.");
      hasError = true;
    }

    if (!email || !validateEmail(email)) {
      showError("email", "Une adresse email valide est requise.");
      hasError = true;
    }

    if (!subject) {
      showError("subject", "Le sujet est requis.");
      hasError = true;
    }

    if (!message) {
      showError("message", "Le message est requis.");
      hasError = true;
    }

    if (hasError) {
      showAlert("Veuillez corriger les erreurs du formulaire.", "danger");
      return;
    }

    showAlert(
      "Votre message a bien été envoyé ! Nous vous contacterons bientôt.",
      "success"
    );

    form.reset();
  });

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field.classList.add("is-invalid");
    if (
      !field.nextElementSibling ||
      !field.nextElementSibling.classList.contains("invalid-feedback")
    ) {
      const errorDiv = document.createElement("div");
      errorDiv.className = "invalid-feedback";
      errorDiv.textContent = message;
      field.parentNode.appendChild(errorDiv);
    }
  }

  function clearErrors() {
    document
      .querySelectorAll(".is-invalid")
      .forEach((el) => el.classList.remove("is-invalid"));
    document.querySelectorAll(".invalid-feedback").forEach((el) => el.remove());
  }

  function showAlert(message, type) {
    const alertPlaceholder = document.createElement("div");
    alertPlaceholder.innerHTML = `
      <div class="alert alert-${type} alert-dismissible fade show mt-3" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fermer"></button>
      </div>
    `;
    form.parentNode.insertBefore(alertPlaceholder, form.nextSibling);

    // Auto-dismiss après 5 sec
    setTimeout(() => {
      const alert = bootstrap.Alert.getOrCreateInstance(
        alertPlaceholder.querySelector(".alert")
      );
      alert.close();
    }, 5000);
  }
});
