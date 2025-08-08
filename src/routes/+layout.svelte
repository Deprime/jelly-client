<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="mx-auto max-w-2xl bg-slate-50/50">
	{@render children()}
</main>
