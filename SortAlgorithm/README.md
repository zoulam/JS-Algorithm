​	不稳定：快选**堆**希

​	稳 定：插冒**归基**

>  当前原则：
>
> ​		数组长度小于10，使用插入排序
>
> ​		数组长度大于等于10，使用快速排序

| 排序法    | 平均时间复杂度 | 最差情形    | 稳定度 | 额外空间 | 备注               |
| --------- | -------------- | ----------- | ------ | -------- | ------------------ |
| 冒泡排序  | O(n2)          | O(n2)       | 稳定   | O(1)     | n小时较好          |
| 选择排序  | O(n2)          | O(n2)       | 不稳定 | O(1)     | n小时较好          |
| 插入排序  | O(n2)          | O(n2)       | 稳定   | O(1)     | 大部分已排序时较好 |
| Shell排序 | O(nlogn)       | O(ns) 1<s<2 | 不稳定 | O(1)     | s是所选分组        |
| 快速排序  | O(nlogn)       | O(n2)       | 不稳定 | O(nlogn) | n大时较好          |
| 归并排序  | O(nlogn)       | O(nlogn)    | 稳定   | O(1)     | n大时较好          |
| 堆排序    | O(nlogn)       | O(nlogn)    | 不稳定 | O(1)     | n大时较好          |
| 基数排序  |                |             |        |          |                    |
| 计数排序  |                |             |        |          |                    |

![shell sort](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210205154142833.png)

![shell sort realize](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210205154838012.png)

>  第一次交换
>
> 

![choose gap](https://zoulam-pic-repo.oss-cn-beijing.aliyuncs.com/img/image-20210205155352371.png)