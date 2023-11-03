<script lang="ts">
	import Game from './Game.svelte';
	import '../styles.css';
	import Modal from './Modal.svelte';
	import { levels } from './levels';

	let state: 'waiting' | 'playing' | 'paused' | 'won' | 'lost' = 'waiting';
	let game: Game;
</script>

<Game
	bind:this={game}
	on:play={() => {
		state = 'playing';
	}}
	on:pause={() => {
		state = 'paused';
	}}
	on:lose={() => {
		state = 'lost';
	}}
	on:win={() => {
		state = 'won';
	}}
/>

{#if state !== 'playing'}
	<Modal>
		<div>
			<header>
				<h1>e<span>match</span>i</h1>
				<p>An emoji matching game</p>
			</header>

			{#if state === 'won' || 'lost'}
				<p>You {state} the game</p>
			{:else if state === 'paused'}
				<p>Paused!</p>
			{:else if state === 'waiting'}
				<p>choose a level:</p>
			{/if}

			<div class="controls">
				{#if state === 'paused'}
					<button>resume</button>
					<button>quit</button>
				{:else if state === 'waiting'}
					{#each levels as level}
						<button on:click={() => game.start(level)}>{level.label}</button>
					{/each}
				{/if}
			</div>
		</div>
	</Modal>
{/if}
