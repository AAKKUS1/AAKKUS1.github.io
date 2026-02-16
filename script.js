const time = document.getElementById("heure");
const geo = document.getElementById("loc");

function afficherHeure() {
  const maintenant = new Date();
  const heures = String(maintenant.getHours()).padStart(2, "0");
  const minutes = String(maintenant.getMinutes()).padStart(2, "0");

  time.textContent = `${heures}:${minutes}`;
}

async function obtenirInfos() {
  try {
    const response = await fetch("http://ip-api.com/json/");
    const data = await response.json();

    if (data.status === "success") {
      geo.textContent = `${data.city}, ${data.country}`;
    } else {
      throw new Error("Erreur de géolocalisation");
    }
  } catch (error) {
    console.error("Erreur:", error);
  }
}

afficherHeure();
setInterval(afficherHeure, 1000);
obtenirInfos();





      // JavaScript intégré
        document.addEventListener('DOMContentLoaded', function() {
            const topCurtain = document.querySelector('.top-curtain');
            const bottomCurtain = document.querySelector('.bottom-curtain');

            // Animation d'ouverture au chargement
            setTimeout(() => {
                topCurtain.classList.add('open');
                bottomCurtain.classList.add('open');
            }, 50);

            // Animation de fermeture au clic sur les liens
            const transitionLinks = document.querySelectorAll('.transition-link');
            transitionLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    if (this.getAttribute('href') !== '#') {
                        e.preventDefault();
                        topCurtain.classList.remove('open');
                        bottomCurtain.classList.remove('open');

                        setTimeout(() => {
                            window.location.href = this.getAttribute('href');
                        }, 1000);
                    }
                });
            });
        });