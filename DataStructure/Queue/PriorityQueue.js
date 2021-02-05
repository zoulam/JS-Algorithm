class Node {
    constructor(data, priority) {
        this.data = data
        this.priority = priority
    }
}
class PriorityQueue {
    items = []

    enqueue(data, priority) {
        let element = new Node(data, priority)

        if (!this.items.length) {
            this.items.push(element)
        } else {
            let is_append = false
            for (let i = 0; i < this.items.length; i++) {
                if (element.priority < this.items[i].priority) {
                    this.items.splice(i, 0, element)
                    is_append = true
                    break
                }
            }


            if (!is_append) {
                this.items.push(element)
            }
        }
    }
}

let pq = new PriorityQueue()
pq.enqueue('a', 10)
pq.enqueue('b', 1)
pq.enqueue('c', 0)
pq.enqueue('d', 3)
pq.enqueue('e', 3)
pq.enqueue('f', 7)
console.log(pq)