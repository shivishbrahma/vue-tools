<style lang="scss">
.tool-title {
}
.tool-desc {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: justify;
}
</style>

<template lang="html">
    <app-page-section section-title="Featured Tools">
        <div class="app-card-list">
            <app-card
                v-for="(tool, i) in tools"
                :key="i"
                :card-img="{ src: base_url + 'tools/' + tool.img_url, alt: tool.name + ' Cover' }"
            >
                <h5 class="tool-title">
                    <a :href="base_url + '#tools' + tool.link" target="_blank" rel="noreferrer">
                        {{ tool.name }}
                    </a>
                </h5>
                <p class="tool-desc">{{ tool.desc }}</p>
            </app-card>
        </div>
    </app-page-section>
</template>

<script>
import AppPageSection from "@/molecules/AppPageSection";
import AppCard from "@/atoms/AppCard";
import { mapMutations, mapState } from "vuex";
import toolsData from "@/data/tools.json";

export default {
    name: "HomeView",
    data() {
        return {
            tools: toolsData,
            base_url: process.env.BASE_URL
        };
    },
    components: {
        "app-page-section": AppPageSection,
        "app-card": AppCard
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
