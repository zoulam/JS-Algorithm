> 集合是一个数学概念，`ES6`依旧原始实现，常用于两个数据组之间的关系。
> 交集，并集，差集(指两个集合的特有部分，即有两种情况)，子集（返回`bool`）
> 在实际开发中通常用于数组的去重

```javascript {.line-numbers}
let nums = [1, 2, 3, 6, 9, 4, 5, 6, 7, 7, '3']

let res = [...new Set(nums)]
console.log(res)
console.log(Object.prototype.toString.call(res))
```