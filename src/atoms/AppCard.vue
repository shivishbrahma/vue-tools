<style lang="scss">
.app-card {
    border: 0.125rem solid rgba(#888, 0.5);
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);
    position: relative;
    height: max-content;

    .app-card-content {
        .app-card-header {
            overflow: hidden;
        }

        .app-card-img {
            display: flex;
            justify-content: center;
            align-items: center;
            height: calc(25vw - 4.5rem);

            img {
                display: block;
                height: 100%;
                width: 100%;
                object-position: center;
                object-fit: cover;
            }
        }

        .app-card-container {
            padding: 0.5rem 1.5rem;
        }

        &.hovering {
            visibility: hidden;
        }
    }

    .app-card-hover {
        display: none;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;

        .app-card-hover-content {
            padding: 1.5rem 1rem;
        }

        &.hovering {
            display: initial;
        }
    }

    &.app-card-hoverable:hover {
        .app-card-hover {
            display: initial;
        }

        .app-card-content {
            visibility: hidden;
        }
    }
}

.app-card-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0.5rem;
    gap: 1rem;
}

@media screen and (max-width: 956px) {
    .app-card-content {
        .app-card-img {
            height: calc(34vw - 3rem) !important;
        }
    }

    .app-card-list {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 0.75rem;
    }
}

@media screen and (max-width: 480px) {
    .app-card-content {
        .app-card-img {
            height: calc(50vw - 1.5rem) !important;
        }
    }

    .app-card-list {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 0.5rem;
    }
}

@media screen and (max-width: 320px) {
    .app-card-content {
        .app-card-img {
            height: calc(75vw - 1rem) !important;
        }
    }

    .app-card-list {
        grid-template-columns: 1fr;
        column-gap: 0.5rem;
    }
}
</style>

<template>
    <div class="app-card" :class="{ 'app-card-hoverable': isHoverable }" @click="(event) => flipCard(event)">
        <div class="app-card-content" :class="{ hovering: isFlip }">
            <div class="app-card-header">
                <div class="app-card-img" v-if="cardImg">
                    <img :src="cardImg.src" :alt="cardImg.alt" />
                </div>
            </div>
            <div class="app-card-container">
                <slot></slot>
            </div>
            <div class="app-card-footer">
                <slot name="footer"></slot>
            </div>
        </div>
        <div class="app-card-hover" :class="{ hovering: isFlip }">
            <div class="app-card-hover-content">
                <slot name="hover_content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "app-card",
    props: {
        cardImg: {
            type: Object,
            default: null
        },
        isHoverable: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isFlip: false
        };
    },
    methods: {
        flipCard(event) {
            event.stopPropagation();
            this.isFlip = this.$props.isHoverable && !this.isFlip;
        }
    }
};
</script>
