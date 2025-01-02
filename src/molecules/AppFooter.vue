<style lang="scss" scoped>
.app-footer {
    background-color: var(--primaryBg);

    .app-footer-buttons {
        display: flex;

        .app-button {
            border: none;
            &:hover {
                background-color: transparent;
            }
        }
    }

    .app-footer-copyright {
        padding: 0.5rem 0;
        font-size: 1em;
        text-align: center;

        .red-heart {
            color: #ff006e;
            margin-bottom: -0.25rem;
            font-size: 1.25rem;
            text-shadow: #ff006e 0.1em 0.1em 0.1em;
        }

        .green-tea {
            color: #4daa57;
            font-size: 1.5rem;
            margin-bottom: -0.35rem;
            text-shadow: #4daa57 0.1em 0.1em 0.1em;
        }
    }
}
</style>

<template lang="html">
    <section class="app-footer">
        <div class="app-footer-buttons">
            <AppButton
                class=""
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
                <v-icon name="fa-heart" />
            </i>
            and
            <i class="green-tea">
                <v-icon name="fa-coffee" />
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
