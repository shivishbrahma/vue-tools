<style lang="scss" scoped>
.app-dropdown {
    display: inline-block;
    position: relative;
    .app-dropdown-current {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .app-dropdown-menu {
        list-style: none;
        display: none;
        flex-direction: column;
        position: absolute;
        background-color: var(--primaryBg);
        padding: 0.5rem;
        &.show {
            display: flex;
        }
    }
}
</style>

<template>
    <div class="app-dropdown">
        <span class="app-dropdown-current" @click="toggleDropdown">
            {{ defaultValue }}
            <v-icon v-if="showDropdown" name="fa-chevron-up" />
            <v-icon v-else name="fa-chevron-down" />
        </span>
        <ul class="app-dropdown-menu" :class="{ show: showDropdown }">
            <li
                class="app-dropdown-menu-item"
                v-for="(option, i) in optionList"
                :key="i"
                @click="(event) => setCurrentDropdownIndex(event, i)"
            >
                {{ option }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "AppDropdown",
    created() {},
    data() {
        return {
            currentOptionIndex: -1,
            showDropdown: false
        };
    },
    props: {
        optionList: {
            type: Array,
            default: () => {
                return [];
            }
        },
        defaultOption: {
            type: String,
            default: "default"
        }
    },
    methods: {
        toggleDropdown(event) {
            event.preventDefault();
            this.showDropdown = !this.showDropdown;
        },
        setCurrentDropdownIndex(event, index) {
            event.preventDefault();
            this.showDropdown = false;
            this.currentOptionIndex = index;
            const currentOption = this.$props.optionList[this.$data.currentOptionIndex];
            this.$emit("changeValue", currentOption);
        }
    },
    computed: {
        defaultValue() {
            return this.$data.currentOptionIndex === -1
                ? this.$props.defaultOption
                : this.$props.optionList[this.$data.currentOptionIndex];
        }
    }
};
</script>
