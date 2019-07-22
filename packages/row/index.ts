import { VantComponent } from '../common/component';

VantComponent({
  relation: {
    name: 'col',
    type: 'descendant',
    linked(target: Weapp.Component) {
      this.child.push(target);
      if (this.data.gutter) {
        target.setGutter(this.data.gutter);
      }
    },
    unlinked(target: Weapp.Component) {
      const index = this.child.indexOf(target);
      this.child.splice(index, 1);
    }
  },

  props: {
    gutter: Number
  },

  watch: {
    gutter: 'setGutter'
  },

  beforeCreate() {
    this.child = this.child || [];
  },

  mounted() {
    if (this.data.gutter) {
      this.setGutter();
    }
  },

  methods: {
    insertChild(children) {
      this.child = children || [];
      this.child.forEach(it => {
        it.setGutter(this.data.gutter);
      });
    },

    setGutter() {
      const { gutter } = this.data;
      const margin = `-${Number(gutter) / 2}px`;
      const style = gutter
        ? `margin-right: ${margin}; margin-left: ${margin};`
        : '';

      this.set({ viewStyle: style });
      this.child.forEach(col => {
        col.setGutter(this.data.gutter);
      });
    }
  }
});
