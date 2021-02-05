let nums = [4, 5, 7, 9, 1, 10, 2, 8, 3, 6];
function bubblesort(numbers) {
    let len = numbers.length
    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            if (numbers[i] > numbers[j]) {
                let temp = numbers[i]
                numbers[i] = numbers[j]
                numbers[j] = temp
            }
        }
    }
    return numbers
}

console.log(bubblesort(nums))

