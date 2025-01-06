<style lang="scss" scoped>
.section-prettier {
    @apply p-2 h-full;
    .header {
        @apply flex flex-wrap;
    }
    .left-container {
        @apply ml-auto gap-1 flex;
    }
    textarea {
        @apply w-full p-2;
        height: calc(100% - 3.5rem);
        border: 1px solid var(--tertiary);
        border-radius: 0.5rem;
        resize: none;
        background-color: var(--base);
        color: var(--primaryBg);
    }
}
</style>

<template lang="html">
    <section class="section-prettier">
        <header class="header">
            <h3 class="text-tertiary">
                {{ title }}
                <AppDropdown
                    :default-option="language"
                    :option-list="languages"
                    @change-value="(lang) => changeLanguage(lang)"
                />
            </h3>

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
import AppButton from "@/atoms/AppButton";
import AppDropdown from "@/atoms/AppDropdown";
import AppFragment from "@/atoms/AppFragment";
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
            this.code = prettierConfig[lang].sample;
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
