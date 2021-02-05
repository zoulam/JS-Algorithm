class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}


class BinarySearchTree {
    root = null

    insert(data) {
        let element = new Node(data)
        if (this.root == null) {
            this.root = element
        } else {
            this.insertNode(this.root, element)
        }
    }

    insertNode(node, newNode) {
        // 小就往左插入，然后递归执行
        if (newNode.data < node.data) {
            if (node.left == null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
            // 大就向右插入，然后递归执行
        } else {
            if (node.right == null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }


    // 前序遍历的简写，拆分handler了是为了能够方便的自定义打印格式
    prev() {
        let ans = []
        let getValue = (node) => {
            if (node != null) {
                ans.push(node.data)
                getValue(node.left)
                getValue(node.right)
            }
        }
        getValue(this.root)
        return ans
    }


    /**
     *
     * @param {*} handler
     * @description 前序遍历递归
     */
    prevOrderTraversal(handler) {
        this.prevOrderTraversalNode(this.root, handler)
    }

    prevOrderTraversalNode(node, handler) {
        if (node != null) {
            // 只要是非空节点就继续处理，然后处理左节点，最后处理右节点
            // 处理经过的节点
            handler(node.data)
            // 处理经过的左节点
            this.prevOrderTraversalNode(node.left, handler)
            // 处理经过的右节点
            this.prevOrderTraversalNode(node.right, handler)
        }
    }

    /**
     *
     * @param {*} handler
     * @description 中序遍历递归
     */
    midOrderTraversal(handler) {
        this.midOrderTraversalNode(this.root, handler)
    }

    midOrderTraversalNode(node, handler) {
        if (node != null) {
            // 直到找到最根部左子树，才第一次执行handler
            this.midOrderTraversalNode(node.left, handler)
            // A B D（node.left == null） 终止递归
            // 处理经过的节点
            handler(node.data)// D
            // 处理经过的右节点
            this.midOrderTraversalNode(node.right, handler)
        }
    }

    /**
     *
     * @param {*} handler
     * @description 后续遍历递归
     */
    backOrderTraversal(handler) {
        this.backOrderTraversalNode(this.root, handler)
    }

    backOrderTraversalNode(node, handler) {
        if (node != null) {
            this.backOrderTraversalNode(node.left, handler)
            this.backOrderTraversalNode(node.right, handler)
            handler(node.data);
        }
    }

    /**
     * @description 非递归版本的前序遍历
     */
    prev_order_traversal() {
        if (!this.root) return []
        let stack = [this.root]
        let ans = []
        while (stack.length > 0) {
            let node = stack.pop()
            ans.push(node.data)
            node.right && stack.push(node.right)
            node.left && stack.push(node.left)
        }
        return ans
    }

    /**
     * @description 非递归版本的中序遍历
     */
    in_order_traversal() {
        if (!this.root) return []
        let ans = []
        let stack = []
        let temp_root = this.root
        while (temp_root) {
            stack.push(temp_root)
            temp_root = temp_root.left
        }

        while (stack.length > 0) {
            let node = stack.pop()
            ans.push(node.data)
            node = node.right
            while (node) {
                stack.push(node)
                node = node.left
            }
        }
        return ans
    }

    /**
     * @description 非递归版本的后序遍历
     */
    post_order_traversal() {
        if (!this.root) return []
        let stack = [this.root]
        let ans = []
        while (stack.length > 0) {
            let node = stack.pop()
            ans.unshift(node.data)
            node.right && stack.push(node.right)
            node.left && stack.push(node.left)
        }
        return ans
    }

    /**
     * @description 非递归层序遍历
     */
    level_traversal() {
        if (!this.root) return []
        let stack = [this.root]
        let ans = []
        while (stack.length > 0) {
            let node = stack.pop()
            ans.push(node.data)
            node.left && stack.unshift(node.left)
            node.right && stack.unshift(node.right)
        }
        return ans
    }

    min() {
        if (this.root.left == null) return this.root.data
        let cur = this.root.left
        while (cur.left) {
            cur = cur.left
        }
        return cur.data
    }


    max() {
        if (this.root.right == null) return this.root.data
        let cur = this.root.right
        while (cur.right) {
            cur = cur.right
        }
        return cur.data
    }


    search(data) {
        let node = this.root
        while (node != null) {
            if (node.data > data) {
                node = node.left
            } else if (node.data < data) {
                node = node.right
            } else {
                return true
            }
        }
        return false
    }


    remove(data) {
        // 获取节点
        let current = this.root
        let parent = null
        let isLeftChildren = true
        while (current.data != data) {
            parent = current
            if (current.data > data) {
                current = current.left
            } else if (current.data < data) {
                current = current.right
                isLeftChildren = false
            }
            // 没有找到
            if (current == null) return `this ${data} is no found`
        }

        // 删除节点
        // 删除的节点是叶子节点
        if (current.left == null && current.right == null) {
            if (current == this.root) {
                this.root = null
            } else if (isLeftChildren) {
                parent.left = null
            } else {
                parent.right = null
            }
        }

        // 删除的节点只有一个子节点
        else if (current.right == null) {
            if (current == this.root) {
                this.root = current.left
            } else if (isLeftChildren) {
                parent.left = current.left
            } else {
                parent.right = current.left
            }
        } else if (current.left == null) {
            if (current == this.root) {
                this.root = current.right
            } else if (isLeftChildren) {
                parent.left = current.right
            } else {
                parent.right = current.right
            }
        }

        // 删除的节点有两个子节点
        else {
            let successor = this.getSuccessor(current)
            if (current == this.root) {
                this.root = current.right
                // 后继
            } else if (isLeftChildren) {
                parent.left = successor
            } else {
                parent.right = successor
            }
            // 将被删除节点的左节点移动到后继节点的左侧
            // ppt中的 3、4页8移动到10的左节点
            successor.left = current.left
        }
    }


    /**
     *
     * @param {*} del_node
     * @description 找出节点的后继，用于删除操作
     */
    getSuccessor(del_node) {
        let successor = del_node
        let current = del_node.right
        let successorParent = del_node

        while (current != null) {
            successorParent = successor
            successor = current
            current = current.left
        }
        // 判断后继节点是否直接就是del_node的右节点
        if (successor != del_node.right) {
            // 示例ppt的11，12页操作
            // 19移动到20的左节点
            successorParent.left = successor.right
            // 将20挂载到后继18上面
            successor.right = del_node.right
        }
        return successor
    }
}

let bst = new BinarySearchTree()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(19)
console.log('-----------------------------------前序遍历----------------------------------------');
console.log(bst.prev_order_traversal())
console.log('-----------------------------------中序遍历----------------------------------------');
console.log(bst.in_order_traversal())
console.log('-----------------------------------后序遍历----------------------------------------');
console.log(bst.post_order_traversal())
console.log('-----------------------------------层序遍历----------------------------------------');
console.log(bst.level_traversal())
console.log('-----------------------------------递归版本的前序遍历----------------------------------------');
console.log(bst.prev())
console.log('-----------------------------------最小值----------------------------------------');
console.log(bst.min())
console.log('-----------------------------------最大值----------------------------------------');
console.log(bst.max())
console.log('-----------------------------------查找值是否存在----------------------------------------');
console.log(bst.search(26))
console.log('----------------删除节点(并且用层序遍历打印)在ppt的14到19页---------------------');
bst.remove(9)
console.log('删除节点：9')
console.log(bst.level_traversal())
console.log('删除节点：7')
bst.remove(7)
console.log(bst.level_traversal())
console.log('删除节点：15')
bst.remove(15)
console.log(bst.level_traversal())
console.log('-----------------------------------自定义格式递归版本的后续遍历----------------------------------------');
let resultString1 = ''
bst.backOrderTraversal((key) => {
    resultString1 += key + ' '
})
console.log(resultString1)


// 树的内容不是均匀分布（非平衡树），在极端情况下甚至会变成链表，效率会下降
// AVL树也是实现平衡树（但是插入删除的效率不如红黑树）
