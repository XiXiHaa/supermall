<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        class="check-button"
        :is-checked="isSelectAll"
        @click.native="checkClick"
      >
      </check-button>
      <span>全选</span>
    </div>

    <div class="price">合计：{{ totalPrice }}</div>

    <div class="calculate" @click="calcClick">去计算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";

export default {
  name: "CartBottonBar",
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      // 方案1
      // if (this.$store.state.cartList.length === 0) {
      //   return false;
      // }
      // return !this.$store.state.cartList.filter((item) => !item.checked).length;
      // 方案2
      // if (this.$store.state.cartList.length === 0) {
      //   return false;
      // }
      // return !this.$store.state.cartList.find((item) => {
      //   return !item.checked;
      // });
      if (this.$store.state.cartList.length === 0) {
        return false;
      }
      for (let item of this.$store.state.cartList) {
        if (!item.checked) {
          return false;
        }
      }
      return true;
    },
  },
  methods: {
    checkClick() {
      console.log("-----");
      if (this.isSelectAll) {
        // 全都选中了
        this.$store.state.cartList.forEach((item) => (item.checked = false));
      } else {
        // 部分或者全都没选中
        this.$store.state.cartList.forEach((item) => (item.checked = true));
      }
    },
    calcClick() {
      if (!this.isSelectAll) {
        this.$toast.show("请选择购买的商品");
      } else {
        this.$toast.show("结算中");
      }
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  position: relative;
  line-height: 40px;
  height: 40px;
  background-color: #eee;
}
.check-content {
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.check-button {
  align-items: center;
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.price {
  margin-left: 25px;
  flex: 1;
}
.calculate {
  background-color: red;
  text-align: center;
  width: 90px;
  color: #fff;
}
</style>