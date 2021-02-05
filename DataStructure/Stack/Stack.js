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