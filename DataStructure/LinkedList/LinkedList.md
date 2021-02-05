# 链表(LinkedList)

> 具有以下特征，删除和插入的时间复杂度极低，为O(1)。

```javascript {.line-numbers}
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
            let currentNode = this.head
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = element
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
            let previous = null
            let current = this.head
            while (index < position) {
                previous = current
                current = current.next
                index++
            }
            element.next = current
            previous.next = element
        }

        this.length++
        return `success`
    }

    get(position) {
        if (position < 0 || position > this.length - 1) return null
        let current = this.head
        let index = 0
        while (index < position) {
            current = current.next
            index++
        }
        return current.val
    }

    index_of(data) {
        let current = this.head
        let index = 0
        while (current) {
            if (current.val == data) {
                return index
            }
            current = current.next
            index++
        }
        return new Error('this val not found')
    }

    // ! 个人理解为替换
    update(data, position) {
        if (position < 0 || position > this.length - 1) return

        let index = 0
        let current = this.head
        while (current) {
            if (index == position) {
                current.val = data
                break
            }
            current = current.next
            index++
        }
    }


    remove_at(position) {
        if (position < 0 || position > this.length - 1) return null
        let index = 0
        let previous = null
        let current = this.head
        while (current) {
            if (index == position) {
                previous.next = current.next
                current.next = null
                break
            }

            previous = current
            current = current.next
            index++
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
        let current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
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
```

# 双向链表(Doubly LinkedList)

>   既有普通链表的特征，同时还能降低取值的时间复杂度，只需要在普通链表的基础上添加`previous`指针即可。
>   		使用场景：可以使用在文本的信息的存储结构，一行为一个**链表节点**，光标返回上一行时使用，`prev`指针即可，而单向链表只能痛苦的重新遍历。


```javascript {.line-numbers}

```
