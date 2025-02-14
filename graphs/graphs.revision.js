class Graphs{
    constructor(){
        this.vertices = []
        this.totalVertex = 0
    }
    addVertex(node){
        this.vertices[node] = []
        this.totalVertex ++
    }
    addEdges(node1, node2){
        this.vertices[node1].push(node2)
        this.vertices[node2].push(node1)
    }
}


function bfs(graph){
    let queue = []
    seen = [],
    results =[]
    queue.push(0)

    while( 0 < queue){
        const vertex = queue.shift()
        seen[vertex] = true
        results.push(vertex)
        const connections = graph[vertex]

        for(let node of connections){
            if(seen[node]){
                queue.push()
            }
        }

    }
}

function dfs(graph,vertex,  seen, results){
    seen[vertex] = true
    results.push(vertex)
    const connections = graph[vertex]
    for(let node of connections){
        if(seen[node]){
            dfs(graph,node, seen , results)
        }
    }
}