<script lang="ts">
	// Props
	let { skin_id, uuid }: { skin_id: string; uuid: string } = $props();
</script>

<img
	src={`/units/body/${skin_id}.png`}
	alt={uuid}
	class="pointer-events-none size-full object-contain"
/>
