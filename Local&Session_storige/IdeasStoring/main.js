document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('projectForm');
    const sub = document.getElementById('subject');
    const desc = document.getElementById('desc');
    const userType = document.getElementById('user-types');
    const techUsed = document.getElementById('tech');
    const message = document.getElementById('message');
    const storedProjectsDiv = document.getElementById('storedProjects');

    function updateStoredProjects() {
        storedProjectsDiv.innerHTML = '';
        const projects = JSON.parse(sessionStorage.getItem('projects') || '[]');
        projects.forEach((project, index) => {
            const projectDiv = document.createElement('div');
            projectDiv.className = 'project';
            projectDiv.innerHTML = `
                <h3>Project ${index + 1}: ${project.subject}</h3>
                <p><strong>Description:</strong> ${project.description}</p>
                <p><strong>User Type:</strong> ${project.userType}</p>
                <p><strong>Technology:</strong> ${project.technology}</p>
            `;
            storedProjectsDiv.appendChild(projectDiv);
        });
    }

    // Load saved projects and update the display
    updateStoredProjects();

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting

        // Create an object with the form data
        const projectData = {
            subject: sub.value,
            description: desc.value,
            userType: userType.value,
            technology: techUsed.value
        };

        // Get existing projects or initialize an empty array
        const projects = JSON.parse(sessionStorage.getItem('projects') || '[]');
        
        // Add the new project
        projects.push(projectData);

        // Store the updated projects array
        sessionStorage.setItem('projects', JSON.stringify(projects));

        // Log the stored data
        console.log('Stored in session storage:', projects);

        // Show success message
        message.textContent = 'Project added successfully!';
        message.className = 'success';
        message.style.display = 'block';

        // Update the displayed projects
        updateStoredProjects();

        // Clear the form
        form.reset();
    });
});