<script>
	import Hero from '../components/Hero.svelte';
	import About from '../components/About.svelte';
	import Projects from '../components/Projects.svelte';
	import Footer from '../components/Footer.svelte';
	import CustomNav from '../components/CustomNav.svelte';
	import { projects } from '../data/project';

	const date = new Date().getFullYear();
</script>

<main>
	<CustomNav />
	<Hero
		linkedInUrl="https://www.linkedin.com/in/nizamovruslan/"
		githubUrl="https://github.com/neezzzy"
	/>
	<About />
	<Projects {projects} />
	<Footer {date} />
</main>

<style>
	/* GLOBAL STYLES */
	:root {
		--primary-color: #030099;
		--black: #292929;
		--color-link: #a3a3ff;
		--surface-color: #292929;
		--card-title: #f96f68d8;
		--card-tech: #e3e3e3;
		--card-description: #c6c6c6d3;
		--curve: 40;
		--text-color: #313131;
		--text-footer-color: #f5f5f5;
	}

	:global(.dark-mode) {
		--body-bg: #252525;
		--card-bg: #555;
		--card-bd-col: #212121;
		--text-color: #f5f5f5;
		--surface-color: #212121;
		--black: #0e0e0e;
		--primary-color: #7369f7;
	}

	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #c9cdd2;
	}

	:global(h1, h2, h3) {
		line-height: 1.2;
		text-transform: uppercase;
		letter-spacing: -1px;
	}

	:global(h2) {
		color: var(--primary-color);
	}

	:global(p) {
		font-family: 'Ubuntu', sans-serif;
		line-height: 1.5;
		font-weight: 500;
	}

	:global(ul) {
		padding: 0;
		list-style-type: none;
	}

	:global(li) {
		font-weight: 500;
	}

	:global(a) {
		text-decoration: none;
	}

	:global(i) {
		font-size: smaller;
	}
</style>
