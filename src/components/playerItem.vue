<template>
<div class="alert alert-primary">
    <div class="row">
        <div class="col-sm-6">
            <i class="bi bi-x-circle-fill text-danger" v-if="editMode" @click="deletePlayer" :data-id="id" ></i>
            {{player.name}}
        </div>
        <div class="col-sm-6 text-end">
            <strong>{{player.points}}</strong>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: [ 'player', 'id' ],
    computed: {
        editMode() { return this.$store.state.editMode}
    },
    methods: {
        deletePlayer: function(event) {
            this.$store.commit('deletePlayer', event.target.dataset.id );
        }
    }
}
</script>