<template lang="html">
    <app-page-section section-title="Featured Tools">
        <ul>
            <li>BMI Calculator</li>
        </ul>
    </app-page-section>
</template>

<script>
import AppPageSection from "@/molecules/AppPageSection";
import { mapMutations, mapState } from "vuex";

export default {
    name: "HomeView",
    components: {
        "app-page-section": AppPageSection
    },
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
