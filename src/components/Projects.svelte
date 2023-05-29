<script lang="ts">
	import type { Project } from '../types/project';
	export let projects: Project[];

	import ProjectCard from '../components/ProjectCard.svelte';
</script>

<section id="projects" class="panel p-5">
	<hr class="border-t border-gray-300 my-4" />
	<div class="project-wrapper">
		<h2 class="text-5xl font-bold leading-5 text-uppercase letter-spacing-minus-1 tracking-tighter">
			Projects
		</h2>
		<div class="project-text text-2xl mt-4">
			<p class="leading-8">
				I continue to add new projects to my portfolio. Here are some of the latest projects that I
				have worked on.
			</p>
		</div>
		<div class="project-text">
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</section>

<style>
	.project-wrapper {
		position: relative;
		align-items: flex-start;
		margin-inline: auto;
		padding-top: 2rem;
		padding-bottom: 2rem;
		gap: 2rem;
		width: 100%;
		max-width: 60rem;
	}

	.project-text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
		text-align: left;
	}
</style>
