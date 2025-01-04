<style lang="scss" scoped>
/*
* ====================================================================
*                           THEMES - LIGHT
* ====================================================================
* 1. Base Color : #302b27
* 2. Primary Color : #00374d
* 3. Secondary Color : #a50d12
* 4. Tertiary Color : #02642c
* 5. Base Background Color: #f3ffe9;
* 6. Primary Background Color: #e6f9ff;
* ====================================================================
*                           THEMES - DARK
* ====================================================================
* 1. Base Color : #f4f2f1
* 2. Primary Color : #00a8e8
* 3. Secondary Color : #f15156
* 4. Tertiary Color : #04f06a
* 5. Base Background Color: #00171f
* 6. Primary Background Color: #00171f;
*/

.app {
    color: var(--base);
    background-color: var(--baseBg);
}
</style>

<template>
    <div className="app flex flex-col h-screen relative">
        <header className="app-header flex-initial">
            <app-navbar />
        </header>

        <main className="app-main flex-auto">
            <router-view />
        </main>

        <footer className="app-footer flex-initial">
            <app-footer />
        </footer>
    </div>
</template>

<script>
import AppNavbar from "@/molecules/AppNavbar";
import AppFooter from "@/molecules/AppFooter";
import { setCSSVariables, themes } from "@/utils/theme";
import { mapState } from "vuex";

export default {
    name: "app",
    components: {
        "app-navbar": AppNavbar,
        "app-footer": AppFooter
    },
    mounted() {
        setCSSVariables(themes[this.appTheme]);
        window.document.title = this.appTitle;
    },
    computed: {
        ...mapState(["appTheme", "appTitle"])
    },
    watch: {
        appTheme(value) {
            setCSSVariables(themes[value]);
        },
        appTitle(value) {
            window.document.title = value;
        }
    }
};
</script>
