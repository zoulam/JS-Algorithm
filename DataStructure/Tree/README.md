> 树（与真实的树相反，头在下根在上的形状）。

# 问题初见：

## 1、（子）节点过多的多叉树无法用固定的代码生成

 <img src="https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210128225917513.png" alt="promble" style="zoom:50%;" />

 解决：抽象成两根（指针），**左指针连儿子，右指针连兄弟**

 <img src="https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210128230007850.png" alt="abstract" style="zoom:50%;" />

 <img src="https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210128230221891.png" alt="binary tree" style="zoom:50%;" />

## 2、二叉树的可能两边十分不平衡（左侧很多节点）

解决：所以需要引入平衡树，其中较为常见的就是： **AVL 树**，**红黑树**其中 **AVL 树**的插入删除效率不如红黑树

# 术语讲解：

 节点数为 0 **空树**

 最顶层的节点： **根节点（root）**

 **子树（subTree）**，相对父节而言的下方树节点的集合

 **叶子节点（leaf）**是指没有子节点的节点

![tree concept](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210128225447739.png)

# 场景

> 常见的树结构关系：
>
> 前端的 `DOM`结构，
>
> 公司的组织架构，
>
> 家谱结构（hash 等前面的数据结构的数据之间是没有关系的，而树结构是有**“父子”关系**）
>
> 文件夹（目录/子目录）结构

# 二叉树

## 二叉树的特点

![trait](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210129213759017.png)

## 特殊二叉树

1、完美二叉树（perfect binary tree）或者说是满二叉树（full binary tree）

> 除了叶子节点外都包含两个子节点

2、完全二叉树（complete binary tree） **注：**下图中的 D 缺少右子节点导致不连续，即不是完全二叉树

<img src="https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210129214304300.png" alt="complete binary tree" style="zoom:50%;" />

## 二叉树的存储问题

> 下方的使用数组存储，取出左节点（**父节点下标\*2**）取出右节点（**父节点下标\*2+1**）

![storage](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210129214504854.png)

![linkedlist storage](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210129214746287.png)

## 什么是二叉搜索树

> 一种特殊的二叉树，比起普通二叉树有着更加高效的访问效率，访问节点的时间复杂度为 `O(logn)`。
>
>  获取最值的方式，遍历到最右|最左的叶子节点即可

特征如下（左小右大）

![trait](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210129215107403.png)

## **实现二叉搜索树**

```javascript {.line-numbers}
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
```

### 插入节点的实现

```javascript
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

```

### 删除节点实现

>  1、获取该数据存放的节点（同时判断出是左节点还是右节点），及其父节点。
>
>  ​		2、删除指定节点（都必须考虑删除的是 `root`节点的问题 ）
>
>  ​				2.1、节点为叶子节点（即 `node.left` 和  `node.right` 都是 `null`），直接删除。
>
>  ​				2.2、删除的节点只有一个子节点（即 `node.left` 或者 `node.right` 为 `null`），将该节点的指定一侧移动到父节点。
>
>  ​				2.3、删除的节点有两个子节点具体操作可以去 [getSuccessor.getSuccessor.ppt](getSuccessor.ppt)查看

````javascript
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
            successor.left = current.left
        }
    }

/**
 * 
 * @param {*} node 
 * @description 找出节点的后继，用于删除操作
 */
getSuccessor(node) {
    let successor = node
    let current = node.right
    let successorParent = node

    while (current != null) {
        successorParent = successor
        successor = current
        current = current.left
    }
    // 后继不是被删除节点的右节点
    if (successor != node.right) {
        successorParent.left = successor.right
        successor.right = node.right
    }
    return successor;
}
```
# 红黑树

>  实现：
>
> ​		变色：
>
> ​		左旋转：
>
> ​		右旋转：

```javascript

```

