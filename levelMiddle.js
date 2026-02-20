class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map(); 
  }

  get(key) {
    if (!this.map.has(key)) return -1;

    const val = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, val);

    return val;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key);
    }

    this.map.set(key, value);

    if (this.map.size > this.capacity) {
      const lruKey = this.map.keys().next().value;
      this.map.delete(lruKey);
    }

    return null; 
  }
}

// --- CONTOH PENGGUNAAN ---
const cache = new LRUCache(2);

console.log(cache.put(1, 1)); // null
console.log(cache.put(2, 2)); // null
console.log(cache.get(1)); // 1
console.log(cache.put(3, 3)); // null (evict key 2)
console.log(cache.get(2)); // -1
console.log(cache.put(4, 4)); // null (evict key 1)
console.log(cache.get(1)); // -1
console.log(cache.get(3)); // 3
console.log(cache.get(4)); // 4
