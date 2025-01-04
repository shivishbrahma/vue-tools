<style lang="scss" scoped>
.app-form-control {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }
}
</style>

<template>
    <app-page-section sectionTitle="BMI Calculator">
        <div class="app-form flex flex-col gap-4">
            <div class="app-form-group flex gap-2 items-center">
                <label class="app-form-label w-20" for="age">Age</label>
                <input
                    class="app-form-control border w-20 p-2 text-right"
                    type="number"
                    v-model="age"
                    placeholder="Age in years"
                />
            </div>
            <div class="app-form-group flex gap-2 items-center">
                <label class="app-form-label w-20" for="weight">Weight</label>
                <input
                    class="app-form-control border w-20 p-2 text-right"
                    type="number"
                    v-model="weight"
                    placeholder="Weight in kg"
                />
                <span class="w-5 pr-2">kg</span>
                <input
                    class="app-form-control border w-20 p-2 text-right"
                    type="number"
                    v-model="weight_pound"
                    placeholder="Weight in pounds"
                />
                <span class="w-5 pr-2">lbs</span>
            </div>
            <div class="app-form-group flex gap-2 items-center">
                <label class="app-form-label w-20" for="height">Height</label>
                <input
                    class="app-form-control border w-20 p-2 text-right"
                    type="number"
                    v-model="height"
                    placeholder="Height in cm"
                />
                <span class="w-5 pr-2">cm</span>
                <input
                    class="app-form-control border w-20 p-2 text-right"
                    type="number"
                    v-model="height_inch"
                    placeholder="Height in inches"
                />
                <span class="w-5 pr-2">in</span>
            </div>
            <div class="app-form-group flex gap-2">
                <label class="app-form-label w-20" for="bmi">BMI</label>
                <span :class="bmiLabelColor">{{ bmi }} ({{ bmiLabel }})</span>
            </div>
        </div>
    </app-page-section>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import AppPageSection from "@/molecules/AppPageSection";

export default {
    name: "AboutView",
    components: {
        "app-page-section": AppPageSection
    },
    data() {
        return {
            weight: 80,
            weight_pound: 45,
            height: 175,
            height_inch: 70,
            age: 18
        };
    },
    watch: {
        weight(newWeight) {
            this.weight_pound = newWeight * 2.20462;
        },
        weight_pound(newWeightPound) {
            this.weight = newWeightPound / 2.20462;
        },
        height(newHeight) {
            this.height_inch = newHeight / 2.54;
        },
        height_inch(newHeightInch) {
            this.height = newHeightInch * 2.54;
        }
    },
    mounted() {
        this.setAppTitle({ appTitle: `BMICalc - ${this.appName}` });
    },
    methods: {
        ...mapMutations(["setAppTitle"])
    },
    computed: {
        ...mapState(["appName"]),
        bmi() {
            return this.weight / (this.height / 100) ** 2;
        },
        bmiLabel() {
            if (this.bmi < 18.5) {
                return "Underweight";
            } else if (this.bmi < 24.9) {
                return "Normal";
            } else if (this.bmi < 29.9) {
                return "Overweight";
            } else {
                return "Obese";
            }
        },
        bmiLabelColor() {
            if (this.bmi < 18.5) {
                return "text-blue";
            } else if (this.bmi < 24.9) {
                return "text-green";
            } else if (this.bmi < 29.9) {
                return "text-yellow";
            } else {
                return "text-red";
            }
        }
    }
};
</script>
