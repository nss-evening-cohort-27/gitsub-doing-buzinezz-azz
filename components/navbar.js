export const navStuff = () => {
  return `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" href="#"><img class="icon" src="./assets/icons/overview.png">Overview </a>
      <a class="nav-item nav-link" href="repos.html"><img class="icon" src="./assets/icons/repos.png">Repositories</a>
      <a class="nav-item nav-link" href="projectsPage.html"><img class="icon" src="./assets/icons/projects.png">Projects</a>
      <a class="nav-item nav-link" href="packages.html"><img class="icon" src="./assets/icons/packs.png">Packages</a>
    </div>
  </div>
</nav>
  `
}
