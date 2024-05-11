export const projectForm = () => {
  return `
  <div id = "projectForm">
  <h4>Create a New Project</h4>
  <span>Coordinate, track, and update your work in one place, so projects stay transparent and on schedule</span>
  <form>
    <div class="form-group">
      <label for="title">Project board name</label>
      <input type="text" class="form-control" id="projectTitle" placeholder="Project Name">
    </div>
    <div class="form-group">
      <label for="description">Enter Description</label>
      <textarea class="form-control" id="projectDescription" rows="3"></textarea>
    </div>
    <button type="submit" class="btn btn-success">Create Project</button>
  </form> 
  </div>
  `
}
