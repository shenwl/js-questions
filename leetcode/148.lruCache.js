class LRUCache {
  constructor(capacity) {
    this.data = new Map();
    this.capacity = capacity;
  }

  get = (key) => {
    const value = this.data.get(key);
    if (value === undefined) return -1;
    this.data.delete(key);
    this.data.set(key, value);
    return value;
  }

  put = (key, value) => {
    this.data.delete(key);
    if (this.data.size >= this.capacity) {
      this.data.delete(this.data.keys().next().value);
    }
    this.data.set(key, value);
  }
}