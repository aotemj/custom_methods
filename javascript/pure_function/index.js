// 纯函数
// 将非纯函数变为纯函数

// 案例1：
// 改造前代码：
/*
const branches = data.branches.map(ref => { //非纯： map 期待的是原数组不被改变
  if (ref.isDefaultBranch) {
    localStorage.set(`baseBranch:${repo}`, encodeURIComponent(ref.name)) // 非纯： 改变外部数据
    localStorage.set(repo, encodeURIComponent(ref.name)) // 非纯： 改变外部数据
  }
  ref.isBranch = true // 非纯： 改变了参数
  ref.commit = ref.commitId // 非纯： 改变了参数
  return ref
})
 */

// 当前代码存在的问题：
// 1. 当前 map 函数中存在 副作用
// 2. 当前 map 处理函数中改变了传入的参数（ref.isBranch ref.commit）
// 3. 当前 map 处理函数中改变了外部数据(localStorage)
// 改进建议：
//  1. 副作用不进 map 调用
//  2. 最小化需要副作用的内容
//  3. 明确标记副作用

// 改变后的代码：

/*
const branches = data.branches.map(ref => ({ ...ref, isBranch: true, commit: ref.commitId })) // map 中重新生成 branches，不改变原数组,当前代码为纯函数代码
const defaultBranches = branches.filter(ref => ref.isDefaultBranch) // filter中不改变原数组，当前代码为纯函数代码

// 使用 for 关键字标记需要进行 非纯 的操作
for (const ref of defaultBranches) {
  localStorage.set(`baseBranch:${repo}`, encodeURIComponent(ref.name))
  localStorage.set(repo, encodeURIComponent(ref.name))
}
*/
