class UI {
  constructor() {
    this.post = document.querySelector("#posts");
    this.titleInput = document.querySelector("#title");
    this.bodyInput = document.querySelector("#body");
    this.idInput = document.querySelector("#id");
    this.postSubmit = document.querySelector(".post-submit");
    this.formState = "add";
  }
  //  Display all Posts
  showPosts(posts) {
    let output = "";

    posts.forEach(post => {
      output += `
      <div class="card mb-3">
        <div class="card-body">
          <h4 class="card-title">${post.title}</h4>
          <p class="card-text">${post.body}</p>
          <a href="#" class="edit card-link" data-id="${post.id}">
          <i class="fas fa-pencil-alt"></i>
          </a>

          <a href="#" class="delete card-link" data-id="${post.id}">
          <i class="fas fa-minus-circle"></i>
          </a>
        </div>
      </div>
      `;
    });
    this.post.innerHTML = output;
  }


  showAlert(message, className) {
    this.clearAlert();

    //  Create div
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    //  Display new div
    const postsContainer = document.querySelector('.postsContainer');
    const posts = document.querySelector('#posts');
    postsContainer.insertBefore(div, posts);
  
    //  Set Timeout
    setTimeout(() => {
      this.clearAlert();
    }, 4000);
  }
  
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }

  }

  clearFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }
  //  Display form with edit state
  fillForm(data) {
    this.idInput.value = data.id;
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.changeFormState('edit');
  }

  //  Clear id hidden value
  clearIdInput() {
    this.idInput.value = '';
  }

  //  Change form state
  changeFormState(type) {
    if (type === 'edit') {
      this.postSubmit.textContent = 'Update Post';
      this.postSubmit.className = 'post-submit btn-warning btn btn-block';

      //  Create cancel button
      const button = document.createElement('button');
      button.className = 'post-cancel btn btn-light btn-block';
      button.appendChild(document.createTextNode('Cancel Edit'));

      //  Get parent
      const cardForm = document.querySelector('.card-form');
      //  Get element to insert before
      const formEnd = document.querySelector('.form-end');
      //  Insert new button into form
      cardForm.insertBefore(button, formEnd);
    } else {
      this.postSubmit.textContent = 'Post It';
      this.postSubmit.className = 'post-submit btn-primary btn btn-block';
      //  Remove cancel button if present
      if (document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel').remove();
      }
      //  Clear id from hidden field
      this.clearIdInput();
      //  Clear text fields
      this.clearFields();
    }
  }

}
export const ui = new UI();
