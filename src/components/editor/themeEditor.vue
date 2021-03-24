<template>
<div>
    <p v-for="(issue, key) in issues" :key="key">
        <input type="text" class="form-control" v-model="issues[key]">
    </p>
</div>
</template>

<script>
export default {
    computed: {
        issues() {
            return this.$store.state.issues;
        }
    }
}
</script>