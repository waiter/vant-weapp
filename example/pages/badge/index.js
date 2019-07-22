import Page from '../../common/page';

Page({
  onChange(event) {
    wx.showToast({
      icon: 'none',
      title: `切换至第${event.detail}项`
    });
  },
  onReady() {
    if (this.needInsert) {
      const parent = this.selectComponent('.group-1');
      const children = this.selectAllComponents('.group-item-1');
      parent.insertChild(children);
    }
  }
});
