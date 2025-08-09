<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	// Components
	import { Nav } from '$lib/components/structure';

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

<main
	class="order mx-auto flex min-h-screen max-w-2xl flex-col items-center border border-slate-200"
>
	<header class="flex w-full items-center justify-between border-b border-b-slate-200 p-2">
		<div class="text-xs font-bold">
			User UUID: {$userStore.nickname}
		</div>
		<div class="text-xs font-bold">
			<button onclick={onLogout} class="cursor-pointer px-4 py-2 text-xs text-slate-500/70">
				Logout
			</button>
		</div>
	</header>

	{@render children()}
</main>

<footer
	class="sticky bottom-0 z-10 flex w-full justify-between border-t border-t-slate-200 bg-green-100"
>
	<Nav />
</footer>
