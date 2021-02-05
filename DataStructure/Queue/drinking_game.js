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