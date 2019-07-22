import { isSwan } from "./platform";

const needInsert = isSwan();

export default function(options = {}) {
  return Page({
    needInsert,
    onShareAppMessage() {
      return {
        title: 'Vant Weapp 组件库演示'
      };
    },
    ...options
  });
}
