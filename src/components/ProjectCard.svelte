<script lang="ts">
  import type { Project } from '../types/project';
  export let project: Project;
</script>

<a href={project.link} target="_blank" rel="noopener noreferrer" class="block">
  <div class="project-card bg-slate-200 rounded-md mt-5 mb-5 overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105">
    <div class="project-image relative aspect-h-9">
      <img src={project.image} alt={project.title} class="absolute w-full h-full object-cover " />
    </div>
    <div class="project-content p-4">
      <h2 class="text-4xl font-semibold text-slate-900 mb-2">{project.title}</h2>
      <p class="text-3xl text-slate-700 mb-4">{project.description}</p>
    </div>
  </div>
</a>

<style>
  .aspect-h-9 {
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
  }

  .project-card {
    cursor: pointer;
  }

  .project-card:hover {
    transform: scale-105;
    border: 1px solid #7369f7;
  }
</style>
