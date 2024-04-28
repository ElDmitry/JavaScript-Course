'use strict';

//#1, 2
/*
const API_URL = 'https://jsonplaceholder.typicode.com/';

fetch(`${API_URL}/todos`)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((result) => {
        console.log(result)
    })
   
fetch(`${API_URL}/comments`)
    .then((response) => {
        console.log(response);
        return response.json();
    });


async function getUsers(){
    try{
        const response = await fetch(`${API_URL}/users`);
        const resp = await response.json();
        console.log(resp);
        return resp;
    } catch (error) {
        console.error(error)
    }
}

    

async function getPosts(){
    try{
        const response = await fetch(`${API_URL}/posts`);
        const resp = await response.json();
        console.log(resp);
        return resp;
    } catch (error) {
        console.error(error)
    }
}

*/
//#3
/*
fetch(`${API_URL}/todos`)
    .then((response) => {
        console.log('response:', response);
        return response.json();
    })
    .then((result) => {
        console.log('result:', 
        result.map((arr) => {
            return arr.title;   
        }) 
    );
});
*/
/*
fetch(`${API_URL}/comments`)
    .then((response) => {
        console.log('response:', response);
        return response.json();
    })
    .then((result) => {
        console.log('body:', 
        result.map((arr) => arr.body) 
    );
});
*/
/*
fetch(`${API_URL}/users`)
    .then((response) => {
        console.log('response:', response);
        return response.json();
    })
    .then((result) => {
        console.log('name:', result.map((arr) => arr.name),
        console.log('email:', result.map((arr) => arr.email) 
        ))
    })
*/
/*
fetch(`${API_URL}/posts`)
    .then((response) => {
        console.log('response:', response);
        return response.json();
    })
    .then((result) => {
        console.log('id:', result.map((arr) => arr.id),
        console.log('title:', result.map((arr) => arr.title) 
        ))
    });
    */

  //#4
  
  /*
    document.addEventListener('DOMContentLoaded', function () {
      const createForm = document.querySelector('.create-form');
      const titleInput = document.querySelector('.title');
      const bodyInput = document.querySelector('.body');
      const postsList = document.querySelector('.posts');
      const loader = document.querySelector('.loader');
      const error = document.querySelector('.error');
  
      function showError(message) {
          error.textContent = message;
          error.classList.add('show');
          error.classList.remove('hide');
      }
  
      function showPosts(posts) {
          postsList.innerHTML = '';
          posts.forEach(post => {
              const li = document.createElement('li');
              li.classList.add('post');
  
              const h3 = document.createElement('h3');
              h3.textContent = post.title;
              h3.classList.add('show');
              li.appendChild(h3);
  
              const p = document.createElement('p');
              p.textContent = post.body;
              li.appendChild(p);
  
              const editForm = document.createElement('form');
              editForm.classList.add('edit-form', 'hide');
              const editInput = document.createElement('input');
              editInput.classList.add('edit');
              editInput.type = 'text';
              editInput.value = post.title;
              editForm.appendChild(editInput);
              const btnSave = document.createElement('button');
              btnSave.classList.add('btn-save');
              btnSave.textContent = 'Save';
              editForm.appendChild(btnSave);
              li.appendChild(editForm);
  
              const btnEdit = document.createElement('button');
              btnEdit.classList.add('btn-edit');
              btnEdit.textContent = 'Edit';
              li.appendChild(btnEdit);
  
              const btnDelete = document.createElement('button');
              btnDelete.classList.add('btn-delete');
              btnDelete.textContent = 'Delete';
              li.appendChild(btnDelete);
  
              postsList.appendChild(li);
  
              btnEdit.addEventListener('click', () => {
                  h3.classList.add('hide');
                  editForm.classList.remove('hide');
                  editInput.focus();
              });
  
              btnSave.addEventListener('click', async event => {
                  event.preventDefault();
                  const newTitle = editInput.value;
                  try {
                      const response = await fetch(`http://localhost:3000/posts/${post.id}`, {
                          method: 'PUT',
                          headers: {
                              'Content-Type': 'application/json'
                          },
                          body: JSON.stringify({ title: newTitle, body: post.body })
                      });
                      if (!response.ok) {
                          throw new Error('Error to update');
                      }
                      h3.textContent = newTitle;
                      h3.classList.remove('hide');
                      editForm.classList.add('hide');
                  } catch (err) {
                      showError(err.message);
                  }
              });
  
              btnDelete.addEventListener('click', async () => {
                  try {
                      const response = await fetch(`http://localhost:3000/posts/${post.id}`, {
                          method: 'DELETE'
                      });
                      if (!response.ok) {
                          throw new Error('Error to delete');
                      }
                      loadPosts();
                  } catch (err) {
                      showError(err.message);
                  }
              });
          });
      }
  
      createForm.addEventListener('submit', async function (event) {
          event.preventDefault();
  
          const title = titleInput.value;
          const body = bodyInput.value;
  
          try {
              const response = await fetch(`http://localhost:3000/posts`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ title, body })
              });
              if (!response.ok) {
                  throw new Error('Error to create');
              }
  
              loadPosts();
              titleInput.value = '';
              bodyInput.value = '';
          } catch (err) {
              showError(err.message);
          }
      });
  
      async function loadPosts() {
          try {
              loader.classList.add('show');
              loader.classList.remove('hide');
              const response = await fetch(`http://localhost:3000/posts`);
              if (!response.ok) {
                  throw new Error('Error to load');
              }
              const posts = await response.json();
              loader.classList.remove('show');
              loader.classList.add('hide');
              showPosts(posts);
          } catch (err) {
              loader.classList.remove('show');
              loader.classList.add('hide');
              showError(err.message);
          }
      }
  
      loadPosts();
  });
  */