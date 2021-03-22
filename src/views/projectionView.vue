<template>
    <div class="container projection">
      <div class="row">
          <div class="col-md-9">
              <div class="card">
                <div class="card-header">
                  Otázky
                </div>
                <div class="card-body">
                  <question-table :clickable="false"></question-table>                
                </div>              
                
              </div>
              <br>
              <div class="card question" v-if="selectedQuestion">
                <div class="card-header">
                  Otázka <strong>{{ issues[selectedQuestion[0]] }}</strong> za <strong>{{ values[selectedQuestion[1]] }}</strong> bodů
                </div>
                <div class="card-body question">
                  {{ questions[selectedQuestion[0]][selectedQuestion[1]].question}} 
                </div>              
              </div>
          </div>
          <div class="col-md-3">
            <h1>Riskuj!</h1>
            <div class="card">
              <div class="card-header">
                Hráči
              </div>
              <div class="card-body">
                <div class="alert alert-primary" v-bind:key="index" v-for="(player, index) in players" v-bind:class="{ 'active-player': index==selectedPlayer }">
                  <div class="row">
                    <div class="col-sm-6">
                      {{player.name}}
                    </div>
                    <div class="col-sm-6 text-end">
                      <strong>{{player.points}}</strong>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import questionTable from '../components/questionTable.vue';
import currentQuestion from '../components/currentQuestion.vue';
  
export default {
  components: {  questionTable, currentQuestion},
  created() {
                document.title = "Projekce - Skautské riskuj";
  },
  computed: {
    questions() {return this.$store.state.questions},
    values() {return this.$store.state.values},
    issues() {return this.$store.state.issues},
    players() {return this.$store.state.players},
    selectedQuestion() {return this.$store.state.selectedQuestion},
    selectedPlayer() {return this.$store.state.selectedPlayer},
  }
}
</script>