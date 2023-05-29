<script lang="ts">
	export let linkedInUrl: string;
	export let githubUrl: string;
</script>

<header class="hero">
	<section class="px-6 pb-12">
		<div class="hero-main mx-auto">
			<h1 class="hero-title text-center">
				<span class="title-wrapper">
					<span class="title">
						<div>Russell</div>
					</span>
				</span>
				<span class="title-wrapper">
					<span class="title">
						<div>Nizamov</div>
					</span>
				</span>
				<span class="title-wrapper">
					<span class="title">
						<div>Web</div>
					</span>
				</span>
				<span class="title-wrapper">
					<span class="title">
						<div>Developer</div>
					</span>
				</span>
			</h1>
			<div class="social-buttons-container flex justify-center md:justify-between gap-2">
				<a
					aria-label="Visit Ruslan Nizamov's LinkedIn"
					class="px-4 py-2 text-lg border border-black-200 rounded-md text-black-300 hover:bg-gray-100"
					target="_blank"
					href={linkedInUrl}>LinkedIn</a
				>
				<a
					aria-label="Visit Ruslan Nizamov's GitHub"
					class="px-4 py-2 text-lg border border-black-200 rounded-md text-black-300 hover:bg-gray-100"
					target="_blank"
					href={githubUrl}>GitHub</a
				>
			</div>
		</div>
	</section>
</header>

<style>
	.hero {
		position: relative;
		transition: background-color 500ms;
	}

	.hero-main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.hero-title {
		height: fit-content;
		width: 100%;
		display: flex;
		flex-direction: column;
		z-index: 2;
	}

	.title {
		display: inline-block;
		text-transform: uppercase;
		font-size: 8vw;
		transform-origin: bottom left;
	}
</style>
