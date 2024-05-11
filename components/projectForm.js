export const projectForm = () => {
  return `
  <div id = "projectForm">
  <h4>Create a New Project</h4>
  <span>Coordinate, track, and update your work in one place, so projects stay transparent and on schedule</span>
  <form>
    <div class="form-group" >
      <label for="title">Project board name</label>
      <input type="text" class="form-control" id="title" placeholder="Project Name" required>
    </div>
    <div class="form-group">
      <label for="description">Enter Description</label>
      <textarea class="form-control" id="description" rows="3" required></textarea>
    </div>
    <div>
      <button type="submit" class="btn btn-success">Create Project</button>
    </div>
  </form> 
  </div>
  `
}
