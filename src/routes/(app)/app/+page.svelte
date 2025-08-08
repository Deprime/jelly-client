<script lang="ts">
	import { onMount } from 'svelte';

	import userStore from '$lib/stores/user';
	import unitsStore from '$lib/stores/units';

	// Data
	let slots = $derived.by(() => {
		const total = $userStore.unit_slots < 5 ? 5 : $userStore.unit_slots;
		const list = Array(total).fill(0);
		return list.map((_, index) => {
			return {
				index,
				available: index < $userStore.unit_slots,
				tradable: index === $userStore.unit_slots,
				unit: $unitsStore[index]
			};
		});
	});

	onMount(() => {
		// console.log('Authorized user');
	});
</script>

<div class="flex w-full justify-center py-5">
	{#each $unitsStore as unit}
		<picture class="max-w-64">
			<img src={`/units/body/${unit.skin_id}.png`} alt={unit.uuid} />
		</picture>
	{/each}
</div>

<div class="grid w-full grid-cols-5 gap-2">
	{#each slots as slot}
		<div
			class="relative aspect-square rounded-lg bg-slate-300/50 p-4"
			class:opacity-50={!slot.available}
		>
			{#if slot.unit}
				<picture class="size-full">
					<img
						src={`/units/body/${slot.unit.skin_id}.png`}
						alt={slot.unit.uuid}
						class="size-full object-contain"
					/>
				</picture>
			{/if}

			{#if slot.tradable}
				<div
					class="absolute inset-0 flex size-full cursor-pointer items-center justify-center rounded-lg text-center text-5xl text-black transition-all hover:bg-slate-500/50"
				>
					+
				</div>
			{/if}
		</div>
	{/each}
</div>
