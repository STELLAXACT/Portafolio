<!--<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mis Repositorios</title>

 
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet">

  <link rel="stylesheet" href="style.css">
</head>
<body class="bg-dark text-light">

  <div class="container py-5">
    <h1 class="text-center mb-4">🚀 Mis Repositorios</h1>

    <div id="repoCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner" id="carouselContent">
       
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#repoCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>

      <button class="carousel-control-next" type="button" data-bs-target="#repoCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  </div>

  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script src="app.js"></script>
</body>
</html>

.carousel-item {
  padding: 40px;
}

.repo-card {
  background: #1e1e1e;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0,0,0,0.6);
}

.repo-card a {
  color: #0d6efd;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: bold;
}

.repo-card a:hover {
  text-decoration: underline;
}

.repo-stats {
  margin-top: 15px;
  font-size: 1.1rem;
  color: #ccc;
}

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

-->