<template lang="html">
    <a
        v-if="type == 'link'"
        href="#btn"
        :class="[
            'app-button',
            'app-button-' + theme,
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
            'app-button-' + theme,
            outline ? 'app-button-outline' : '',
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
        floatingLocationClass() {
            switch (this.floatingLocation) {
                case "top":
                    return "top-2";
                case "left":
                    return "left-2";
                case "right":
                    return "right-2";
                case "bottom":
                    return "bottom-2";
                case "top-left":
                    return "top-2 left-2";
                case "top-right":
                    return "top-2 right-2";
                case "bottom-left":
                    return "bottom-2 left-2";
                case "bottom-right":
                    return "bottom-2 right-2";
                default:
                    return "";
            }
        }
    }
};
</script>

<style lang="scss">
$colors: (
    primary: var(--primary),
    secondary: var(--secondary),
    tertiary: var(--tertiary),
    quaternary: var(--quaternary),
    success: var(--tertiary),
    error: var(--secondary)
);

@each $name, $color in $colors {
    .app-button-#{$name} {
        border-color: $color;
        background-color: $color;
        color: var(--baseBg);
        &:hover {
            color: $color;
            background-color: var(--baseBg);
        }
        &.app-button-outline {
            background-color: var(--baseBg);
            color: $color;
            &:hover {
                color: var(--baseBg);
                background-color: $color;
            }
        }
    }
}

.app-button {
    @apply px-3 py-2 rounded shadow cursor-pointer text-center border;
    transition: all 0.3s;
}
</style>
