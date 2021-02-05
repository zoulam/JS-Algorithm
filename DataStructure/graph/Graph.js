
class Graph {
    vertexes = [] // 顶点使用数组存储，
    edges = new Map()//  边则使用Map存储

    add_vertex(vertex) {
        this.vertexes.push(vertex)
        this.edges.set(vertex, [])
    }

    add_edge(vertex1, vertex2) {
        // 下面是无向图的实现
        this.edges.get(vertex1).push(vertex2)
        this.edges.get(vertex2).push(vertex1)
    }

    to_string() {
        let ans = ''
        for (let i = 0; i < this.vertexes.length; i++) {
            ans += this.vertexes[i] + ' -> '
            let edges = this.edges.get(this.vertexes[i])
            for (let edge of edges) {
                ans += edge
            }
            ans += '\n'
        }
        return ans
    }

    initialize_color() {
        let colors = []
        for (let i = 0; i < this.vertexes.length; i++) {
            colors[this.vertexes[i]] = 'white'
        }
        return colors
    }

    /**
     *
     * @param {*} start_vertex
     * @description
     * 先序遍历
     */
    DFS(start_vertex, colors, handler) {
        colors[start_vertex] = 'gray'
        handler(start_vertex)
        let vertex_list = this.edges.get(start_vertex)
        for (let adjacent_node of vertex_list) {
            if (colors[adjacent_node] == 'white') {
                this.DFS(adjacent_node, colors, handler)
            }
        }
        colors[start_vertex] = 'black'
    }

    /**
     * @description
     * 颜色标记，避免了元素重复进入队列
     * @param {*} start_vertex
     */
    BFS(start_vertex, handler) {
        let colors = this.initialize_color()
        let queue = [start_vertex]
        // 下面的注释仅表示第一次循环
        while (queue.length > 0) {
            let vertex = queue.shift()// 将A取出
            let vertex_list = this.edges.get(vertex)
            colors[vertex] = 'gray'
            for (let adjacent_node of vertex_list) {
                if (colors[adjacent_node] == 'white') {
                    colors[adjacent_node] = 'gray'
                    queue.push(adjacent_node)// 注入A的相邻节点BCD
                }
            }
            handler(vertex)
            colors[vertex] = 'black'
        }
    }
}

let g = new Graph()
g.add_vertex('A')
g.add_vertex('B')
g.add_vertex('C')
g.add_vertex('D')
g.add_vertex('E')
g.add_vertex('F')
g.add_vertex('G')
g.add_vertex('H')
g.add_vertex('I')
g.add_edge('A', 'B')
g.add_edge('A', 'C')
g.add_edge('A', 'D')
g.add_edge('C', 'D')
g.add_edge('C', 'G')
g.add_edge('D', 'G')
g.add_edge('D', 'H')
g.add_edge('B', 'E')
g.add_edge('B', 'F')
g.add_edge('E', 'I')

console.log(g.to_string())
console.log('-----------------------------------BFS测试--------------------------------------');
let result = ''
g.BFS(g.vertexes[0], vertex => {
    result += vertex + ' '
})

console.log(result)
console.log('-----------------------------------DFS测试----------------------------------------');
let dfs_result = ''
g.DFS(g.vertexes[0], g.initialize_color(), vertex => {
    dfs_result += vertex + ' '
})
console.log(dfs_result)