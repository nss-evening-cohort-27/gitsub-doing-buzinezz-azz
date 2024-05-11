import { projects } from "../data/projectData.js"
import { renderToDom } from "../utils/renderToDom.js";

export let projectCardList = () => {
  let domstring = ""
  for (const project of projects) {
    domstring+=`
    <div class = "pListContainer">
      <div class="mb-3 d-flex align-items-center" padding: 20px; border: 1px solid black; border-radius: 10px;">
        <div class="flex-shrink-0"> <h4 style="font-size: 20px; padding: 0px; margin: 0px">${project.title}</h4>
          <div>${project.lastUpdate}
          </div>
        </div>
        <div class="flex-grow-1 ms-3"><span>${project.description}</span>
        </div>
        <div>
        <button class="btn btn-danger" id="delete--${project.id}">X</button>
        </div>
      </div>
  </div>
    `;
    }
renderToDom("#proList",domstring)
};
