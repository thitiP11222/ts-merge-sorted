
/**
 * Merge three arrays into ascending order without using any sort function.
 * - collection_1: ascending (min -> max)
 * - collection_2: ascending (min -> max)
 * - collection_3: descending (max -> min)
 */
export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
  const res: number[] = [];
  let i = 0; // pointer for collection_1 (ascending)
  let j = 0; // pointer for collection_2 (ascending)
  let k = collection_3.length - 1; // pointer for collection_3 from the end (smallest first)

  const has1 = () => i < collection_1.length;
  const has2 = () => j < collection_2.length;
  const has3 = () => k >= 0;

  // select the smallest among available heads
  while (has1() || has2() || has3()) {
    // Fetch current candidates; use +Infinity when not available
    const c1 = has1() ? collection_1[i] : Number.POSITIVE_INFINITY;
    const c2 = has2() ? collection_2[j] : Number.POSITIVE_INFINITY;
    const c3 = has3() ? collection_3[k] : Number.POSITIVE_INFINITY;

    if (c1 <= c2 && c1 <= c3) {
      res.push(c1);
      i++;
    } else if (c2 <= c1 && c2 <= c3) {
      res.push(c2);
      j++;
    } else {
      // c3 is smallest
      res.push(c3);
      k--;
    }
  }
  return res;
}
