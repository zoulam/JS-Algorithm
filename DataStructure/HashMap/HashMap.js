class HashMap {

    // count / limit = load_factor
    container = [] // storage
    count = 0 // 已经存放的数据个数，当到达临界值时就可以扩容
    limit = 7// 数组初始化空间,数组的长度是一个质数，有利于元素均匀分布

    /**
     *
     * @param {*} str
     * @param {*} size
     * @description
     * 下面的操作是为了生成一个经历无重复的index，方式是变大在对容量取模，
     * 为什么是37，因为需要选择一个较大的质数即可
     */
    hash_func(str, size) {
        let hash_code = 0
        for (let i = 0; i < str.length; i++) {
            hash_code = hash_code * 37 + str.charCodeAt(i)
        }
        let index = hash_code % size
        // console.log(str, "-----------------------", index)
        return index
    }


    /**
     *
     * @param {*} key
     * @param {*} value
     * @description 添加元素，视情况扩容
     */
    put(key, value) {
        let index = this.hash_func(key, this.limit)
        let bucket = this.container[index]
        // 创建字数组容器
        if (!bucket) {
            bucket = []
            this.container[index] = bucket
        }
        // tuple 存放数据的元组
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            // 修改操作
            if (tuple[0] == key) {
                tuple[1] = value
                return
            }
        }
        //添加
        bucket.push([key, value]);
        this.count++

        // 判断是否需要扩容
        if (this.count / this.limit > 0.75) {
            let newSize = this.limit * 2;
            console.log('--------------------', newSize)
            let newPrime = this.get_prime_num(newSize)
            console.log('--------------------', newPrime)
            this.resize(newPrime)
        }

    }


    get(key) {
        let index = this.hash_func(key, this.limit);
        let bucket = this.container[index]
        if (bucket == null) return null
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            if (key == tuple[0]) return tuple[1]
        }
        return null
    }


    /**
     *
     * @param {*} key
     * @description 删除元素，视情况缩小容量
     */
    remove(key) {
        let index = this.hash_func(key, this.limit)
        let bucket = this.container[index]
        if (bucket == null) return '============this value not found============'
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            if (key == tuple[0]) {
                bucket.splice(i, 1)// 该元素被删除
                this.count--
                return true
            }
        }
        // 缩小容量
        if (this.limit > 7 && this.count < this.limit * 0.25) {
            let newSize = Math.floor(this.limit / 2)
            let newPrime = getPrimeNum(newSize)
            this.resize(newPrime)
        }
        return null
    }

    isEmpty() {
        return this.count == 0
    }

    size() {
        return this.count
    }

    // loaderFactor 负载因子（是元素个数和hashmap中的一维数组的比值）
    // 扩容之后的所有元素需要重新插入（所以扩容是需要消耗大量内存的）
    // 在Java中的负载因子大于0.75时就进行扩容
    resize(newLimit) {
        let old_contanier = this.container

        this.container = []
        this.count = 0
        this.limit = newLimit


        for (let i = 0; i < old_contanier.length; i++) {
            let bucket = old_contanier[i]
            if (bucket == null) {
                continue
            }
            for (let j = 0; j < bucket.length; j++) {
                let tuple = bucket[j]
                this.put(tuple[0], tuple[1])
            }
        }
    }

    /**
     *
     * @param {*} num
     * @description 判断是否是质数
     */
    is_prime_num(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }

    /**
     *
     * @param {*} num
     * @description 找到最小的 大于 newLimit 且是 质数的值，14 -> 17
     */
    get_prime_num(num) {
        while (!this.is_prime_num(num)) {
            num++;
        }
        return num;
    }

}

let ht = new HashMap();
ht.put('aac', 12)
ht.put('aaa', 13)
ht.put('aab', 14)
console.log(ht.get('aaa'));
ht.put('aaa', 20)
console.log(ht.get('aaa'));
ht.remove('aac')
console.log(ht.get('aac'));
ht.put('name', 'lala')
ht.put('age', 20)
ht.put('lala', { name: 'lala', age: 18 })
ht.put('test', 'erer')
console.log('---------------------------------------------------------------------------');
console.log(ht)

