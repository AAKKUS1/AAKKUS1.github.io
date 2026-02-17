const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm("service_g67m2sf", "template_ojfqbkb", this).then(
    function () {
      alert("Message envoyé avec succès !");
      form.reset();
    },
    function (error) {
      alert("Erreur lors de l'envoi...");
      console.log(error);
    },
  );
});
