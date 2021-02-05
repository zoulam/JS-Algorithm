// 插入排序是希尔排序和快速排序的的基础
// 我们可以理解为是扑克牌的一种排序算法



// 比起冒泡排序可以比较较少的元素，在元素十分有序的情况下十分高效

// 比起选择排序比较次数也下降了

// 默认第一个元素是有序的
// 12356  4 798
// 将 4 插入到 12356中
// 123456 798
let nums = [4, 5, 7, 9, 1, 10, 2, 8, 3, 6];

function insertion_sort(numbers) {
    for (let i = 1; i < numbers.length; i++) {
        let temp = numbers[i]
        let j = i
        while (numbers[j - 1] > temp && j > 0) {
            numbers[j] = numbers[j - 1]
            j--
        }
        numbers[j] = temp
    }
    return numbers
}

console.log(insertion_sort(nums))