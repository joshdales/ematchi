<script lang="ts">
	import { get_twemoji_url } from './utils';
	import { receive } from './transitions';

	export let found: string[];
</script>

<div class="found centred">
	{#each found as emoji (emoji)}
		<div class="pair centred">
			<img in:receive={{ key: `${emoji}-a` }} src={get_twemoji_url(emoji)} alt={emoji} />
			<img in:receive={{ key: `${emoji}-b` }} src={get_twemoji_url(emoji)} alt={emoji} />
		</div>
	{/each}
</div>

<style>
	div {
		gap: 0.5em;
	}

	.pair {
		border-radius: 20em;
		border: 0.4em solid #eee;
		width: 7em;
		height: 7em;
	}

	img {
		position: absolute;
		height: 50%;
		width: 50%;
	}
</style>
