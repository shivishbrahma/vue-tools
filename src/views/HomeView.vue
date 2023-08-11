<template lang="html">
    <div class="home"></div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
    name: "HomeView",
    mounted() {
        this.setAppTitle({ appTitle: this.appName });
    },
    methods: {
        ...mapMutations(["setAppTitle"])
    },
    computed: {
        ...mapState(["appName"])
    }
};
</script>
