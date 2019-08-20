import { VantComponent } from '../common/component';
VantComponent({
    relation: {
        name: 'tabs',
        type: 'ancestor',
        linked(parent) {
            this.parent = parent;
        }
    },
    props: {
        dot: Boolean,
        info: null,
        title: String,
        disabled: Boolean,
        titleStyle: String
    },
    data: {
        width: null,
        inited: false,
        active: false,
        animated: false
    },
    watch: {
        title: 'update',
        disabled: 'update',
        dot: 'update',
        info: 'update',
        titleStyle: 'update'
    },
    methods: {
        update() {
            if (this.parent) {
                this.parent.updateTabs();
            }
        }
    }
});
