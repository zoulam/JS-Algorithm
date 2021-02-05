//
let nums = [4, 5, 7, 9, 1, 10, 2, 8, 3, 6];
nums.sort((a, b) => a - b)
console.log(nums)
console.log('-----------------------------------sort----------------------------------------');
let nums1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nums1.push(11, 12)
console.log(nums1)
console.log('-----------------------------------push----------------------------------------');
nums1.unshift(-2, -1)
console.log(nums1)
console.log('-----------------------------------unshift----------------------------------------');
nums1.pop()
console.log(nums1)
console.log('-----------------------------------pop----------------------------------------');
nums1.shift()
console.log(nums1)
console.log('-----------------------------------shift----------------------------------------');

let nums2 = [2, 3]
let nums3 = [0, 1]
let ans = nums3.concat(nums2)
console.log(ans)
console.log(nums2, nums3)
console.log('-----------------------------------concat----------------------------------------');

let nums4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nums4.forEach(item => {
    console.log(item)
    return item++ // 返回值是无效的，永远是undefined
});
console.log(nums4) // nums4 没有发生变化
console.log('-----------------------------------foreach----------------------------------------');

let nums5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = nums5.map(item => {
    return item + 1
})
console.log(res)

console.log('-----------------------------------exchange----------------------------------------');
let arr = [1, 3, 2];// 这里的分号少了会出错
[arr[1], arr[2]] = [arr[2], arr[1]]
console.log(arr)


console.log('-----------------------------------split----------------------------------------');
let arr1 = ['i','love','this','world']
let str = arr1.join(' ')
console.log(str)
