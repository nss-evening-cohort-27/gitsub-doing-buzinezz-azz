import { renderToDom } from "../utils/renderToDom.js";
import { navStuff } from "../components/navbar.js";
import { projectForm } from "../components/projectForm.js";
const renderNav = () =>{
  let nav = navStuff()
  renderToDom("#navBar",nav)
};


renderNav();
