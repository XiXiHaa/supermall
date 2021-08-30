export default {
  addCart(context, payload) {
    // payload新添加的商品
    // let oldProduct = null;
    // for (let item of state.cartList) {
    //   console.log(item);
    //   if (item.iid === payload.iid) {
    //     oldProduct = item;
    //   }
    // }
    return new Promise((resolve) => {
      // 查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      // 2.判断oldProduct
      if (oldProduct) {
        // 原有的商品数量+1
        // oldProduct.count += 1
        context.commit('addCount', oldProduct)
        resolve('当前的商品数量+1')
      } else {
        // 添加了新商品
        payload.count = 1
        // context.state.cartList.push(payload)
        context.commit('addToCart', payload)
        resolve('添加了新的商品')

      }
    })
  }
}