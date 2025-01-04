<template lang="html">
    <a
        v-if="type == 'link'"
        href="#btn"
        :class="[
            'app-button',
            buttonThemeClass,
            outline ? 'border' : '',
            floating ? 'fixed' : '',
            floatingLocationClass
        ]"
    >
        <slot></slot>
    </a>
    <button
        v-else
        :type="type"
        :class="[
            'app-button',
            buttonThemeClass,
            outline ? 'border' : '',
            floating ? 'fixed' : '',
            floatingLocationClass
        ]"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "app-button",
    props: {
        type: { type: String, default: "button" },
        floating: { type: Boolean, default: false },
        theme: { type: String, default: "default" },
        outline: { type: Boolean, default: false },
        floatingLocation: { type: String, default: "left" },
        class: { type: String }
    },
    computed: {
        buttonThemeClass() {
            switch (this.theme) {
                case 'primary':
                    return 'bg-primary text-white hover:bg-white hover:text-primary';
                case 'secondary':
                    return 'bg-secondary text-white hover:bg-white hover:text-secondary';
                case 'tertiary':
                    return 'bg-tertiary text-white hover:bg-white hover:text-tertiary';
                case 'error':
                    return 'bg-error text-white hover:bg-white hover:text-error';
                case 'success':
                    return 'bg-success text-white hover:bg-white hover:text-success';
                default:
                    return 'bg-primaryBg text-base hover:bg-white hover:text-primary';
            }
        },
        floatingLocationClass() {
            switch (this.floatingLocation) {
                case 'top':
                    return 'top-2';
                case 'left':
                    return 'left-2';
                case 'right':
                    return 'right-2';
                case 'bottom':
                    return 'bottom-2';
                case 'top-left':
                    return 'top-2 left-2';
                case 'top-right':
                    return 'top-2 right-2';
                case 'bottom-left':
                    return 'bottom-2 left-2';
                case 'bottom-right':
                    return 'bottom-2 right-2';
                default:
                    return '';
            }
        }
    }
};
</script>

<style scoped>
.app-button {
    @apply px-3 py-2 rounded shadow cursor-pointer text-center;
}
</style>