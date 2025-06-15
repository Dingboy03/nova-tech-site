document.addEventListener("DOMContentLoaded", () => {
  const payButtons = document.querySelectorAll(".pay-btn");
  const paymentModalEl = document.getElementById("paymentModal");
  const paymentModal = new bootstrap.Modal(paymentModalEl);
  const confirmationModal = new bootstrap.Modal(
    document.getElementById("confirmationModal")
  );

  // Éléments dans la modal paiement à remplir dynamiquement
  const selectedServiceEl = document.getElementById("selected-service");
  const selectedDescriptionEl = document.getElementById("selected-description");
  const selectedPriceEl = document.getElementById("selected-price");
  const totalPriceEl = document.getElementById("total-price");

  const processPaymentBtn = document.getElementById("process-payment");
  const paymentForm = document.getElementById("payment-form");

  // Quand on clique sur un bouton "Commander maintenant"
  payButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const serviceName = button.getAttribute("data-service");
      const servicePrice = button.getAttribute("data-price");
      const serviceDescription = button.getAttribute("data-description");

      // Mettre à jour les infos dans la modal paiement
      selectedServiceEl.textContent = serviceName;
      selectedDescriptionEl.textContent = serviceDescription;
      selectedPriceEl.textContent = servicePrice + "€";
      totalPriceEl.textContent = servicePrice + "€/mois";

      // Reset le formulaire à chaque ouverture
      paymentForm.reset();

      // Ouvrir la modal paiement
      paymentModal.show();
    });
  });

  // Quand on clique sur "Payer maintenant" dans la modal paiement
  processPaymentBtn.addEventListener("click", () => {
    if (paymentForm.checkValidity()) {
      // Ici, tu peux ajouter la logique d'envoi du paiement (API, Stripe, etc.)
      // Pour l'instant on simule un paiement réussi

      // Fermer la modal paiement
      paymentModal.hide();

      // Après un délai, ouvrir la modal confirmation
      setTimeout(() => {
        confirmationModal.show();
      }, 300);
    } else {
      paymentForm.reportValidity();
    }
  });
});
