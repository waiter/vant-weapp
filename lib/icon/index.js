"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
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
        onClick: function () {
            this.$emit('click');
        },
        checkIsSrc: function () {
            var url = this.data.name;
            var isSrc = false;
            if (url.indexOf('http') === 0 || url.indexOf('data:image') === 0 || url.indexOf('//') === 0) {
                isSrc = true;
            }
            this.set({
                isSrc: isSrc
            });
        }
    }
});
