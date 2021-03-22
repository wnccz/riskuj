<template>
    <div class="card">
        <div class="card-header">
            Aktuální otázka
        </div>
        <div class="card-body">
            <div v-if="selectedQuestion">
                <p>
                    <strong>Otázka:</strong><br>
                    {{ questions[selectedQuestion[0]][selectedQuestion[1]].question}} 
                </p>
                <p>
                    <strong>Správná odpověď:</strong><br>
                    {{ questions[selectedQuestion[0]][selectedQuestion[1]].answer}}
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
</template>

<script>
    export default {
        computed: {
            questions() {return this.$store.state.questions;},
            selectedQuestion() {return this.$store.state.selectedQuestion;},
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