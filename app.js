const API_URL = "https://api.github.com/users/STELLAXACT/repos";
const carousel = document.getElementById("carouselContent");

fetch(API_URL)
  .then(res => res.json())
  .then(repos => {

    console.log("Peticion recibida:", repos);
    repos.forEach((repo, index) => {
      const item = document.createElement("div");
      item.className = `carousel-item ${index === 0 ? "active" : ""}`;

      

      item.innerHTML = `
        <div class="repo-card">
          <a href="${repo.html_url}" target="_blank">
            ${repo.name}
          </a>

          <div class="repo-stats">
            ⭐ Stars: ${repo.stargazers_count} <br>
            👀 Watchers: ${repo.watchers_count} <br>
            🧠 Lenguaje: ${repo.language ?? "No definido"}
          </div>
        </div>
      `;

      carousel.appendChild(item);
    });
  })
  .catch(error => {
    console.error("Error cargando repositorios:", error);
    carousel.innerHTML = `
      <div class="carousel-item active">
        <p class="text-center">Error cargando repositorios</p>
      </div>
    `;
  });
