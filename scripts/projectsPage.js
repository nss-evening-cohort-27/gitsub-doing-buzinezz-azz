import { renderToDom } from "../utils/renderToDom.js";
import { navStuff } from "../components/navbar.js";
import { projectForm } from "../components/projectForm.js";
import { projectCardList } from "../components/projectCardList.js";
import { projects } from "../data/projectData.js";
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
    form.reset();
});
}


const startProjectApp = () =>{
renderNav();
renderProForm();
// renders the projects array to the dom as cards
projectCardList(projects);
eventListeners();
};


startProjectApp();
