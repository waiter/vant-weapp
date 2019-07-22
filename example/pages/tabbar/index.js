import Page from '../../common/page';

Page({
  data: {
    active: 0,
    active2: 'home',
    active3: 0
  },

  onShow() {
    this.getTabBar().init();
  },

  onChange(event) {
    const { key } = event.currentTarget.dataset;
    this.setData({ [key]: event.detail });
  },

  onReady() {
    if (this.needInsert) {
      for(let i = 1; i < 4; i++) {
        const parent = this.selectComponent(`.group-${i}`);
        const children = this.selectAllComponents(`.group-item-${i}`);
        parent.insertChild(children);
      }
    }
  }
});
