<style lang="scss" scoped>
.section-prettier {
    padding: 0.5rem;
    height: 100%;
    .header {
        display: flex;
        .h2 {
            color: var(--tertiary);
        }
    }
    .left-container {
        margin-left: auto;
    }
    textarea {
        width: 100%;
        height: calc(100% - 3.5rem);
        border: 1px solid var(--tertiary);
        border-radius: 0.5rem;
        resize: none;
        background-color: var(--base);
        color: var(--primaryBg);
        padding: 0.5rem;
    }
}
</style>

<template lang="html">
    <section class="section-prettier">
        <header class="header">
            <h1 class="h2">{{ title }} {{ language.toUpperCase() }}</h1>

            <div class="left-container">
                <AppButton theme="success" @click="prettifyJSON">Prettify</AppButton>
                <AppButton theme="success" outline @click="compactJSON">Compact</AppButton>
                <!-- <button v-on:click="compactJSON">Compact</button> -->
            </div>
        </header>
        <textarea v-model="code"></textarea>
    </section>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import AppButton from "@/atoms/AppButton/AppButton";

export default {
    name: "PrettierView",
    mounted() {
        this.setAppTitle({ appTitle: `${this.title} - ${this.appName}` });
    },
    data() {
        return {
            code: "",
            title: "Prettier",
            tabWidth: 4,
            language: "json"
        };
    },
    props: {},
    components: {
        AppButton
    },
    methods: {
        ...mapMutations(["setAppTitle"]),
        prettifyJSON(event) {
            event.preventDefault();
            if (this.language === "json") this.code = JSON.stringify(JSON.parse(this.code), null, this.tabWidth);
        },
        compactJSON(event) {
            event.preventDefault();
            if (this.language === "json") this.code = JSON.stringify(JSON.parse(this.code));
        }
    },
    computed: {
        ...mapState(["appName"])
    }
};
</script>
