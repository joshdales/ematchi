<script lang="ts">
	export let remaining: number;
	export let duration: number;
</script>

<div class="centred">
	<button>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
			><title>pause-circle</title><path
				d="M15,16H13V8H15M11,16H9V8H11M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
				fill="#999"
			/></svg
		>
	</button>

	<div class="duration">
		<div class="remaining" style="--p: {remaining / duration}" />
	</div>
</div>

<style>
	.centred {
		gap: 1em;
	}

	button {
		font-size: 8em;
		width: 1em;
		height: 1em;
		background: none;
		border: none;
	}

	svg {
		height: 100%;
		width: 100%;
	}

	.duration {
		flex: 1;
		height: 1em;
		background: #ccc;
		overflow: hidden;
	}

	.remaining {
		position: absolute;
		height: 100%;
		background-color: #999;
		width: calc(100% * var(--p));
	}
</style>
