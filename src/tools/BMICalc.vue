<style lang="scss"></style>

<template>
    <app-page-section sectionTitle="BMI Calculator"> Hello World </app-page-section>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import AppPageSection from "@/molecules/AppPageSection";

export default {
    name: "AboutView",
    components: {
        "app-page-section": AppPageSection
    },
    mounted() {
        this.setAppTitle({ appTitle: `BMICalc - ${this.appName}` });
    },
    methods: {
        ...mapMutations(["setAppTitle"])
    },
    computed: {
        ...mapState(["appName"])
    }
};
</script>
