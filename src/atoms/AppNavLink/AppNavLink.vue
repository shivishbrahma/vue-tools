<style lang="scss" scoped>

.app-navbar-item {
    &:hover,
    &.app-navbar-active {
        background: var(--primary);
        color: var(--primaryBg);
        text-decoration: none;
        cursor: pointer;
    }
}

.app-nav-link {
    padding: 0.5rem 0.75rem;
    text-decoration: none;
    width: 100%;
    display: block;
    text-align: center;

    &:link,
    &:visited {
        color: var(--primary);
    }
}
</style>

<template lang="html">
    <li class="app-navbar-item" :class="[active && 'app-navbar-active', active && 'app-navbar-exact-active']">
        <a class="app-nav-link" :href="href">
            <slot></slot>
        </a>
    </li>
</template>

<script>
export default {
    name: "AppNavLink",
    props: {
        active: Boolean,
        href: String
    }
};
</script>
