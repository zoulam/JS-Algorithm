# 如何看懂递归

```rust {.line-numbers}
// 递归的结构
fn 函数(){
    1、递归终止条件（必须结构）
    2、递归前处理（before）(非必须)
    3、递归fn
    4、递归后处理（after）(非必须)
}
```

我们将启动函数称为`fn`第一层的递归函数添上`下标1`,此后的`+1`,同时假设函数在第三层结束

<details>
<summary>执行顺序</summary>
before: 1
fn1
before: 2
fn2
before: 3
fn3
after: 3
after: 2
after: 1
</details>

```javascript {.line-numbers}
let count = 1
function fn() {
    if (count == 4) return null
    console.log(`before: ${count}`)
    let current_count = count
    console.log(`fn${count++}`)
    fn()
    console.log(`after: ${current_count}`)
}

fn()
```
