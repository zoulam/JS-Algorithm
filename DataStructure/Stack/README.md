> 栈结构是一种**先进后出**的数据结构。
>
> 1、常用编程语言中的 `primitive`原始数据类型的内存结构；
>
> 2、也通常被用在对递归的优化。

## JS 中的栈

> JS 的栈是使用数组方法， `push`和 `pop`

## 栈的练习

1、判断不合法的入栈结,进栈顺序 654321

<details>
<summary>答案</summary>
    C
</details>

A、543612 B、453216 C、346521 D、234156

![stack_answer](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/stack_answer.jpg)

2、十进制转化为二进制

```javascript  {.line-numbers}
function decimal_to_binary(target) {
    let stack = []
    while (target) {
        stack.push(target % 2)
        target = Math.floor(target / 2)
    }


    // !基本做法
    // return stack.reverse().join("")


    // ! 强行用栈
    let ans = ''
    while (stack.length) {
        ans += stack.pop()
    }
    return ans
}

console.log(decimal_to_binary(100))
console.log(decimal_to_binary(8))
console.log(decimal_to_binary(3))
```

# 栈在递归中的使用