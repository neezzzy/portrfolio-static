<script>
	import { Navbar, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

	function toggleDarkMenu() {
		window.document.body.classList.toggle('dark-mode');
	}
</script>

<Navbar let:hidden let:toggle>
	<div class="theme">
		<button on:click={toggleDarkMenu} aria-label="toggle dark menu"></button>
	</div>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="#about">About Me</NavLi>
		<NavLi href="#projects">Projects</NavLi>
	</NavUl>
</Navbar>

<style>
	.dark-mode .theme button:before {
		content: '☀️';
	}

	.theme button:before {
		content: '🌙';
	}

	.dark-mode .theme button {
		background: #dbdbdb;
		color: #3a3a3a;
		border: 2px solid #cfcfcf;
	}
	.theme button {
		align-self: flex-end;
		font-size: 18px;
		font-weight: 400;
		padding: 8px 16px;
		background: #3a3a3a;
		border-radius: 100px;
		border: 2px solid #23272a;
	}
</style>
