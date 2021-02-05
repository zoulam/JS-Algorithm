# 图

>  图和是都是包含隐含关系的一种数据结构

<img src="https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210204204708937.png" alt="graph concept" style="zoom:67%;" />

# 使用场景

> 1、 用于描述人之间的关系（如：薄弱的微信好友关系
>
> 2、万维网关系
>
> 3、交通网络（地铁的最小路径）
>
> 4、村庄路径（与3类似）

# 经典问题

> 欧拉（7）桥问题（现代的一笔画问题）：
>
> ​		七条桥，四个点
>
> ​		结论：**奇点**（ `点连接的边数为奇数` ）的数目为`0`或者`2`才能一笔画完
>
> ​					即：1、全部都是偶点；
>
> ​							2、起点和终点是奇点

![](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210204210814860.png)

# 术语

>  `Vertex` 顶点（**顶点不是唯一**）
>
>  `Edge`边
>
>  `相邻顶点`：连接在同一条边上的顶点
>
>  `Degree`度（一个顶点与其他点相连的个数）
>
>  `路径`：
>
>  ​	简单路径：不经过重复的顶点
>
>  ​	回路：起点和终点是相同的顶点
>
>  `无向图`：不包含方向关系的边
>
>  `有向图`：可以是单向也可以是双向，即可以简单理解为**无向图**是特殊的**有向图**
>
>  `无权图`：（权：是**权重**）
>
>  ​	即默认每条边的长度是相等的
>
>  `带权图`：
>
>  ​	每条边（即路径）是有长度关系的
>
>  `自回路`：指可以从顶点本身出发可以不经过其他顶点直接回到顶点位置。
>
>  `出度`：顶点可以走向别的顶点的边数（无向图则入度和出度一致）
>
>  `入度`：别的顶点指向该顶点的边数

# 图的实现

>  邻接矩阵：
>
>  ​	![matrix](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210205131239239.png)
>
>  `A`和`BCD`有边，则指定位置的数组内容中存储1，如果是存储有权图就可以将指定的权值替换1。
>
>  缺陷：**稀疏图**，存在大量无用的0，消耗大量内存。
>
>  
>
>  邻接表：
>
>  ​	![](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210205131833025.png)
>
>  类似于hashtable的链地址法实现
>
>  ![](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210205132028865.png)
>
>  缺陷：难以计算**入度**的数量。

`for in` 和 `for of`的区别：上面一行是`for in` 下面是`for of`

![diff](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210205134834577.png)

# 深度优先遍历和广度优先遍历

![dfs bfs](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210205135719688.png)

> 广度优先遍历（**基于队列实现，如队列的顶点优先被搜索**）也被称为**层序遍历**
>
> ![bfs](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210205140942873.png)
>
> 深度优先遍历（一条路走到黑，基于**栈或者递归实现**，将顶点存入栈中，顶点是沿着路径访问的，存在新的相邻节点就去访问），与树的 **先序遍历**类似
>
> ![dfs](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210205143723691.png)
>
> 颜色标记法：
>
> ​	白色（初始颜色` `）：顶点未被访问；
>
> ​	灰色：顶点被访问但是相邻节点并未完全探索（访问完全）；
>
> ​	黑色：顶点被访问且相邻节点被完全探索。