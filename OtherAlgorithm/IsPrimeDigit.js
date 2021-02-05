function is_prime_digit(num) {
    if (num <= 1) return false
    // 优化点在于减少for循环的次数，初次优化是除以二，进一步优化是开根号
    for (let i = 2; i < Math.floor(Math.sqrt(num)); i++) {
        if (num % i == 0) return false
    }
    return true
}

console.log(is_prime_digit(3))
console.log(is_prime_digit(100))