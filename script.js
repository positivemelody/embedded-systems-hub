/* Load projects dynamically from JSON */
fetch('projects.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('projectsContainer');
    data.forEach(project => {
      const div = document.createElement('div');
      div.classList.add('project-card');
      div.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <p><strong>Category:</strong> ${project.category}</p>
          <p><strong>Level:</strong> ${project.level}</p>
          <a href="${project.code_link}" target="_blank">
            <button>View Code</button>
          </a>
        </div>
      `;
      container.appendChild(div);
    });
  });

/* Toggle Dark/Light Mode */
function toggleMode(){
  document.body.classList.toggle('light');
}

/* Search projects dynamically */
function searchProjects(){
  const input = document.getElementById('searchInput').value.toLowerCase();
  const projects = document.querySelectorAll('.project-card');
  projects.forEach(project => {
    const text = project.innerText.toLowerCase();
    project.style.display = text.includes(input) ? 'flex' : 'none';
  });
}
