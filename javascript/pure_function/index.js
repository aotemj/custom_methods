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

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// 案例2：
// 改造前代码：
/*
const searchByKeyword = async e => {
  const keyword = e.target.value; // keyword 由用户输入决定，有可变性，非纯
  const loading = {
    text: '加载中',
    timeout: 5000
  };
  showLoading(loading); // showLoading 的调用没有返回值，非纯
  const response = await api.fetchListByKeyword(keyword); // 异步： 非纯
  const list = response.data.map(...);
  const html = list.map(...);
  document.getElementById("result").innerHTML = html; // DOM操作,影响外部环境, 非纯
}
*/
// 当前代码存在的问题：
// 1. keyword 由用户输入决定，有可变性，非纯
// 2. showLoading 的调用没有返回值，非纯
// 3. 异步： 非纯
// 4. DOM操作,影响外部环境, 非纯

/*
const createKeywordSearchRenderer = (getKeyword, showLoading, fetchList) => e => { // 取决于输入，可转为纯函数
  const keyword = getKeyword(e)
  const loading = {
    text: '加载中',
    timeout: 50000
  }
  showLoading(loading)
  const response = fetchList(keyword)
  const list = response.data.map(...)
  const html = list.map(...)
  return html;
}

const searchByKeyword = flow(
  createKeywordSearchRenderer(
    e => e.target.value,
    showLoading,
    api.fetchListByKeyword.bind(api)
  ),
  html => document.getElementById('result').innerHTML = html
)

const testReaderer = createKeywordSearchRenderer(
  property("value"),
  noop,
  constant(["foo", "bar"])
)

const resultHTML = testReaderer({value: "test"});
expect(resultHTML).to.equal(...)
 */
