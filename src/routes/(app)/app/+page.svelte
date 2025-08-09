<script lang="ts">
	import { onMount } from 'svelte';

	// Types
	import type { Unit } from '$lib/types/unit';

	// Components
	import LockKeyholeIcon from '@lucide/svelte/icons/lock-keyhole';
	import { UnitPicture } from '$lib/components/features';

	import userStore from '$lib/stores/user';
	import unitsStore from '$lib/stores/units';
	import unitUiStore from '$lib/stores/unit-ui';

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

	let selectedUnit = $derived.by(() => {
		return $unitsStore.find((unit) => unit.id === $unitUiStore.selected_id);
	});

	// Methods
	const onUnitFeed = () => {
		// console.log(unit);
	};

	const onUnitSelect = (unit: Unit) => {
		if ($unitUiStore.selected_id !== unit.id) {
			$unitUiStore.selected_id = unit.id;
		}
	};

	onMount(() => {
		if (!$unitUiStore.selected_id) {
			$unitUiStore.selected_id = $unitsStore[0].id;
		}
	});
</script>

<div class="flex w-full justify-center py-10 select-none">
	<button
		class="h-64 cursor-pointer transition duration-150 active:scale-[0.98]"
		onclick={() => onUnitFeed()}
	>
		<UnitPicture skin_id={selectedUnit.skin_id} uuid={selectedUnit.uuid} />
	</button>
</div>

<div class="grid w-full grid-cols-5 gap-2">
	{#each slots as slot}
		<div
			class="relative aspect-square rounded-lg bg-slate-300/50 p-4"
			class:opacity-50={!slot.available}
		>
			{#if slot.unit}
				<button class="size-full" onclick={() => onUnitSelect(slot.unit)}>
					<UnitPicture skin_id={slot.unit.skin_id} uuid={slot.unit.uuid} />
				</button>
			{/if}

			{#if !slot.available}
				{#if slot.tradable}
					<button
						class="absolute inset-0 flex size-full cursor-pointer items-center justify-center rounded-lg text-center text-5xl text-black transition-all hover:bg-slate-500/50"
					>
						+
					</button>
				{:else}
					<div
						class="absolute inset-0 flex size-full cursor-pointer items-center justify-center rounded-lg text-center text-5xl text-black transition-all hover:bg-slate-500/50"
					>
						<LockKeyholeIcon size={32} />
					</div>
				{/if}
			{/if}
		</div>
	{/each}
</div>
