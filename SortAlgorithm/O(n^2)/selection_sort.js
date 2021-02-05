// 改进了冒泡排序，降低了交换次数，但是比较次数依旧是 O(n^2)
// 获取到最小值在进行交换，而不像冒泡排序比对一次就交换一次
let nums = [4, 5, 7, 9, 1, 10, 2, 8, 3, 6];
function selection_sort(numbers) {
    for (let j = 0; j < nums.length - 1; j++) {
        let min = j
        for (let i = min + 1; i < nums.length; i++) {
            if (nums[min] > nums[i]) min = i
        }
        [nums[j], nums[min]] = [nums[min], nums[j]]
    }
    return numbers
}

console.log(selection_sort(nums))


