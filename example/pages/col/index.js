import Page from '../../common/page';

Page({
  onReady() {
    if (this.needInsert) {
      for(let i = 1; i < 5; i++) {
        const parent = this.selectComponent(`.row-${i}`);
        const children = this.selectAllComponents(`.row-item-${i}`);
        parent.insertChild(children);
      }
    }
  }
});
