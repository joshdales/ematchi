<script lang="ts">
	import { onMount } from 'svelte';
	import Countdown from './Countdown.svelte';
	import Found from './Found.svelte';
	import Grid from './Grid.svelte';

	import { levels } from './levels';
	import type { Level } from './levels';
	import { shuffle } from './utils';

	const level = levels[0];

	let size: number = level.size;
	let grid: string[] = create_grid(level);
	let found: string[] = [];
	let duration = level.duration;
	let remaining = level.duration;
	let playing = false;

	function create_grid(level: Level): string[] {
		const copy = level.emojis.slice();
		const pairs: string[] = [];
		for (let i = 0; i < level.size ** 2 / 2; ++i) {
			const index = Math.floor(Math.random() * copy.length);
			const emoji = copy[index];

			copy.splice(index, 1);
			pairs.push(emoji);
		}

		pairs.push(...pairs);

		return shuffle(pairs);
	}

	function countdown() {
		const start = new Date();
		let remaining_at_start = remaining;

		function loop() {
			if (playing) {
				return;
			}
			requestAnimationFrame(loop);

			remaining = remaining_at_start - (new Date() - start);

			if (remaining <= 0) {
				// TODO: the game has been lost
				playing = false;
			}
		}

		loop();
	}

	onMount(() => {
		countdown();
	});
</script>

<div class="game centred">
	<div class="info">
		<Countdown {duration} {remaining} />
	</div>

	<div class="grid-container">
		<Grid
			{size}
			{grid}
			on:found={(e) => {
				found = [...found, e.detail.emoji];
			}}
			{found}
		/>
	</div>

	<div class="info">
		<Found {found} />
	</div>
</div>

<style>
	.game {
		flex-direction: column;
		font-size: min(1vmin, 0.5em);
		height: 100%;
	}

	.info {
		width: 80em;
		height: 10em;
	}

	.grid-container {
		width: 80em;
		height: 80em;
	}
</style>
