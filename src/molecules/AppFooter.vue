<style lang="scss" scoped>
.app-footer {
    background-color: var(--primaryBg);
    color: var(--base);
    @apply flex flex-col;

    .app-footer-buttons {
        .app-button {
            &:hover {
                @apply bg-transparent;
            }
        }
    }

    .app-footer-copyright {
        @apply text-center py-2;
        font-family: var(--base);

        .red-heart {
            @apply text-red text-xl;
            text-shadow: #ff006e 0.1em 0.1em 0.1em;
            margin-bottom: -0.25rem;
        }

        .green-tea {
            @apply text-green text-xl;
            text-shadow: #4daa57 0.1em 0.1em 0.1em;
            margin-bottom: -0.35rem;
        }
    }
}
</style>

<template lang="html">
    <section class="app-footer">
        <div class="app-footer-buttons">
            <AppButton
                class="border-none px-1 py-2"
                title="Dark Mode Toggler"
                @click.prevent="
                    () => {
                        toggleAppTheme();
                    }
                "
            >
                <v-icon v-if="isDark" name="fa-sun" />
                <v-icon v-else name="fa-moon" />
            </AppButton>
        </div>
        <div class="app-footer-copyright">
            Made with
            <i class="red-heart">
                <v-icon name="fa-heart" :scale="1.2" />
            </i>
            and
            <i class="green-tea">
                <v-icon name="fa-coffee" :scale="1.3" />
            </i>
            by Purbayan Chowdhury
        </div>
    </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AppButton from "@/atoms/AppButton";

export default {
    name: "app-footer",
    components: {
        "app-button": AppButton
    },
    methods: {
        ...mapActions(["toggleAppTheme"])
    },
    computed: {
        ...mapState({
            isDark: (state) => state.appTheme === "dark"
        })
    }
};
</script>
