<style lang="scss">
.app-page-section-container {
    padding: 0.5rem;
    p {
        margin-bottom: 0.5rem;
    }
    h3 {
        margin-bottom: 0.25rem * 3;
        margin-top: 0.5rem * 3;
    }
    li {
        margin-bottom: 0.25rem;
    }
}
</style>
<template lang="html">
    <AppPageSection sectionTitle="About Us">
        <p>Welcome to {{ appName }} - Your Ultimate Destination for Web Development Tools!</p>

        <p>
            At {{ appName }}, we are passionate about empowering developers of all levels with the tools they need to
            streamline their coding journey and bring their web projects to life. Our mission is to simplify the
            development process and enhance your coding experience by offering a comprehensive range of cutting-edge web
            development tools.
        </p>

        <h3>Why Choose {{ appName }}?</h3>

        <ul>
            <li>
                <strong>🚀 Efficiency at Your Fingertips</strong>: Say goodbye to the hassle of searching for different
                tools across the internet. We've curated a collection of essential and advanced web development tools,
                ensuring you have everything you need to code efficiently and effectively, all in one place.
            </li>

            <li>
                <strong>🛠️ Versatile Toolset</strong>: Whether you're a beginner taking your first steps in coding or a
                seasoned developer working on complex projects, our diverse array of tools caters to every skill level
                and project requirement. From code editors to validators, generators to analyzers, we've got you
                covered.
            </li>

            <li>
                <strong>🌐 Cross-Platform Compatibility</strong>: Our tools are designed to seamlessly integrate into
                your workflow, whether you're developing for desktop, tablet, or mobile. No matter the platform, you'll
                have the tools you need to create responsive and dynamic web applications.
            </li>

            <!-- <li>
                🤝 Collaboration Made Easy: Share your projects with colleagues and collaborate effortlessly. Our
                collaboration features allow you to work in tandem with your team, making the development process
                smoother and more productive.
            </li>

            <li>
                🔒 Secure Coding Practices: We understand the importance of security in web development. That's why our
                tools are built with security best practices in mind, helping you write clean, secure, and robust code.
            </li> -->
        </ul>

        <h3>Explore Our Tool Categories:</h3>

        <ul>
            <!-- <li>
                ⌨️ Code Editors: Craft your code with precision using our feature-rich code editors. Benefit from syntax
                highlighting, autocompletion, and a host of other features that enhance your coding experience.
            </li> -->

            <li>
                <strong>🔍 Code Validators</strong>: Ensure your code meets industry standards and is error-free with
                our code validators. Catch issues early and deliver polished, error-free web applications.
            </li>

            <!-- <li>
                📝 Code Generators: Generate boilerplate code, snippets, and templates to jumpstart your projects and
                save valuable time during development.
            </li>

            <li>
                📊 Code Analyzers: Optimize your code for performance, efficiency, and maintainability. Our code
                analyzers provide insights into your codebase, helping you make informed improvements.
            </li> -->
        </ul>

        <!-- <h3>Join Our Community:</h3>

        <p>
            At {{ appName }}, we're more than just a platform – we're a community of developers who share a passion for
            coding excellence. Join our community to connect with like-minded individuals, exchange ideas, seek advice,
            and learn from each other's experiences.
        </p>

        <p>
            Start your journey towards more efficient and enjoyable web development today. Explore our tools, join our
            community, and take your coding skills to new heights with {{ appName }}.
        </p>

        <p>Happy Coding!</p> -->
    </AppPageSection>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import AppPageSection from "@/molecules/AppPageSection";

export default {
    name: "AboutView",
    components: {
        AppPageSection
    },
    mounted() {
        this.setAppTitle({ appTitle: `About - ${this.appName}` });
    },
    methods: {
        ...mapMutations(["setAppTitle"])
    },
    computed: {
        ...mapState(["appName"])
    }
};
</script>
