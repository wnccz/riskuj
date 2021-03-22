<template>
    <div>
        <div v-for="(issue, issueid) in issues" :key="issueid">
            <h3>{{issue}}</h3>
            <div v-for="(value, valueid) in values" :key="valueid">
                <p>
                    <strong>{{value}}</strong><br>
                    <textarea v-model="questions[issueid][valueid].question" style="width: 100%"></textarea><br>
                    <input v-model="questions[issueid][valueid].answer" style="width: 100%">
                </p>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    computed: {
        issues() {
            return this.$store.state.issues;
        },
        values() {
            return this.$store.state.values;
        },
        questions() {
            return this.$store.state.questions;
        }
    }
}
</script>