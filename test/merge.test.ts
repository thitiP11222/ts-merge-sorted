
import { describe, it, expect } from 'vitest';
import { merge } from '../src/merge.js';

describe('merge three arrays (two ascending, one descending) without sort()', () => {
  it('merges basic example', () => {
    const c1 = [1, 3, 5];
    const c2 = [2, 4, 6];
    const c3 = [9, 7, 0]; // descending
    expect(merge(c1, c2, c3)).toEqual([0,1,2,3,4,5,6,7,9]);
  });

  it('handles empty arrays', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1,2], [], [])).toEqual([1,2]);
    expect(merge([], [1,2], [])).toEqual([1,2]);
    expect(merge([], [], [5,1])).toEqual([1,5]);
  });

  it('handles negatives and duplicates', () => {
    const c1 = [-5, -1, 0, 0, 3];
    const c2 = [-4, 0, 2, 2];
    const c3 = [5, 4, 2, 0, -1, -6]; // descending
    expect(merge(c1, c2, c3)).toEqual([-6,-5,-4,-1,-1,0,0,0,2,2,2,3,4,5]);
  });

  it('handles all equal elements', () => {
    const c1 = [1,1];
    const c2 = [1,1,1];
    const c3 = [1,1,1,1]; // descending
    expect(merge(c1, c2, c3)).toEqual([1,1,1,1,1,1,1,1,1]);
  });

  it('handles large mixed ranges', () => {
    const c1 = [-10, -3, 0, 7, 7, 20];
    const c2 = [-9, -1, 2, 8, 30];
    const c3 = [50, 21, 10, 5, 1, -2, -11]; // descending
    expect(merge(c1, c2, c3)).toEqual([-11,-10,-9,-3,-2,-1,0,1,2,5,7,7,8,10,20,21,30,50]);
  });

  it('works when descending array is shortest or longest', () => {
    expect(merge([1,3,5], [2,4,6], [3])).toEqual([1,2,3,3,4,5,6]);
    expect(merge([1], [2], [5,4,3,0])).toEqual([0,1,2,3,4,5]);
  });
});
