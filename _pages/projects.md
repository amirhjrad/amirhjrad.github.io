---
permalink: /projects/
title: "My Projects"
author_profile: true
---

## My Projects

Explore my work in Digital Systems, Hardware Design, and interdisciplinary applications. Click on a project to learn more and access the source code.

<div class="projects-grid">
{% for project in site.data.projects %}
<div class="project-card">
  <h3>{{ project.title }}</h3>
  <img src="{{ project.image }}" alt="{{ project.title }}" class="project-image">
  <div class="project-details" style="display: none;">
    <p>{{ project.description }}</p>
    <p><strong>Technologies:</strong> {{ project.technologies }}</p>
    <p><strong>Completed:</strong> {{ project.completed }}</p>
    <a href="{{ project.github }}" target="_blank">GitHub Repository</a>
  </div>
</div>
{% endfor %}
</div>

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.project-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.project-card:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.project-image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}
.project-details {
  margin-top: 10px;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('click', function() {
      const details = this.querySelector('.project-details');
      details.style.display = details.style.display === 'none' ? 'block' : 'none';
    });
  });
});
</script>

{% assign projects = site.data.projects %}
{% if projects %}
{% else %}
<p>No projects available at the moment.</p>
{% endif %}