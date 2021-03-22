<template>
    <div class="card">
        <div class="card-header">
            Hráči
        </div>
        <div class="card-body">
            <player-item :player="player" :key="index" :id="index" v-for="(player, index) in players"></player-item>
            <input v-model="inPlayerName" placeholder="Jméno hráče">
            <button @click="addPlayer">Přidat</button>  
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
        }
    }
}
</script>