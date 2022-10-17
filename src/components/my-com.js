import { defineComponent as o, createVNode as e, createTextVNode as r } from "vue";
const n = (t) => ({
  type: String,
  default: t
}), l = o({
  props: {
    msg: n("aaa")
  },
  setup() {
    return () => e("div", null, [e("h1", null, [r("hello world!111")])]);
  }
});
export {
  l as default
};
