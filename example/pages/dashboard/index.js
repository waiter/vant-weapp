import list from '../../config';
import Page from '../../common/page';

Page({
  data: {
    list,
    activeName: []
  },

  onChangeCollapse(event) {
    this.setData({
      activeNames: event.detail
    });
  },

  onClick(event) {
    const { switchTab, url } = event.currentTarget.dataset;
    console.log(switchTab, url)
    if (switchTab) {
      wx.switchTab({ url, fail: (e) => console.log(e) });
    }
  },

  onReady() {
    if (this.needInsert) {
      (this.data.list || []).forEach((it, idx) => {
        const parent = this.selectComponent(`.collapse-${idx}`);
        const children = this.selectAllComponents(`.collapse-item-${idx}`);
        parent.insertChild(children);
      });
    }
  }
});
