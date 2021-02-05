class Node {
    constructor(data) {
        this.val = data
        this.next = null
    }
}

class LinkedList {
    head = null
    length = 0

    // ! append 就是尾部插入，需要考虑两种情况，即头节点是否为空即可
    append(data) {
        let element = new Node(data)

        if (!this.head) {
            this.head = element
        } else {
            let current_node = this.head
            while (current_node.next) {
                current_node = current_node.next
            }
            current_node.next = element
        }
        this.length++
    }

    // ! 需要考虑是否为头部插入
    insert(data, position) {
        if (position < 0 || position > this.length)
            throw new Error(`please input correct <position> range 0 to ${this.length}`);

        let element = new Node(data)
        if (position === 0) {
            element.next = this.head
            this.head = element
        } else {
            let index = 0
            let previous_node = null
            let current_node = this.head
            while (index < position) {
                previous_node = current_node
                current_node = current_node.next
                index++
            }
            element.next = current_node
            previous_node.next = element
        }

        this.length++
        return `success`
    }

    get(position) {
        if (position < 0 || position > this.length - 1) return null
        let current_node = this.head
        let index = 0
        while (index < position) {
            current_node = current_node.next
            index++
        }
        return current_node.val
    }

    index_of(data) {
        let current_node = this.head
        let index = 0
        while (current_node) {
            if (current_node.val == data) {
                return index
            }
            current_node = current_node.next
            index++
        }
        return new Error('this val not found')
    }

    // ! 个人理解为替换
    update(data, position) {
        if (position < 0 || position > this.length - 1) return

        let index = 0
        let current_node = this.head
        while (current_node) {
            if (index == position) {
                current_node.val = data
                break
            }
            current_node = current_node.next
            index++
        }
    }


    remove_at(position) {
        if (position < 0 || position > this.length - 1) return null

        if (index == 0) {
            this.head = this.head.next
        } else {
            let index = 0
            let previous_node = null
            let current_node = this.head
            while (current_node) {
                if (index == position) {
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
        let position = this.index_of(data)
        this.remove_at(position)
    }

    // !这个函数是有必要的，相当于是手动释放内存
    remove_all() {
        this.head = null
    }

    // ! 在java中是理解是不可直接获取值，强调面向对象
    size() {
        return this.length
    }

    to_serialize() {
        let arr = []
        let current_node = this.head
        while (current_node) {
            arr.push(current_node.val)
            current_node = current_node.next
        }
        return arr.join('->') ? arr.join('->') : '[null]'
    }
}

let ll = new LinkedList()
ll.append('a')
ll.append('b')
ll.append('d')
ll.append('e')
ll.append('f')
console.log(ll.to_serialize())
ll.insert('c', 3)
console.log(ll.to_serialize())
ll.insert('0', 0)
console.log(ll.to_serialize())
console.log(ll.index_of('a'))
console.log(ll.index_of('f'))
// console.log(ll.index_of('z'))
console.log(ll.get(3))
ll.update('zero', 0)
console.log(ll.to_serialize())
ll.update('A', 1)
console.log(ll.to_serialize())
ll.remove_at(3)
console.log(ll.to_serialize())
ll.remove('c')
console.log(ll.to_serialize())
console.log(ll.size())
ll.remove_all()
console.log(ll.to_serialize())