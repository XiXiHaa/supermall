export default {
  // mutations 唯一的目的就是修改state中状态
  // mutations 中的每一个方法尽可能完成的事情比较单一
  addCount(state, payload) {
    payload.count++
  },
  addToCart(state, payload) {
    payload.checked = false
    state.cartList.push(payload)
  },
  addClick(state, payload) {
    payload.count++
  },
  subClick(state, payload) {
    payload.count--
  },
}