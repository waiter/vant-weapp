import { VantComponent } from '../common/component';
VantComponent({
    props: {
        info: null,
        name: {
            type: String,
            observer: 'checkIsSrc'
        },
        size: String,
        color: String,
        customStyle: String,
        classPrefix: {
            type: String,
            value: 'van-icon'
        }
    },
    data: {
        isSrc: false
    },
    methods: {
        onClick() {
            this.$emit('click');
        },
        checkIsSrc() {
            const url = this.data.name;
            let isSrc = false;
            if (url.indexOf('http') === 0 || url.indexOf('data:image') === 0 || url.indexOf('//') === 0) {
                isSrc = true;
            }
            this.set({
                isSrc
            });
        }
    }
});
