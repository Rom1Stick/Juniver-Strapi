document.addEventListener('DOMContentLoaded', () => {
  const pageContainer = document.getElementById('page-content');

  fetch('data/data.json')
      .then(response => response.json())
      .then(data => {
          const page = data.pages.find(p => p.title === 'À propos');

          if (page) {
              pageContainer.innerHTML = `
                  <h1>${page.title}</h1>
                  <p>${page.content}</p>
              `;
          } else {
              pageContainer.innerHTML = '<p>Contenu introuvable.</p>';
          }
      })
      .catch(error => {
          console.error('Erreur lors du chargement de la page :', error);
          pageContainer.innerHTML = '<p>Impossible de charger le contenu.</p>';
      });
});
