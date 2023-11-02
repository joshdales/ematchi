<script lang="ts">
	export let found: string[];
</script>

<div class="centred">
	{#each found as emoji (emoji)}
		<span>{emoji}</span>
	{/each}
</div>

<style>
	div {
		gap: 0.5em;
	}

	span {
		font-size: 5em;
	}
</style>
