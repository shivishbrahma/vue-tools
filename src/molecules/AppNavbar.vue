<style lang="scss" scoped>
.app-navbar {
    padding: 0.5rem 0.75rem;
    display: flex;
    gap: 0.5rem;
    background: var(--primaryBg);
    height: 4rem;

    .app-navbar-brand {
        display: flex;
        gap: 0.75rem;
        margin-left: auto;
        align-items: center;

        .app-navbar-brand-logo {
            display: inline-block;
            width: 3rem;
            height: 3rem;
        }

        .app-navbar-brand-text {
            display: inline-block;
            font-size: 1.25rem;
            // line-height: 2;
        }
    }

    .app-navbar-list {
        display: flex;
        gap: 0.25rem;
        list-style: none;
        align-items: center;

        .app-navbar-item a {
            text-decoration: none;

            // &.active,
            // &:hover {
            //     text-decoration: underline;
            // }
        }
    }

    .app-navbar-toggler {
        display: none;
    }
}

@media screen and (max-width: 600px) {
    .app-navbar {
        .app-navbar-brand {
            .app-navbar-brand-text {
                display: none;
            }
        }
    }
}

@media screen and (max-width: 428px) {
    .app-navbar {
        .app-navbar-list {
            display: none;
            transition: transform ease-in-out 1s;
            transform: translate(100%, 100%);
        }

        .app-navbar-toggler {
            display: flex;
            align-items: center;
        }
    }

    .app-navbar.active {
        .app-navbar-list {
            gap: 1rem;
            transform: translate(0, 0);
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: var(--primaryBg);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            z-index: 1;

            .app-navbar-item {
                width: 100%;
                max-width: 200px;
            }
        }

        .app-navbar-toggler {
            top: 1rem;
            left: 1rem;
            position: absolute;
            z-index: 2;
        }
    }
}
</style>

<template>
    <nav class="app-navbar" :class="{ active: isNavbarOpen }">
        <div class="app-navbar-toggler" @click.prevent="toggleNavbar">
            <v-icon v-if="isNavbarOpen" name="fa-times"></v-icon>
            <v-icon v-else name="fa-bars"></v-icon>
        </div>
        <ul class="app-navbar-list">
            <router-link to="/" custom v-slot="{ isActive, route, navigate }">
                <app-nav-link :active="isActive" :href="href" @click="navigate">{{ route.name }}</app-nav-link>
            </router-link>
            <router-link to="/about" custom v-slot="{ isActive, route, navigate }">
                <app-nav-link :active="isActive" :href="href" @click="navigate">{{ route.name }}</app-nav-link>
            </router-link>
            <router-link to="/prettier" custom v-slot="{ isActive, route, navigate }">
                <app-nav-link :active="isActive" :href="href" @click="navigate">{{ route.name }}</app-nav-link>
            </router-link>
        </ul>
        <div className="app-navbar-brand">
            <img :src="logoImg" alt="Brand Icon" class="app-navbar-brand-logo" />
            <span class="app-navbar-brand-text">{{ appName }}</span>
            <!-- <img src={logo_text} alt="Brand Text" className="app-navbar-brand-text" /> -->
        </div>
    </nav>
</template>

<script>
import AppNavLink from "@/atoms/AppNavLink";
import { mapState } from "vuex";
import logoImg from "@/assets/logo.png";

export default {
    name: "app-navbar",
    components: {
        "app-nav-link": AppNavLink
    },
    data() {
        return {
            isNavbarOpen: false,
            logoImg
        };
    },
    methods: {
        toggleNavbar(event) {
            event.preventDefault();
            this.isNavbarOpen = !this.isNavbarOpen;
        }
    },
    computed: {
        ...mapState(["appName"])
    }
};
</script>
