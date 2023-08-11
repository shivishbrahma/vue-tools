<style lang="scss" scoped>
.app-page-section {
    padding: 0.5rem 0;
    background-color: var(--baseBg);

    .app-page-section-heading {
        margin-left: 0.5rem;
        padding-left: 0.5rem;
        text-transform: uppercase;
    }

    &.app-page-section-primary {
        .app-page-section-heading {
            border-left: 0.5rem solid var(--primary);
            text-shadow: 1px 1px 5px var(--primary), 1px 1px 5px var(--primary);
            color: var(--primary);
            box-shadow: -10px 0 10px -9px var(--primary);
        }
    }

    &.app-page-section-secondary {
        .app-page-section-heading {
            border-left: 0.5rem solid var(--secondary);
            color: var(--secondary);
        }
    }

    &.app-page-section-tertiary {
        .app-page-section-heading {
            border-left: 0.5rem solid var(--tertiary);
            color: var(--tertiary);
        }
    }

    &.app-page-section-quaternary {
        .app-page-section-heading {
            border-left: 0.5rem solid var(--quaternary);
            color: var(--quaternary);
        }
    }
}
</style>

<template>
    <section :class="'app-page-section app-page-section-' + sectionTheme">
        <h2 class="app-page-section-heading">{{ sectionTitle }}</h2>
        <div class="app-page-section-container">
            <slot></slot>
        </div>
        <slot name="sectionFooter"></slot>
    </section>
</template>

<script>
export default {
    name: "AppPageSection",
    created() {},
    data() {
        return {};
    },
    props: {
        sectionTitle: { type: String, default: "Section Header" },
        sectionTheme: { type: String, default: "primary" }
    },
    methods: {}
};
</script>
