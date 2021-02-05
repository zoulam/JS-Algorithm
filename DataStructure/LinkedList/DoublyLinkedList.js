class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    head = null
    tail = null
    length = 0

    append(data) {
        let element = new Node(data)
        if (this.head) {
            this.tail.next = element
            element.prev = this.tail
            this.tail = element
        } else {
            this.head = element
            this.tail = element
        }
        this.length++
    }

    insert(position, data) {
        if (position < 0 || position > this.length) return false

        let element = new Node(data)
        // ! 两种大类：链表为空，链表不为空（头插，尾插，以及中间节点）
        if (this.length == 0) {
            this.head = element
            this.tail = element
        } else {
            if (position === 0) {
                element.next = this.head
                this.head.prev = element
                this.head = element
            } else if (position == this.length) {
                this.tail.next = element
                element.prev = this.tail
                this.tail = element
            } else {
                let index = 0
                let previous_node = null
                let current_node = this.head
                while (index < position) {
                    previous_node = current_node
                    current_node = current_node.next
                    index++
                }
                previous_node.next = element
                element.prev = previous_node
                current_node.prev = element
                element.next = current_node
            }
        }
        this.length++
    }

    get(position) {
        if (position < 0 || position > this.length - 1) return new Error("position out of bounds")

        let current_node = this.head
        let index = 0
        while (index < position) {
            current_node = current_node.next
            index++
        }

        return current_node.data
    }

    index_of(data) {
        let current_node = this.head
        let index = 0
        while (current_node.next) {
            if (current_node.data === data) {
                return index
            }

            current_node = current_node.next
            index++
        }
        return 'this data is no found'
    }

    update(position, data) {
        if (position < 0 || position > this.length - 1) return null

        let index = 0
        let current_node = this.head
        while (index <= position) {
            if (index == position) {
                current_node.data = data
                break;
            }
            current_node = current_node.next
            index++
        }
    }

    remove_at(position) {
        if (position < 0 || position > this.length - 1) return null
        if (position === 0) {
            this.head = this.head.next
        } else if (position == this.length - 1) {
            this.tail.prev.next = null
            this.tail = this.tail.prev
        } else {
            let index = 0
            let previous_node = null
            let current_node = this.head
            while (index <= position) {
                if (index === position) {
                    previous_node.next = current_node.next
                    current_node.next = null
                    break
                }
                previous_node = current_node
                current_node = current_node.next
                index++
            }
        }
        this.length--
    }

    remove(data) {
        this.remove_at(this.index_of(data))
    }

    isEmpty() {
        return this.length == 0 ? true : false
    }

    size() {
        return this.length
    }

    to_serialize() {
        let arr_container = []
        let current_node = this.head
        while (current_node) {
            arr_container.push(current_node.data)
            current_node = current_node.next
        }
        return arr_container.join("") ? arr_container.join("->") : "[null]"
    }

    // 正向遍历，与上面的序列化一致
    forward_string() {
        this.to_serialize()
    }

    // 反向遍历，与上面的序列化相反
    backward_string() {
        let arr_container = []
        let current_node = this.tail
        while (current_node) {
            arr_container.push(current_node.data)
            current_node = current_node.prev
        }
        return arr_container.join("") ? arr_container.join("->") : "[null]"
    }
}

let dll = new DoublyLinkedList()
dll.append('a')
dll.append('b')
dll.append('c')
dll.append('d')
dll.append('e')
dll.append('f')
console.log(dll.to_serialize())
// console.log(dll)
console.log(dll.get(4))
dll.insert(1, "A")
dll.insert(7, "F")
dll.insert(5, "D")
console.log(dll.to_serialize())
console.log(dll.index_of("D"))
console.log(dll.backward_string())
dll.update(2, 'B')
console.log(dll.to_serialize())
console.log('-----------------------------------remove test----------------------------------------');
dll.remove_at(0)
console.log(dll.to_serialize())
dll.remove_at(2)
console.log(dll.to_serialize())
dll.remove_at(6)
console.log(dll.to_serialize())