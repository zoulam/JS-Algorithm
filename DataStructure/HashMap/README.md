# ① 哈希表的优势

> 哈希表可以**简单的理解**为在数组上挖了很多洞（导致占用额外内存），增删查改基本都是 O(1)

|      | 数组                           | 哈希表                                      |
| ---- | ------------------------------ | ------------------------------------------- |
| 增   | 尾插 O(1)，其他 O(n)           |                                             |
| 删   | 尾部删除 O(1),其他 O(n)        |                                             |
| 改   | 基于下标 O(1)，基于元素值 O(n) |                                             |
| 查   | 同上                           |                                             |
| 缺陷 |                                | 1、需要额外内存空间，2、无序，3、key 值唯一 |

# ② 使用场景

> 1、存储员工、学生……的信息
>
> 2、存储单词表

# ③ 如何实现单词存储

## 字符编码

[参考文章：字符编码发展史](https://zhuanlan.zhihu.com/p/142646606)

> `ebcdic` IBM【1964 年】公司推出的：不连续的字母编码方式
>
> `ASCII` 【American Standard Code for Information Interchange】只能表示（英文）字母 数字 和符号（新一代的字符编码方式基本都是 `ASCII`编码的**超集**）
>
> [wiki 百科](https://zh.wikipedia.org/wiki/ASCII)
>
> 48 是字符 0，65 是大写 A，97 是小写 a
>
> `ISO-8859-1` 欧洲国家的编码
>
> `GB2312` （第一代中文编码）`GBK`（生僻字） `GB18030`(完整的中文字符)
>
> `Unicode（最少两个字节）`（万国码，下面是三者的常见实现）
>
> [Unicode 编码及 UTF-32, UTF-16 和 UTF-8](https://zhuanlan.zhihu.com/p/51202412)
>
> UTF-8 （`最火爆，最常见。`）
>
> 优化了 unicode 编码方式，**不再**全部使用**最少使用**2 字节保存。ASCII 码中的内容用 1 个字节保存、欧洲的字符用 2 个字节保存，东亚的字符用 3 个字节保存……
>
> UTF-16
>
> UTF-32

## 编码方式

> 1、将字母转化为数组 0 是空格，1-26 分别是 a 到 z（**编码不唯一**）
>
> 缺点：计算出来的编码大量重复
>
> `cats` 3 + 1 + 20 + 19 = 43
>
> `was` 23 + 1 + 19 = 43
>
> 2、幂的连乘（**保证唯一性，又过度占用内存空间**）
>
> `cats`
>
> `3，1，20，19`
>
> `3 * 27^3 + 1 * 27^2 + 20 * 27 + 19` = **60337**
>
> 3、压缩方案二
>
> 3.1、取模

```javascript {.line-numbers}
// 方案2的实现
function hash(letter) {
  let code = 0;
  for (let i = 0; i < letter.length; i++) {
    code += (letter.charCodeAt(i) - 96) * 27 ** (letter.length - i - 1);
  }
  return code;
}
```

```javascript {.line-numbers}
function hash(letter) {
  let code = 0;
  for (let i = 0; i < letter.length; i++) {
    code += letter.charCodeAt(i) * 27 ** i;
  }
  return code;
}
```

## 哈希概念

![concept](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210127231736446.png)

# ④hash 冲突的解决

**上图中**所出现的重复问题就是所谓的哈希冲突。

## 1、链地址法

`Java`的`JDK`实现就是链地址法，小缺陷就是 **链条过长时**访问速度会变慢的问题

![link address](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/20160418101347575)

## 2、开放地址法

### 2.1 线性探测

> **线性探测** 出现哈希冲突时通过不断+1 的方式找到下一个空位（空白地址）填充
>
> 查找元素时遇到 `null`即视为元素不存在，返回`false`
>
> **问题**：元素聚集

![delete and performance](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210127233441625.png)

### 2.2 二次探测

> 修改线性探测的步长，避免低效的插入、查找和删除
>
> **新问题**：步长聚集

![new question](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210127233743505.png)

### 2.3 再哈希法

![rehash](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210127234226644.png)

## 3、两大方案的效率对比

> 填充因子，`load factor`

![compare](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210128151022081.png)

![effectiveness](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210128151352323.png)

![rehash](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210128151602322.png)

![link address](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210128151637705.png)

# ⑤ 实现

> 最终选择**链地址法实现**，基于数组或者链表实现。

    1、创建初始化空间大小
    2、元素占据一定比例后扩容

## 1、高效获取 hash

![more performance](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210128152558150.png)

**示例如下**

$$3 * 27 ^ 3 + 1 * 27 ^ 2 + 20 * 27 + 17$$

$$(((((3) * 27) + 1) * 27) + 20) * 27 + 17 $$

## 2、均匀分布

![nono](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210128153720997.png)

```JavaScript {.line-numbers}
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
```

## 3、hash表的长度（即下一次扩容的大小）

![length](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210128154017776.png)

## 4、Java的HashMap

![HashMap](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210128154126558.png)

**注：**JavaScript的位运算的十分低效（默认是数据类型是浮点型，需要一次转换之后才能进行位运算）