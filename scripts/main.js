import { renderToDom } from "../utils/renderToDom.js";
import { navStuff } from "../components/navbar.js";

const renderNav = () =>{
  let nav = navStuff()
  renderToDom("#navBar",nav)
};


renderNav();
