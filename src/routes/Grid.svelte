<script lang="ts">
	import Square from './Square.svelte';
	export let grid: string[];

	let a: number = -1;
	let b: number = -1;
</script>

<div class="grid">
	{#each grid as emoji, i}
		<Square
			{emoji}
			selected={a === i || b === i}
			on:click={() => {
				if (a === -1 && b === -1) {
					a = i;
				}
			}}
		/>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);
		height: 100%;
		gap: 0.5em;
	}
</style>
