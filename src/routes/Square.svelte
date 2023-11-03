<script lang="ts">
	import { get_twemoji_url } from './utils';

	export let selected: boolean;
	export let found: boolean;
	export let emoji: string;
</script>

<div class="square" class:flipped={selected} class:found>
	<button on:click />
	{#if !found}
		<img src={get_twemoji_url(emoji)} alt={emoji} />
	{/if}
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.flipped button {
		background-color: red;
	}

	button {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	img {
		pointer-events: none;
		font-size: 5em;
	}
</style>
