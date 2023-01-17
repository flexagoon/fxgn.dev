<script lang="ts">
	import '$lib/scss/main.scss';
	import Header from '$lib/components/Header.svelte';
</script>

<header>
	<Header />
</header>
<main>
	<div>
		<slot />
	</div>
</main>

<style>
	header {
		position: fixed;
		width: 100%;
		top: 0px;
		padding-top: 16px;
		background-color: black;
	}

	main {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 80vh;
		margin-top: 10vh;
		margin-bottom: 10vh;
	}
</style>
