<style lang="scss" scoped>
.app-button {
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    border-radius: 0.25rem;
    box-shadow: 0 0.125rem 0.25rem 0 rgba(var(--base), 0.1);

    &:link,
    &:visited {
        text-decoration: none;
        text-align: center;
    }

    &.app-button-default {
        border: 1px solid var(--base);
        background-color: var(--primaryBg);
        color: var(--base);

        &:hover {
            background-color: var(--baseBg);
            border-color: var(--primaryBg);
            color: var(--primary);
        }
    }

    &.app-button-primary {
        background-color: var(--primary);
        border-color: var(--primary);
        color: var(--baseBg);

        &:hover {
            background-color: var(--baseBg);
            // border-color: var(--baseBg);
            color: var(--primary);
        }

        &.app-button-outline {
            background-color: var(--baseBg);
            color: var(--primary);
            &:hover {
                background-color: var(--primary);
                border-color: var(--primary);
                color: var(--baseBg);
            }
        }
    }

    &.app-button-secondary,
    &.app-button-error {
        background-color: var(--secondary);
        border-color: var(--secondary);
        color: var(--baseBg);

        &:hover {
            background-color: var(--baseBg);
            // border-color: var(--baseBg);
            color: var(--secondary);
        }

        &.app-button-outline {
            background-color: var(--baseBg);
            color: var(--secondary);
            &:hover {
                background-color: var(--secondary);
                border-color: var(--secondary);
                color: var(--baseBg);
            }
        }
    }

    &.app-button-tertiary,
    &.app-button-success {
        border-color: var(--tertiary);
        background-color: var(--tertiary);
        color: var(--baseBg);

        &:hover {
            background-color: var(--baseBg);
            // border-color: var(--baseBg);
            color: var(--tertiary);
        }

        &.app-button-outline {
            background-color: var(--baseBg);
            color: var(--tertiary);
            &:hover {
                background-color: var(--tertiary);
                border-color: var(--tertiary);
                color: var(--baseBg);
            }
        }
    }

    &.app-button-floating {
        position: fixed;

        &.app-button-floating-top {
            top: 0.5rem;
        }

        &.app-button-floating-left {
            left: 0.5rem;
        }

        &.app-button-floating-right {
            right: 0.5rem;
        }

        &.app-button-floating-bottom {
            bottom: 0.5rem;
        }

        &.app-button-floating-top-left {
            top: 0.5rem;
            left: 0.5rem;
        }

        &.app-button-floating-top-right {
            top: 0.5rem;
            right: 0.5rem;
        }

        &.app-button-floating-bottom-left {
            bottom: 0.5rem;
            left: 0.5rem;
        }

        &.app-button-floating-bottom-right {
            bottom: 0.5rem;
            right: 0.5rem;
        }
    }

    &:hover {
        box-shadow: 0 0.125rem 0.25rem 0 rgba(var(--base), 0.1);
    }
}
</style>

<template lang="html">
    <a
        v-if="type == 'link'"
        href="#btn"
        class="app-button"
        :class="
            buttonThemeClass +
            (outline ? ' app-button-outline' : '') +
            floatingLocationClass +
            (floating ? ' app-button-floating' : '')
        "
    >
        <slot></slot>
    </a>
    <button
        v-else
        :type="type"
        class="app-button"
        :class="
            buttonThemeClass +
            (outline ? ' app-button-outline' : '') +
            floatingLocationClass +
            (floating ? ' app-button-floating' : '')
        "
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "AppButton",
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
            return " app-button-" + this.$props.theme;
        },
        floatingLocationClass() {
            return " app-button-floating-" + this.$props.floatingLocation;
        }
    }
};
</script>
