import { projectForm } from "./components/projectForm.js";
import { renderToDom } from "./utils/renderToDom.js";
const renderProForm = () => {
  let proForm = projectForm();
  console.log("rendering");
  renderToDom("#pForm", proForm);
};

renderProForm();
