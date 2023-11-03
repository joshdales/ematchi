<script lang="ts">
	import { get_twemoji_url } from './utils';

	export let found: string[];
</script>

<div class="centred">
	{#each found as emoji (emoji)}
		<img src={get_twemoji_url(emoji)} alt={emoji} />
	{/each}
</div>

<style>
	div {
		gap: 0.5em;
	}

	img {
		width: 5em;
		height: 5em;
	}
</style>
