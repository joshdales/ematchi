export function shuffle<T>(items: T[]): T[] {
	let i = items.length;

	while (i--) {
		const j = Math.floor(Math.random() * i + 1);
		const temp = items[i];
		items[i] = items[j];
		items[j] = temp;
	}

	return items;
}
