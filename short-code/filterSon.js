import data from './mock/filterSon.js'

console.log(data)
// 用于过滤掉数组中多余的子节点
const result = []
for (let i = 0; i < data.length; i++) {
  let findParent = false
  for (let j = 0; j < data.length; j++) {
    if (i === j) continue
    if (data[i].pId === data[j].id) {
      findParent = true
      break
    }
  }
  if (!findParent) {
    result.push(data[i])
  }
}

console.log(result.map(item => item.name))
