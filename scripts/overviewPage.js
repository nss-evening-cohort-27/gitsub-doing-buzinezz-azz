import { renderToDom } from "../utils/renderToDom.js";
import { navStuff } from "../components/navbar.js";
import { projectForm } from "../components/projectForm.js";
import { projects } from "../data/projectData.js";
import { repos } from "../data/reposData.js";

const renderNav = () =>{
    let nav = navStuff()
    renderToDom("#navBar",nav)
  };

// render project form 
const renderProForm = () =>{
    let proForm = projectForm();
    renderToDom("#pForm", proForm);
  }
  // eventlisteners
  const eventListeners = () =>{
  
  
  // form submit
  const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let newProject = {
        id: projects.length+1,
        title: document.querySelector("#title").value,
        description: document.querySelector("#description").value ,
        lastUpdate: "1 second ago",
      };
      projects.push(newProject);
  
      projectCardList(projects);
  });
  form.reset();
  }

 // Create Pinned Repos Card
const pinnedRepoCard = (repos) => {
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

  const startProjectApp = () =>{
  renderNav();
  renderProForm();
  // renders the projects array to the dom as cards
  projectCardList(projects);
  eventListeners();
  pinnedRepoCard(repos);
  };