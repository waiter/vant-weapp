import { VantComponent } from '../common/component';
VantComponent({
    relation: {
        name: 'badge',
        type: 'descendant',
        linked(target) {
            this.badges.push(target);
            this.setActive(this.data.active);
        },
        unlinked(target) {
            this.badges = this.badges.filter(item => item !== target);
            this.setActive(this.data.active);
        }
    },
    props: {
        active: {
            type: Number,
            value: 0,
            observer: 'setActive'
        }
    },
    beforeCreate() {
        // fuck bd ide lifetime
        this.badges = this.badges || [];
        if (typeof this.currentActive === 'undefined') {
            this.currentActive = -1;
        }
    },
    methods: {
        insertChild(children) {
            this.badges = children || [];
            this.badges.forEach(it => {
                it.parent = this;
            });
            this.setActive(this.data.active);
        },
        setActive(active) {
            const { badges, currentActive } = this;
            if (!badges.length) {
                return Promise.resolve();
            }
            this.currentActive = active;
            const stack = [];
            if (currentActive !== active && badges[currentActive]) {
                stack.push(badges[currentActive].setActive(false));
            }
            if (badges[active]) {
                stack.push(badges[active].setActive(true));
            }
            return Promise.all(stack);
        }
    }
});
