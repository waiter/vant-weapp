"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
    relation: {
        name: 'col',
        type: 'descendant',
        linked: function (target) {
            this.child.push(target);
            if (this.data.gutter) {
                target.setGutter(this.data.gutter);
            }
        },
        unlinked: function (target) {
            var index = this.child.indexOf(target);
            this.child.splice(index, 1);
        }
    },
    props: {
        gutter: Number
    },
    watch: {
        gutter: 'setGutter'
    },
    beforeCreate: function () {
        this.child = this.child || [];
    },
    mounted: function () {
        if (this.data.gutter) {
            this.setGutter();
        }
    },
    methods: {
        insertChild: function (children) {
            var _this = this;
            this.child = children || [];
            this.child.forEach(function (it) {
                it.setGutter(_this.data.gutter);
            });
        },
        setGutter: function () {
            var _this = this;
            var gutter = this.data.gutter;
            var margin = "-" + Number(gutter) / 2 + "px";
            var style = gutter
                ? "margin-right: " + margin + "; margin-left: " + margin + ";"
                : '';
            this.set({ viewStyle: style });
            this.child.forEach(function (col) {
                col.setGutter(_this.data.gutter);
            });
        }
    }
});
