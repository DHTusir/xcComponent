export default {
    name: 'formExpand',
    functional: true,
    props: {
        vNode: Object,
    },
    setup() {
        return (ctx) => {
            return ctx.vNode
        }
    }
};