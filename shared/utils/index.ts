export function getUniqueRandomItems<T>(array: T[], count: number): T[] {
	const result: T[] = []
	const usedIndices = new Set<number>()

	while (result.length < count && usedIndices.size < array.length) {
		const index = Math.floor(Math.random() * array.length)
		if (!usedIndices.has(index)) {
			usedIndices.add(index)
			if (array[index]) result.push(array[index])
		}
	}

	return result
}
