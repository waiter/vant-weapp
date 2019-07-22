import { VantComponent } from '../common/component';

VantComponent({
  relation: {
    name: 'row',
    type: 'ancestor'
  },

  props: {
    span: Number,
    offset: Number
  },

  data: {
    viewStyle: ''
  },

  methods: {
    setGutter(gutter: number) {
      const padding = `${gutter / 2}px`;
      const style = gutter ? `padding-left: ${padding}; padding-right: ${padding};` : '';
      if (style !== this.data.viewStyle) {
        this.set({ viewStyle: style });
      }
    }
  }
});
