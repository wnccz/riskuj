<template>
    <div class="container">
      <navbar appname="Skautské riskuj"></navbar>
      <div class="row">
          <div class="col-md-5">
              <div class="card">
                <div class="card-header">
                  Otázky
                </div>
                <div class="card-body">
                    <question-table></question-table>                
                </div>              
              </div>
          </div>
          <div class="col-md-4">
            <current-question></current-question>
            <br>
            <div class="card" v-if="editMode">
              <div class="card-header">
                Ovládání
              </div>
              <div class="card-body">
                <a href="#" v-on:click="ResetGame">Resetovat hru</a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <player-settings></player-settings>
          </div>
    </div>
  </div>  
</template>

<script>
  import Navbar from '../components/navbar.vue';
  import questionTable from '../components/questionTable.vue';
  import currentQuestion from '../components/currentQuestion.vue';
  import playerSettings from '../components/playerSettings.vue';

  export default ({
      components: { Navbar, questionTable, currentQuestion, playerSettings },
      computed: {
          editMode() { return this.$store.state.editMode}
      },
      methods: {
          ResetGame(event) {
            this.$store.commit('resetGame');
          }
      }
  })
</script>