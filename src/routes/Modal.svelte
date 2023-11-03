<div class="modal centred">
	<slot />
</div>

<style>
	.modal {
		z-index: 10;
	}

	.modal,
	.modal::before {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	.modal::before {
		content: '';
		backdrop-filter: blur(10px);
	}
</style>
