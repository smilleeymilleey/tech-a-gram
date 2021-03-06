const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

// document
//   .querySelector('.new-project-form')
//   .addEventListener('submit', newFormHandler);
 

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);

document 
.querySelector('.s4')
.addEventListener('click', async function(event){
  let test = "testing"
  console.log(event.target)
  
if (event.target.matches('img')){
  console.log('img clicked')
  const response = await fetch(`/api/users/image`, {
    method: 'POST',
    body: JSON.stringify({ image:event.target.src }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to create project');
  }


}
})