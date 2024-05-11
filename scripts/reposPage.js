import { renderToDom } from "../utils/renderToDom.js";
import { navStuff } from "../components/navbar.js";
import { repos } from "../data/reposData";

const renderNav = () =>{
  let nav = navStuff()
  renderToDom("#navBar",nav)
};

renderNav();
console.log("checking this out.")

console.log("this should be coming from the repoCard module.")

const repoCard = (repos) => {
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
</div>`
}
renderToDom("#repos", domString)
}
console.log(repos)
