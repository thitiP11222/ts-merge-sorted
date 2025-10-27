# Typescript project with unit test:

```
ts-merge-sorted/
├─ src/
│  ├─ merge.ts        # merge function (O(n))
│  └─ index.ts        # CLI demo
├─ test/
│  └─ merge.test.ts   # unit tests (Vitest)
├─ package.json
├─ tsconfig.json
└─ README.md          # setup & usage instructions
```

---

## 1 Install Dependencies

Open the terminal inside the project folder and run:

```bash
npm install
```

---

## 2 Run Unit Tests

```bash
npm test           # run all tests once
npm run test:watch # watch mode (auto re-run on save)
```

The tests cover:

* empty arrays
* negative values
* duplicates
* mixed ranges
* identical values

---

## 3 Run Demo (see actual output)

```bash
npm start
```

It will print the merged result of three sample arrays to the console.

---

## 4 Build to JavaScript (optional)

```bash
npm run build
```

The compiled files will appear in the `dist/` directory.

---

## 5 Main Code

`src/merge.ts`

```ts
export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
  const res: number[] = [];
  let i = 0;                    // c1: ascending
  let j = 0;                    // c2: ascending
  let k = collection_3.length - 1; // c3: descending -> read from end (smallest)

  const has1 = () => i < collection_1.length;
  const has2 = () => j < collection_2.length;
  const has3 = () => k >= 0;

  while (has1() || has2() || has3()) {
    const c1 = has1() ? collection_1[i] : Number.POSITIVE_INFINITY;
    const c2 = has2() ? collection_2[j] : Number.POSITIVE_INFINITY;
    const c3 = has3() ? collection_3[k] : Number.POSITIVE_INFINITY;

    if (c1 <= c2 && c1 <= c3) { res.push(c1); i++; }
    else if (c2 <= c1 && c2 <= c3) { res.push(c2); j++; }
    else { res.push(c3); k--; }
  }
  return res;
}
```

---
