<template>
    <slot v-for="i in repeatCount" :key="i"></slot>
</template>

<script lang="js">
export default {
    name: "app-fragment",
    props: {
        repeatCount: {
            type: Number,
            default: 1
        }
    }
};
</script>
