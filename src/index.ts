
import { merge } from './merge.js';

// Demo inputs
const c1 = [1, 3, 5, 9];         // ascending
const c2 = [2, 4, 6, 10];        // ascending
const c3 = [12, 8, 7, 0, -3];    // descending (max -> min)

const out = merge(c1, c2, c3);
console.log('Merged ->', out);
