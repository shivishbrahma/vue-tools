<style lang="scss">
.app-page-section {
    background-color: var(--baseBg);

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
            text-shadow: 1px 1px 5px var(--secondary), 1px 1px 5px var(--secondary);
            color: var(--secondary);
            box-shadow: -10px 0 10px -9px var(--secondary);
        }
    }

    &.app-page-section-tertiary {
        .app-page-section-heading {
            border-left: 0.5rem solid var(--tertiary);
            text-shadow: 1px 1px 5px var(--tertiary), 1px 1px 5px var(--tertiary);
            color: var(--tertiary);
            box-shadow: -10px 0 10px -9px var(--tertiary);
        }
    }

    &.app-page-section-quaternary {
        .app-page-section-heading {
            border-left: 0.5rem solid var(--quaternary);
            text-shadow: 1px 1px 5px var(--quaternary), 1px 1px 5px var(--quaternary);
            color: var(--quaternary);
            box-shadow: -10px 0 10px -9px var(--quaternary);
        }
    }

    .app-page-section-container {
        p {
            margin-bottom: 0.5rem;
        }
        .h3 {
            margin-bottom: 0.25rem * 3;
            margin-top: 0.5rem * 3;
        }
        li {
            margin-bottom: 0.25rem;
        }
    }
}
</style>

<template>
    <section :class="'app-page-section py-2 app-page-section-' + sectionTheme">
        <h2 class="app-page-section-heading ml-2 pl-2 uppercase">{{ sectionTitle }}</h2>
        <div class="app-page-section-container p-2">
            <slot></slot>
        </div>
        <slot name="sectionFooter"></slot>
    </section>
</template>

<script>
export default {
    name: "app-page-section",
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
