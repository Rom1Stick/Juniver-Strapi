document.addEventListener('DOMContentLoaded', () => {
  const blogContainer = document.getElementById('blog-list');

  fetch('data/data.json')
      .then(response => response.json())
      .then(data => {
          const blogs = data.blogs;

          blogContainer.innerHTML = '';
          blogs.forEach(blog => {
              const blogItem = document.createElement('div');
              blogItem.classList.add('blog-item');

              blogItem.innerHTML = `
                  <img src="${blog.image}" alt="${blog.title}">
                  <h2>${blog.title}</h2>
                  <p><strong>Date :</strong> ${blog.date}</p>
                  <p>${blog.content}</p>
              `;
              blogContainer.appendChild(blogItem);
          });
      })
      .catch(error => {
          console.error('Erreur lors du chargement des articles :', error);
          blogContainer.innerHTML = '<p>Impossible de charger les articles.</p>';
      });
});
