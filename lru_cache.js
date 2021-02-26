// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// Follow up:
// Could you do get and put in O(1) time complexity?

 

// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4
 

// Constraints:

// 1 <= capacity <= 3000
// 0 <= key <= 3000
// 0 <= value <= 104
// At most 3 * 104 calls will be made to get and put.

const LRUCache = function(capacity) {
  this.capacity = capacity;
  this.count = 0;
  this.head = null;
  this.tail = null;
  this.hash = {};
};

LRUCache.prototype.get = function(key) {
  if (this.hash[key]) {
    const { val, next, prev } = this.hash[key];
    
    if (prev) prev.next = next;
    if (next) next.prev = prev || next.prev;
    
    if (this.tail === this.hash[key]) {
      this.tail = prev || this.hash[key];
    }
    
    this.hash[key].prev = null;
    
    if (this.head !== this.hash[key]) {
      this.hash[key].next = this.head;
      this.head.prev = this.hash[key];
    }
    
    this.head = this.hash[key];
    
    return val;
  }
  
  return -1;
};

LRUCache.prototype.put = function(key, value) {
  if (this.hash[key]) {
    this.hash[key].val = value;
    this.get(key);
  } else {
    this.hash[key] = { key: key, val: value, next: null, prev: null };
    
    if (this.head) {
      this.head.prev = this.hash[key];
      this.hash[key].next = this.head;
    }
    
    this.head = this.hash[key];
    if (!this.tail) this.tail = this.hash[key];
    this.count++;
  }
  
  if (this.count > this.capacity) {
    const removedKey = this.tail.key;
    
    if (this.tail.prev) {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    }
    
    delete this.hash[removedKey];
    this.count--;
  }
};