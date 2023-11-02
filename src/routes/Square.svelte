<script lang="ts">
	export let selected: boolean;
	export let emoji: string;
</script>

<div class="square" class:flipped={selected}>
	<button on:click />
	<span>{emoji}</span>
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

	span {
		pointer-events: none;
		font-size: 5em;
	}
</style>
