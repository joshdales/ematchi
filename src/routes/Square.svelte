<script lang="ts">
	import { get_twemoji_url } from './utils';
	import { send } from './transitions';

	export let selected: boolean;
	export let found: boolean;
	export let emoji: string;
	export let group: 'a' | 'b';
</script>

<div class="centred" class:flipped={selected || found} class:found>
	<button on:click />
	{#if !found}
		<img out:send={{ key: `${emoji}-${group}` }} src={get_twemoji_url(emoji)} alt={emoji} />
	{/if}
</div>

<style>
	div {
		border-radius: 1em;
		transform-style: preserve-3d;
		transition: transform 0.4s;
	}

	.flipped,
	.found {
		transform: rotateY(180deg);
		border: 0.5em solid #eee;
		padding: 1em;
	}

	.found {
		background-color: #fff;
	}

	button {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		background-color: #eee;
		border: none;
		font-size: inherit;
		border-radius: 1em;
	}

	img {
		pointer-events: none;
		height: 100%;
		width: 100%;
		transform: rotateY(180deg);
		backface-visibility: hidden;
	}
</style>
