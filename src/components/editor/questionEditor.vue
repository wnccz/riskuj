<template>
    <div>
        <div class="card" v-for="(issue, issueid) in issues" :key="issueid" style="margin-bottom: 2em">
            <div class="card-header">{{issue}}</div>
            <div class="card-body">
                <div v-for="(value, valueid) in values" :key="valueid" >
                    <p>
                        <strong>{{value}}</strong><br>
                        <textarea class="form-control" v-model="questions[issueid][valueid].question"></textarea>
                        <input v-model="questions[issueid][valueid].answer" class="form-control">
                    </p>
                </div>
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