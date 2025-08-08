<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	// API
	import { userApi } from '$lib/api/user';

	// Stores
	import accessTokenStore from '$lib/stores/accessToken';
	import userStore from '$lib/stores/user';
	import unitsStore from '$lib/stores/units';

	// Methods
	let { children } = $props();

	const onLogout = () => {
		accessTokenStore.clear();
		userStore.clear();
		goto('/auth');
	};

	const fetchUserData = async () => {
		try {
			const result = await userApi.me();
			userStore.set(result.user);
			unitsStore.set(result.units);
		} catch (error) {
			console.error(error);
		}
	};

	onMount(async () => {
		await fetchUserData();
	});
</script>

<main class="mx-auto flex min-h-screen max-w-2xl flex-col items-center">
	<header>
		<p class="text-sm font-bold">
			{$userStore.uuid}
		</p>
	</header>
	{@render children()}
</main>

<footer class="sticky bottom-0">
	<button onclick={onLogout} class="cursor-pointer px-4 py-2 text-xs text-slate-500/50">
		Logout
	</button>
</footer>
