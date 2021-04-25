/*
 * @lc app=leetcode.cn id=460 lang=typescript
 *
 * [460] LFU 缓存
 */

// keyFreq表，通过key快速找到freq,
// keyValue表，通过key快速找到value,
// freqKey表，通过freq快速找到key,一个freq对应多个key,
// 多个key要保证有序，这样淘汰的时候，才能淘汰最不常用中最旧的元素
// @lc code=start

class LFUCache {
    private keyValue
    private keyFreq
    private freqKey
    private minFreq
    private capacity
    constructor(capacity: number) {
        this.keyValue = new Map()
        this.keyFreq = new Map()
        this.freqKey = new Map()
        this.capacity = capacity
        this.minFreq = 0
        // Map中的结构为int, DoubleHashList
    }
    // 当get的时候，有则返回value，并将freq+1，否则返回-1
    get(key: number): number {
        if (!this.keyValue.has(key)) {
            return -1
        }
        this.increaseFreq(key)
        return this.keyValue.get(key)
    }
    // 当key存在时候，修改key对于的value,然后就得freq移除，移动到freq+1;
    // 当key不存在的时候，判断缓存列表是否满了，如果满了，清理最小的freq的最旧的数据
    // 如果没有满，则添加到freq==1的freq队列中
    put(key: number, value: number): void {
        if (this.capacity == 0) return null
        if (this.keyValue.has(key)) {
            this.keyValue.set(key, value)
            this.increaseFreq(key)
        } else {
            // 如果满了，那就先删除
            if (this.keyValue.size >= this.capacity) {
                // console.log('this.minFreq is',this.minFreq)
                let linked = this.freqKey.get(this.minFreq)
                let { key: deleteKey } = linked.removeLeastNodes()
                this.keyValue.delete(deleteKey)
                this.keyFreq.delete(deleteKey)
            }
            this.keyFreq.set(key, 1)
            this.keyValue.set(key, value)
            let newLinked = this.freqKey.get(1)
            !newLinked ? newLinked = new LinkedHashMap() : null
            newLinked.addRecently(key)
            // console.log('newLinked ', newLinked)
            this.freqKey.set(1, newLinked)
            // console.log('keyValue ', this.keyValue)
            // console.log('keyFreq ', this.keyFreq)
            // console.log('freqKey', this.freqKey)
            this.minFreq = 1
        }
        return
    }
    private increaseFreq(key) {
        // 将其freq+1
        let freq = this.keyFreq.get(key)
        this.keyFreq.set(key, freq + 1)
        // 将freq维护的哈希列表处理一下,从freq中移除，添加到freq+1的最近使用
        let linked = this.freqKey.get(freq)
        linked.removeNodesByKey(key)
        // 如果移动的是最后一个,且最后一个空了
        if (freq === this.minFreq && linked.getSize() === 0) this.minFreq++
        let newLinked = this.freqKey.get(freq + 1)
        // console.log('before newLinked is',newLinked)
        !newLinked ? newLinked = new LinkedHashMap() : null
        newLinked.addRecently(key)
        this.freqKey.set(freq + 1, newLinked)
        // console.log('after newLinked is',newLinked)
        // console.log('get methods this.freqKey is',this.freqKey)
    }
}
class LinkedHashMap {
    private map
    private doubleList
    constructor() {
        this.map = new Map()
        this.doubleList = new DoubleList()
    }
    // 添加到最近的元素
    addRecently(key) {
        const nodes = new Nodes(key)
        this.map.set(key, nodes)
        this.doubleList.addLast(nodes)
        // console.log('this.doubleList is',this.doubleList)
        // console.log('this.map is',this.map)

    }
    // 移除指定元素
    removeNodesByKey(key) {
        const nodes = this.map.get(key)
        this.map.delete(key)
        // console.log('removeNodesByKey nodes is',nodes)
        this.doubleList.remove(nodes)
    }
    // 删除最旧的元素
    removeLeastNodes() {
        const nodes = this.doubleList.removeHead()
        const deleteKey = nodes.key
        this.map.delete(deleteKey)
        return nodes
    }
    getSize() {
        return this.map.size
    }

}
// 此处nodes不用存储value的值，因为单独有一个keyValue表来做这个事情，
// lru中需要用这个，是因为没有单独的key-value表，故将nodes节点中的value删去后，测试性能比没去前提高了数倍
class Nodes {
    public key = null
    public next: Nodes = null
    public prev: Nodes = null
    constructor(key) {
        this.key = key;
        // this.value = value
    }
}
class DoubleList {
    private head: Nodes = null
    private tail: Nodes = null
    private size = -1;
    // 既然是通用的DoubleList,那么就不应该管理maxSize这个非通用的属性
    // public maxSize = 0
    constructor() {
        this.head = new Nodes(0)
        this.tail = new Nodes(0)
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
        // console.log('nodes is',nodes)
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
        // console.log('first is',first)
        this.remove(first)
        return first
    }
    getSize() {
        return this.size
    }
}
/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

//  ["LFUCache","put","put","get","get"] \n  [[2],[1,1],[2,2],[1]]
//  ["LFUCache","put","put","get","put","get","get","put"] \n  [[2],[1,1],[2,2],[1],[3,3],[2],[3],[4,4]]
//  ["LFUCache","put","put","get","put","put"] \n  [[2],[1,1],[2,2],[1],[3,3],[1,2]]

//  [","put","get","get","get"] \n 
//  [,[4,4],[1],[3],[4]]

//  ["LFUCache","put","put","get","put","get","get","put","get","get","get"] \n  [[2],[1,1],[2,2],[1],[3,3],[2],[3],[4,4],[1],[3],[4]]

// ["LFUCache","put","get"] \n[[0],[0,0],[0]]
// ["LFUCache","put","put","put","get","put","put","get","put","put","get","put","get","get","get","put","put","get","put","get"] \n [[10],[7,28],[7,1],[8,15],[6],[10,27],[8,10],[8],[6,29],[1,9],[6],[10,7],[1],[2],[13],[8,30],[1,5],[1],[13,2],[12]]
// @lc code=end

