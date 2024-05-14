import { projectForm } from "./scripts/projectsPage";
const renderProForm = () => {
  let proForm = projectForm();
  console.log("rendering");
  renderToDom("#pForm", proForm);
};

renderProForm();
