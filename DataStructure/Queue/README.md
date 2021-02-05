>  队列是一种仿真的数据结构，故名思意：是模仿排队的一种数据结构即 **先进先出**
>
>  1、普通队列使用场景较少一般使用更多的是 `双端队列`、`优先级队列`
>
>  2、 `JS`的队列方法是 `push`, `shift`模拟

## 队列练习

1、击鼓传花

输入两个数据，1、环形数据，2、随机的数字（`x`）

​	在环上不断的走 `x`的步长，达到步长的元素离开环，直到环中只剩下一个元素，然后返回该元素的初始下标。

<details>
<summary>解题思路</summary>
    将环中的元素添加到队列中，不断的移动下标，不淘汰的就进入队列的尾部，淘汰的则离开队列。
</details>

```javascript {.line-numbers}
function drinking_game(name_list, num) {
    // ! 拷贝数组
    let nums = []
    for (let i = 0; i < name_list.length; i++) {
        nums.push(name_list[i])
    }

    let count = 1
    while (nums.length !== 1) {
        if (count == num) {
            nums.shift()
            count = 1
        } else {
            nums.push(nums.shift())
            count++
        }
    }
    return `剩下的玩家是：${nums[0]},他的原始下标是：${name_list.indexOf(nums[0]) + 1}`
}

let nums = ['a', 'b', 'c', 'd', 'e']
console.log(drinking_game(nums, 3)) // ! d 4
```

## 优先级队列

> ​	 队列元素包含两个结构 `数据` 和 `优先级`，**优先级的数字越小，优先级越高**。
>
> ​			使用场景
>
> ​						1、会员服务等等排队服务。
>
> ​						2、计算机中线程的优先级，优先完成优先级较高的线程任务

```javascript {.line-numbers}
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
```