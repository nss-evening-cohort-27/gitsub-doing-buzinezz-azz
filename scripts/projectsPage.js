import { renderToDom } from "../utils/renderToDom.js";
import { navStuff } from "../components/navbar.js";
import { projectForm } from "../components/projectForm.js";
import { projectCardList } from "../components/projectCardList.js";
import { projects } from "../data/projectData.js";
const renderNav = () =>{
  let nav = navStuff()
  renderToDom("#navBar",nav)
};
const renderProForm = () =>{
  let proForm = projectForm();
  renderToDom("#pForm", proForm);
}


renderNav();
renderProForm();
projectCardList(projects);
