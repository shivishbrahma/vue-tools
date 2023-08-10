<style lang="scss" scoped>
.app-footer {
    background-color: var(--primaryBg);

    .app-footer-buttons {
        display: flex;

        .Button {
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
            <!-- <Button class="" title="Dark Mode Toggler"> {isDark ? <FaMoon /> : <FaSun />} </Button> -->
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
export default {
    name: "AppFooter"
};
</script>
