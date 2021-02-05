let count = 1
function fn() {
    if (count == 4) return null
    console.log(`before: ${count}`)
    let current_count = count
    console.log(`fn${count++}`)
    fn()
    console.log(`after: ${current_count}`)
}

fn()