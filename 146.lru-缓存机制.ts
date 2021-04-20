/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
class LRUCache {
    private capacity = 0
    private map
    private cache: DoubleList
    constructor(capacity: number) {
        this.capacity = capacity
        this.map = new Map()
        this.cache = new DoubleList()
    }
    /**
     * 如果当前有元素，那么提升到最近使用，否则返回-1
     * @param key 
     * @returns 
     */
    get(key: number): number {
        if (!this.map.has(key)) return -1
        this.makeRecently(key)
        return this.map.get(key).value
    }
    /**
     * 如果存在这个key，那么删除原先的值，并且提升到最前；
     * 如果不存在那么就判断缓存满了没有，如果满了，清理缓存，然后添加，否则直接添加
     * @param key 
     * @param value 
     * @returns 
     */
    put(key: number, value: number): void {
        if (this.map.has(key)) {
            this.deleteKey(key)
            this.addRecently(key, value)

        } else {
            if (this.cache.getSize() === this.capacity) {
                this.removeLeastRecently()
            }
            this.addRecently(key, value)
        }
    }
    /**
     * 将已存在的节点移到最近使用
     * @param key 
     */
    private makeRecently(key) {
        const nodes: Nodes = this.map.get(key)
        // 队列中移除
        this.cache.remove(nodes)
        // 重新插入到队尾
        this.cache.addLast(nodes)
    }
    /**
     * 将已存在的节点移除
     */
    private deleteKey(key) {
        const nodes = this.map.get(key)
        // 从链表中删除
        this.cache.remove(nodes)
        // 从map中删除
        this.map.delete(key)
    }
    // 添加新的节点到最近使用
    private addRecently(key, value) {
        const nodes = new Nodes(key, value)
        // 在链表中插到队尾
        this.cache.addLast(nodes)
        // 在map中存入元素
        this.map.set(key, nodes)
    }
    // 删除最久未使用的节点
    private removeLeastRecently() {
        const deleteNode = this.cache.removeHead()
        const deleteKey = deleteNode.key
        this.map.delete(deleteKey)
    }
}

class Nodes {
    public key = null
    public value = null
    public next: Nodes = null
    public prev: Nodes = null
    constructor(key, value) {
        this.key = key;
        this.value = value
    }
}
/**
 * 建立一个双向链表，tail为最新使用的，
 */
class DoubleList {
    private head: Nodes = null
    private tail: Nodes = null
    private size = -1;
    // 既然是通用的DoubleList,那么就不应该管理maxSize这个非通用的属性
    // public maxSize = 0
    constructor() {
        this.head = new Nodes(0, 0)
        this.tail = new Nodes(0, 0)
        this.head.next = this.tail
        this.tail.prev = this.head
        this.size = 0
    }
    // 实现一个添加最后一个元素的方法，就是添加最近使用的元素
    addLast(nodes: Nodes) {
        nodes.next = this.tail
        nodes.prev = this.tail.prev
        this.tail.prev.next = nodes
        this.tail.prev = nodes
        this.size++
    }
    // 移出列表中某一项元素
    remove(nodes: Nodes) {
        nodes.next.prev = nodes.prev
        nodes.prev.next = nodes.next
        this.size--
    }
    // 移出第一个元素,也就是最近没有使用的元素
    removeHead() {
        if (this.head.next === this.tail) {
            return null
        }
        const first = this.head.next
        this.remove(first)
        return first
    }
    getSize() {
        return this.size
    }
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
// "["LRUCache","put","put","get","put","put","get"] \n [[2],[2,1],[2,2],[2],[1,1],[4,1],[2]]"
