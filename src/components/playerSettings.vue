<template>
    <div class="card">
        <div class="card-header">
            Hráči
        </div>
        <div class="card-body">
            <player-item :player="player" :key="index" :id="index" v-for="(player, index) in players"></player-item>
            <div class="d-flex">
                <input v-model="inPlayerName" placeholder="Jméno hráče" ref="inPlayerName" class="form-control mb-1 me-1">
                <button @click="addPlayer" class="btn btn-success mb-1">Přidat</button>
            </div>
        </div>
    </div>
</template>

<script>
import playerItem from './playerItem.vue';
export default {
  components: { playerItem },
    data: function() {
        return {
            inPlayerName: ''
        }
    },
    computed: {
        players() {return this.$store.state.players;}
    },
    methods: {
        addPlayer: function() {
            this.$store.commit('addPlayer',  this.inPlayerName);
            this.inPlayerName = '';
            this.$refs.inPlayerName.focus();
        }
    }
}
</script>