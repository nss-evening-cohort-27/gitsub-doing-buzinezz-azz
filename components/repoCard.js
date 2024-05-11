import { renderToDom } from "../utils/renderToDom";
import { repos } from "../data/reposData";

export const repoCard = (repos) => {
  let domString ="";
  for (const repo of repos) {
domString += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${repo.title}</h5>
    <p class="card-text">${repo.description}</p>
    <div class="repo-tag">${repo.tags}</div>
    <span class="repo-language">${repo.language} </span>
    <span class="stars">${repo.userFavorite}</span>
    <span class="forks">${repo.forks}</span>
    <span class="updated">${repos.updated}</span>
  </div>
</div>
  `
}
renderToDom("app", domString)
}
