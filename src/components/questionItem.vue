<template>
    <td class="question-item" 
        :data-issueid="issueid" 
        :class="{available: questions[issueid][valueid].available}" 
        :data-valueid="valueid" 
        style="cursor:default">
        {{value}}
    </td>
</template>

<script>
export default ({
    props: ['value', 'valueid', 'issueid', 'questions'],
    methods: {
        selectQuestion: function(event) {
            this.$store.commit('selectQuestion', [event.target.dataset.issueid, event.target.dataset.valueid]);
        }
    }
});
</script>