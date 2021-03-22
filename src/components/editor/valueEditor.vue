<template>
<div>
    <p v-for="(value, key) in values" :key="key">
        <input type="text" v-model="values[key]">
    </p>
</div>
</template>

<script>
export default {
    computed: {
        values() {
            return this.$store.state.values;
        }
    }
}
</script>