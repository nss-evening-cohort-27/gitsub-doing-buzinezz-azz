export const projectForm = () => {
  return `
  <form>
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="projectTitle" placeholder="Title">
    </div>
    <div class="form-group">
      <label for="description">Enter Description</label>
      <textarea class="form-control" id="projectDescription" rows="3"></textarea>
    </div>
  </form> 
  `
}
