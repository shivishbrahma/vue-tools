<style lang="scss"></style>
<template lang="html">
    <app-page-section sectionTitle="404">
        <p class="error-desc">Not Found</p>
    </app-page-section>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import AppPageSection from "@/molecules/AppPageSection";

export default {
    name: "NotFoundView",
    components: {
        "app-page-section": AppPageSection
    },
    mounted() {
        this.setAppTitle({ appTitle: `404 Not Found - ${this.appName}` });
    },
    methods: {
        ...mapMutations(["setAppTitle"])
    },
    computed: {
        ...mapState(["appName"])
    }
};
</script>
