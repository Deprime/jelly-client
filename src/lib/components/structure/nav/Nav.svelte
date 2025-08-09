<script lang="ts">
	import { page } from '$app/state';

	const MENU = [
		{
			key: 'market',
			label: 'Рынок',
			href: '/market',
			icon: 'market'
		},
		{
			key: 'farm',
			label: 'Ферма',
			href: '/farm',
			icon: 'farm'
		},
		{
			key: 'home',
			label: 'Капибыры',
			href: '/app',
			icon: 'home'
		},
		{
			key: 'chest',
			label: 'Сундук',
			href: '/chest',
			icon: 'chest'
		},
		{
			key: 'friends',
			label: 'Друзья',
			href: '/friends',
			icon: 'friends'
		}
	];

	let menu = $derived.by(() => {
		return MENU.map((item) => {
			return {
				...item,
				active: page.url.pathname.startsWith(item.href)
			};
		});
	});
</script>

<nav class="flex h-12 w-full justify-between">
	<ul class="flex h-full w-full justify-between">
		{#each menu as item}
			<li class="flex h-full w-full flex-col items-center justify-center">
				<a href={item.href} class:text-slate-500={!item.active}>
					{item.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>
