// ! 此封装无任何意义
class MySet {
    items = {}

    add(val) {
        // 判断重复
        if (this.has(val)) {
            return false
        }
        this.items[val] = val;
        return true
    }

    remove(val) {
        if (this.has(val)) {
            //    return new Error('don\'t have this value')
            console.log('don\'t have this value')
            return false
        }
        delete this.items[val];
        return true
    }

    has(val) {
        return this.items.hasOwnProperty(val)
    }

    clear() {
        this.items = {}
    }

    size() {
        return Object.keys(this.items).length
    }

    /**
     * @description 序列化成数组
     */
    values() {
        return Object.values(this.items)
    }

    // 1、求交集（公共部分）、
    inter_section(otherSet) {
        let temp_set = new MySet()
        let items = this.values()
        for (let i = 0; i < this.size(); i++) {
            if (otherSet.has(items[i])) {
                temp_set.add(items[i])
            }
        }
        return temp_set
    }

    // 2、并集（两个元素的所有元素）
    union(otherSet) {
        var uionSet = new MySet()
        let values = this.values()
        for (let i = 0; i < this.size(); i++) {
            uionSet.add(values[i])
        }
        values = otherSet.values()
        for (let i = 0; i < otherSet.size(); i++) {
            uionSet.add(values[i])
        }
        return uionSet
    }

    // 3、差集（仅包含在单独的集合中，即可能有两个解）
    difference_set(otherSet) {
        let items = this.values()
        let temp_set = new MySet()
        for (let i = 0; i < this.size(); i++) {
            if (!otherSet.has(items[i])) {
                temp_set.add(items[i])
            }
        }
        return temp_set
    }

    // 4、子集（属于验证）
    subset(otherSet) {
        let values = this.values()
        for (let i = 0; i < this.size(); i++) {
            let item = values[i]
            if (!otherSet.has(item)) {
                return false
            }
        }
        return true
    }
}

let set1 = new MySet()
set1.add('a')
set1.add('b')
set1.add('c')
set1.add('d')
set1.add('e')
set1.add('e')
console.log(set1.size())
console.log(set1.values())
let set2 = new MySet()
set2.add('a')
set2.add('b')
set2.add('c')
set2.add('h')
set2.add('f')
console.log(set2.values())
console.log('-----------------------------------并集----------------------------------------');
console.log(set1.union(set2))
console.log('-----------------------------------交集----------------------------------------');
console.log(set1.inter_section(set2))
console.log('-----------------------------------差集----------------------------------------');
console.log(set1.difference_set(set2))// !此处获取set1独有的元素
console.log('-----------------------------------子集----------------------------------------');
console.log(set1.subset(set2))