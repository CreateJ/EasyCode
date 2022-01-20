// 将列表转换为树
const listToTree = (list) => {
  const map = {}
  let node
  const tree = []
  let i
  for (i = 0; i < list.length; i++) {
    map[list[i].id] = list[i]
  }
  for (let i = 0; i < list.length; i += 1) {
    node = list[i]
    // 注意这里判断第一级的pid是什么
    if (node.pid !== 0) {
      if (!map[node.pid].children) {
        map[node.pid].children = []
      }
      map[node.pid].children.push(node)
    } else {
      tree.push(node)
    }
  }
  return tree
}