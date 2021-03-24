<template>
<div>
    <div class="card">
        <div class="card-header">
            Aktuální otázka
        </div>
        <div class="card-body">
            <div v-if="selectedQuestion">
                <p>
                    <strong>Otázka:</strong><br>
                    {{ selectedQuestion.question}} 
                </p>
                <p>
                    <strong>Správná odpověď:</strong><br>
                    {{ selectedQuestion.answer}}
                </p>
                <p>
                    <strong>Odpovídá:</strong><br>
                    <span v-for="(player, id) in players" :key="id" >
                        <button @click="selectPlayer"  :data-id="id" :class="{ 'btn-danger': id==selectedPlayer }"  class="btn btn-sm btn-info">{{player.name}}</button>&nbsp;
                    </span>  
                </p>
                <p v-if="selectedPlayer">
                    <strong>Odpověď:</strong><br>
                    <button @click="CorrectAnswer" class="btn btn-success">Správně</button>
                    <button @click="BadAnswer" class="btn btn-danger">Spatně</button>
                </p>
                <p>
                    <button class="btn btn-secondary" v-on:click="Cancel">Storno</button>
                    <button class="btn btn-danger" v-on:click="NobodyKnows">Nikdo neví</button>
                </p>
            </div>
        </div>
    </div>
    <br>
    <div class="card" v-if="selectedQuestion && selectedQuestion.picture">
        <div class="card-header">
            Obrázek
        </div>
        <div class="card-body">
            <img :src="selectedQuestion.picture">
        </div>
    </div>
</div>
</template>

<script>
    export default {
        computed: {
            questions() {return this.$store.state.questions;},
            selectedQuestion() {
                if (this.$store.state.selectedQuestion) {
                    var sq = this.$store.state.selectedQuestion;
                    return this.$store.state.questions[sq[0]][sq[1]];
                }
                return null;
            },
            selectedPlayer() {return this.$store.state.selectedPlayer;},
            players() {return this.$store.state.players;},
        },
        methods: {
            Cancel: function() {
                this.$store.commit('cancel');
            },
            NobodyKnows: function() {
                this.$store.commit('nobodyKnows');
            },
            CorrectAnswer: function() {
                this.$store.commit('correctAnswer');
            },
            BadAnswer: function() {
                this.$store.commit('badAnswer');
            },
            selectPlayer: function(event) {
                this.$store.commit('selectPlayer', event.target.dataset.id);
            }
        }
    }
</script>

<style>
    .card-body img {
        max-width: 100%;
    }
</style>