var name = 'hxc'
var age = 18
var flag = true

function sum(num1, num2){
  return num1 + num2
}
if(flag){
  console.log(sum(20,30))
}


// 导出方式一
export {
  flag,sum
}

//导出方式二
export var weight = 100

// 导出方式三

export function mul(num1, num2){
  return num1 + num2
}

// export default 一个模块只能有一个export default 别人在导入时可以自己命名(去mmm.js看)
const address = '杭州市'
export default address