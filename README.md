# 0) ดาวน์โหลดโปรเจกต์

**ดาวน์โหลด:** [ts-merge-three-sorted.zip](sandbox:/mnt/data/ts-merge-three-sorted.zip)

แตกไฟล์แล้วพร้อมรันได้ทันที

```
ts-merge-three-sorted/
├─ src/
│  ├─ merge.ts        # ฟังก์ชัน merge (O(n))
│  └─ index.ts        # เดโม่รันจาก CLI
├─ test/
│  └─ merge.test.ts   # ยูนิตเทสต์ (Vitest)
├─ package.json
├─ tsconfig.json
└─ README.md          # คำอธิบาย + วิธีรัน
```

---


# 1) วิธีติดตั้ง Dependencies

เปิดเทอร์มินัลในโฟลเดอร์โปรเจกต์

```bash
npm install
```

---

# 2) วิธีรัน Unit Test

```bash
npm test         # รันเทสต์ครั้งเดียว
npm run test:watch  # ดูผลแบบ watch mode
```

เทสต์ครอบคลุม: กรณีว่าง, ค่าติดลบ, ค่าซ้ำ, ช่วงคละกว้าง, ทั้งหมดเท่ากัน ฯลฯ

---

# 3) วิธีรันเดโม่ (ดูผลลัพธ์จริง)

```bash
npm start
```

จะพิมพ์ผลลัพธ์ของการรวม 3 อาร์เรย์ตัวอย่างบนคอนโซล

---

# 4) วิธีบิลด์เป็น JS (optional)

```bash
npm run build
```

ไฟล์จะออกที่ `dist/`

---

# 5) โค้ดหลัก

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


