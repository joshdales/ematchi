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

export function get_twemoji_url(emoji: string): string {
	const code = [...emoji].map((char) => char.codePointAt(0)?.toString(16)).join('-');
	return `/twemoji/${code}.svg`;
}
