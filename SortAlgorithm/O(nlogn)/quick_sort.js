let nums = [4, 5, 7, 9, 1, 10, 2, 8, 3, 6];
let nums1 = [4, 5, 7, 9, 1, 10, 2, 8, 3, 6];
let nums2 = [4, 5, 7, 9, 1, 10, 2, 8, 3, 6];



function quick_sort(s, l = 0, r) {
    r = r == undefined ? r = s.length - 1 : r
    if (l < r) {
        let i = l, j = r, pivot = s[l];
        // 交换原则(升序)，左侧大于基准，且右侧小于基准
        while (i < j) {
            // i<j的条件不可以省略，不然会影响结果
            while (i < j && s[j] >= pivot) { j-- }
            if (i < j)
                s[i++] = s[j];
            while (i < j && s[i] < pivot) { i++ }
            if (i < j)
                s[j--] = s[i];
        }
        // 将原来取出的空位放回
        s[i] = pivot
        // 数组的左侧区间排序，数组的右侧区间排序
        quick_sort(s, l, i - 1)
        quick_sort(s, i + 1, r)
    }
}



function FunctionalQuick_Sort(arr) {
    var pivot = arr[0]
    var lower = arr.filter((x) => { return x < pivot })
    if (!lower.length) lower = FunctionalQuick_Sort(lower)
    var higher = arr.filter((x) => { return x > pivot })
    if (!higher.length) higher = FunctionalQuick_Sort(higher)
    return lower.concat(pivot, higher)
}



let quickSort = (arr) =>
    arr.length <= 1 ? arr : quickSort(arr.filter(x => x < arr[0]))
        .concat(arr[0], quickSort(arr.filter(x => x > arr[0])))


let ans = FunctionalQuick_Sort(nums)
let ans1 = quickSort(nums1)
quick_sort(nums2)
console.log(ans)
console.log(ans1)
console.log(nums2)