<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="mx-auto max-w-2xl">
	{@render children()}
</main>
