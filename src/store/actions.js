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
      // console.log(oldProduct);
      // 2.判断oldProduct
      if (oldProduct) {
        // 原有的商品数量+1
        // oldProduct.count += 1
        // console.log(oldProduct);
        context.commit('addCount', oldProduct)
        resolve('商品数量+1')
      } else {
        // 添加了新商品
        // console.log(oldProduct);
        payload.count = 1
        // context.state.cartList.push(payload)
        context.commit('addToCart', payload)
        resolve('添加成功')

      }
    })
  }
}