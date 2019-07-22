import Page from '../../common/page';

Page({
  data: {
    tabs: [1, 2, 3, 4],
    tabsMore: [1, 2, 3, 4, 5, 6, 7, 8],
    tab2: [1, 2],
    tab3: [1, 2, 3],
    tab4: [1, 2, 3, 4],
    tab6: [1, 2, 3, 4, 5, 6],
  },

  onClickDisabled(event) {
    wx.showToast({
      title: `标签 ${event.detail.index + 1} 已被禁用`,
      icon: 'none'
    });
  },

  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.index + 1}`,
      icon: 'none'
    });
  },

  onClickNavRight() {
    wx.showToast({
      title: '点击 right nav',
      icon: 'none'
    });
  },

  onClick(event) {
    wx.showToast({
      title: `点击标签 ${event.detail.index + 1}`,
      icon: 'none'
    });
  },
  onReady() {
    if (this.needInsert) {
      for(let i = 1; i < 10; i++) {
        const parent = this.selectComponent(`.group-${i}`);
        const children = this.selectAllComponents(`.group-item-${i}`);
        parent.insertChild(children);
      }
    }
  }
});
