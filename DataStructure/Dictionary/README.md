> 字典数据结构是**通常**基于hashtable实现,`JS`常用 `Map`类作为代替。`Java`中的集合是基于字典`(HashMap)`实现的。
> 基本特征：
>       1、key value 的格式
>       2、key **不可重复**且**无序**，value则可以重复

**注：** 字典和映射非常相似，使用上几乎没有区别,只是实现的方式不同会有不同情况下的选择（即性能优势，线程安全等考虑）。各个语言的叫法不同：**Swift** 的 **Dictonary**，**Python** 的 **dict**，**Java** 的 **HashMap** & **TreeMap**, **JavaScript** 的 **Map**。

> Java的对象是编译期就确定的结构，不可以动态的添加和删除属性，而字典(`HashMap`)可以。

## JS的Object和Map的区别

![from PJFWD](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210126211052427.png)

总结如下：1、除了初始化之外对象几乎没有任何性能优势

​					2、对象的强大之处应该是元编程的特点