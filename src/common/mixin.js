import { debounce } from "./utils"
import { POP, NEW, SELL } from "./const";

export const itemListenerMixin = {
  data() {
    return {
      itemImageListener: null,
    }
  },
  mounted() {
    // 1.监听推荐中图片加载完成 

    const refresh = debounce(this.$refs.scroll.refresh, 500);
    // 对监听的事件进行保存
    this.itemImageListener = () => {
      refresh();
    };
    this.$bus.$on("itemImageLoad", this.itemImageListener);

  },
}
export const backTopMixin = {
  data: function () {
    return {
      showBackTop: false
    }
  },
  methods: {
    backTop: function () {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}
