<script lang="ts">
	export let icon: string;
  export let href: string;
</script>

<a
	class="btn btn-dark m-3"
	href={href}
	aria-label="Visit Ruslan Nizamov's LinkedIn"
	role="button"
	target="_blank"
>
	<img src={icon} class="social-icon" alt="Visit Ruslan Nizamov's linkedin" />
</a>
