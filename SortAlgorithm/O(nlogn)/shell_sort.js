// 希尔排序是插入排序的升级
// 此处的实现使用希尔的原稿选择间隔是 数组长度的1/2,为起始间隔
let nums = [4, 5, 7, 9, 1, 10, 2, 8, 3, 6];
function shell_sort(nums) {
    let gap = Math.floor(nums.length / 2)
    while (gap >= 1) {
        for (let i = gap; i < nums.length; i++) {
            let temp = nums[i]
            let j = i
            // i是每轮循环的+1，j是暂存的i
            // 因为后续要对j进行使用所以需要拷贝一份避免干扰
            while (nums[j - gap] > temp && j - gap >= 0) {
                nums[j] = nums[j - gap]// 后面的被替换
                j -= gap
            }
            nums[j] = temp // 此时的j被移动到了前面的位置，前面的被替换
        }
        gap = Math.floor(gap / 2)
    }
    return nums
}

console.log(shell_sort(nums))





let fuck = [4, 5, 7, 9, 1, 10, 2, 8, 3, 6];
function my_shell_sort(nums) {
    let gap = nums.length >> 1
    while (gap >= 1) {
        // 这一步又对半分了
        for (let i = gap; i < nums.length; i++) {
            let temp = nums[i]
            let j = i
            while (temp < nums[j - gap] && j - gap >= 0) {
                nums[j] = nums[j - gap]
                j -= gap
            }
            nums[j] = temp
        }
        gap = gap >> 1
    }
}

my_shell_sort(fuck)
console.log(fuck)