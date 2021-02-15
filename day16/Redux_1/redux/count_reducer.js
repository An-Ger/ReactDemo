/**
 * 创建一个为Count组件服务的reducer
 */
const initState = 0;
export default function countReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case "increment":
      return preState + data;
    case "decrement":
      return preState - data;
    default:
        return preState
  }
}
