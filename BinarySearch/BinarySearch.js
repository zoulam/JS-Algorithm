let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function BinarySearch(arr, target) {
    let start = 0
    let end = arr.length - 1;
    while (start <= end) {
        // let mid = Math.floor((end + start) / 2)
        let mid = (end + start) >> 1
        if (arr[mid] < target) start = mid + 1
        else if (arr[mid] > target) end = mid - 1
        else if (arr[mid] == target) return `this value(${target}) in this arr`
        else return `${target} is not a digit, please input digit`
        // else return `this value(${target}) in this arr`
    }
    return `this value(${target}) no found in this arr`
}

console.log(BinarySearch(nums, 0))
console.log(BinarySearch(nums, 1))
console.log(BinarySearch(nums, 2))
console.log(BinarySearch(nums, 3))
console.log(BinarySearch(nums, 4))
console.log(BinarySearch(nums, 5))
console.log(BinarySearch(nums, 6))
console.log(BinarySearch(nums, 7))
console.log(BinarySearch(nums, 8))
console.log(BinarySearch(nums, 9))
console.log(BinarySearch(nums, 10))
console.log(BinarySearch(nums, 11))
console.log(BinarySearch(nums, 'fuck'))
console.log(BinarySearch(nums, 8))