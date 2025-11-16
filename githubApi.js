const GITHUB_USERNAME = "AAKKUS1";
const GITHUB_REPO = "AAKKUS1.github.io";

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  return date.toLocaleDateString("fr-FR", options);
}

async function fetchGitHubInfo() {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO}`
    );

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    

    const websiteInfo = document.querySelector(".websiteInfo");

    websiteInfo.innerHTML = `
      <h4>Repository name: ${data.name}</h4>
      <p><strong>Created:</strong> ${formatDate(data.created_at)}</p>
      <p><strong>Last updated:</strong> ${formatDate(data.updated_at)}</p>
      <p><strong>Link:</strong> <a href="${
        data.html_url
      }" target="_blank" style="color: blue; rel="noopener noreferrer" >Link to the repository</a></p>
    `;
  } catch (error) {
    console.error("Erreur lors de la récupération des données GitHub:", error);

    const websiteInfo = document.querySelector(".websiteInfo");
    websiteInfo.innerHTML = `
      <h3>Repository name: Erreur de chargement</h3>
      <p style="color: red;">Impossible de charger les informations du repository.</p>
      <p>Vérifiez le username et le nom du repo dans le script.</p>
    `;
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", fetchGitHubInfo);
} else {
  fetchGitHubInfo();
}
