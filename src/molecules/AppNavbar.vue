<style lang="scss" scoped>
.app-navbar {
    background: var(--primaryBg);
    @apply px-3 py-2 flex gap-2 h-16;

    .app-navbar-brand {
        @apply flex gap-3 ml-auto items-center;

        .app-navbar-brand-logo {
            @apply inline-block w-12 h-12;
        }

        .app-navbar-brand-text {
            @apply inline-block text-xl;
        }
    }

    .app-navbar-list {
        @apply flex gap-2 list-none items-center;

        .app-navbar-item a {
            @apply no-underline;
        }
    }

    .app-navbar-toggler {
        @apply hidden;
    }
}

@media screen and (max-width: 600px) {
    .app-navbar {
        .app-navbar-brand {
            .app-navbar-brand-text {
                @apply hidden;
            }
        }
    }
}

@media screen and (max-width: 428px) {
    .app-navbar {
        .app-navbar-list {
            // display: none;
            // transition: transform ease-in-out 1s;
            // transform: translate(100%, 100%);
            @apply hidden transition-transform ease-in-out duration-1000 transform translate-x-full;
        }

        .app-navbar-toggler {
            @apply flex items-center;
        }
    }

    .app-navbar.active {
        .app-navbar-list {
            background: var(--primaryBg);
            @apply flex flex-col justify-center items-center gap-4 w-full h-full top-0 left-0 absolute z-10 translate-x-0 translate-y-0;

            .app-navbar-item {
                @apply w-full max-w-xs;
            }
        }

        .app-navbar-toggler {
            @apply top-4 left-4 absolute z-20;
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
