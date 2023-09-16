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
            <h1 class="h2">
                {{ title }}
                <AppDropdown
                    :default-option="language"
                    :option-list="languages"
                    @change-value="(lang) => changeLanguage(lang)"
                />
            </h1>

            <div class="left-container">
                <AppFragment v-for="(fn, i) in prettierConfig[language].functions" :key="i">
                    <AppButton
                        :theme="fn.theme"
                        @click="
                            () => {
                                [this.code, this.language] = fn.execute(this);
                            }
                        "
                        :outline="fn.outline"
                    >
                        {{ fn.label }}
                    </AppButton>
                </AppFragment>
            </div>
        </header>
        <textarea v-model="code"></textarea>
    </section>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import AppButton from "@/atoms/AppButton/AppButton";
import AppDropdown from "@/atoms/AppDropdown/AppDropdown";
import AppFragment from "@/atoms/AppFragment/AppFragment";
import { prettierConfig } from "@/utils/prettier";

export default {
    name: "PrettierView",
    mounted() {
        this.setAppTitle({ appTitle: `${this.title} - ${this.appName}` });
        this.code = prettierConfig[this.language].sample;
    },
    data() {
        return {
            code: "",
            title: "Prettier",
            tabWidth: 4,
            language: "json",
            languages: ["json", "yaml"],
            prettierConfig
        };
    },
    props: {},
    components: {
        AppButton,
        AppDropdown,
        AppFragment
    },
    methods: {
        ...mapMutations(["setAppTitle"]),
        changeLanguage(lang) {
            this.language = lang;
        }
    },
    computed: {
        ...mapState(["appName"])
    },
    watch: {
        // language(newVal) {
        //     this.code = prettierConfig[newVal].sample;
        // }
    }
};
</script>
