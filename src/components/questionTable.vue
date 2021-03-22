<template>
    <table class="tbl question-table">
        <tbody v-if="clickable">
            <tr v-for="(issue, issueid) in issues" :key="issueid">
                <th class="issue">{{issue}}</th>
                <question-item-clickable 
                    v-for="(value, valueid) in values" 
                    :valueid="valueid" 
                    :questions="questions"
                    :issueid="issueid" 
                    :value="value"
                    :key="valueid" 
                    >
                </question-item-clickable>
            </tr>
        </tbody>
        <tbody v-if="!clickable">
            <tr v-for="(issue, issueid) in issues" :key="issueid">
                <th class="issue">{{issue}}</th>
                <question-item 
                    v-for="(value, valueid) in values" 
                    :valueid="valueid" 
                    :questions="questions"
                    :issueid="issueid" 
                    :value="value"
                    :key="valueid" 
                    >
                </question-item>
            </tr>
        </tbody>
    </table>
</template>
  
<script>
   import questionItem from './questionItem.vue';
   import questionItemClickable from './questionItemClickable.vue';
   export default ({
       computed: {
           issues() {return this.$store.state.issues},
           values() {return this.$store.state.values},
           questions() {return this.$store.state.questions}
       },
       props:  {
         clickable: {
            type: Boolean,
            default: true
         }
       },
       components: { questionItem, questionItemClickable },
   })
</script>