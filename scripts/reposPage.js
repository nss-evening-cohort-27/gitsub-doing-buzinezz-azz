import { renderToDom } from "../utils/renderToDom.js";
import { navStuff } from "../components/navbar.js";
import { repos } from "../data/reposData.js";

const renderNav = () =>{
  console.log("checking this out.")
  let nav = navStuff()
  renderToDom("#navBar",nav)
};

renderNav();

console.log("this should be coming from the repoCard module.")

const formOnDom = () => {
  const repoSearchForm = `<form id=repoSearchForm>
  <div class="form-floating mb-3">
      <input type="text" class="form-control" id="repository" placeholder="repository" required>
      <label for="name">find the repo you're looking for</label>
    </div>
  <button type="submit" class="btn btn-success" id="form-submit">Sort</button>
  </form>`
}

renderToDom("#repoSearchForm", repoSearchForm)

formOnDom(repoSearchForm)

console.log(repoSearchForm)

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

const repoPage = () => {
  repoCard(repos)
}
repoPage()
