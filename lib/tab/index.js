"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
    relation: {
        name: 'tabs',
        type: 'ancestor',
        linked: function (parent) {
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
        update: function () {
            if (this.parent) {
                this.parent.updateTabs();
            }
        }
    }
});
