<template>
    <div class="container">
      <navbar appname="Skautské riskuj"></navbar>
      <div class="row">
          <div class="col-md-3">
              <div class="card">
                <div class="card-header">
                  Témata
                </div>
                <div class="card-body">
                  <theme-editor></theme-editor>
                </div>              
              </div>

              <br>
              <div class="card">
                <div class="card-header">
                  Body
                </div>
                <div class="card-body">
                  <value-editor></value-editor>
                </div>              
              </div>

              <br>
              <div class="card">
                <div class="card-header">
                  Soubory
                </div>
                <div class="card-body">
                  <p><a href="#/editor" @click="saveQuestions">Uložit otázky do souboru</a></p>
                  <p>
                    Načtení souboru:
                    <input type="file" id="selectFiles" value="Import" /><br />
                    <button @click="loadQuestions">Načíst</button>
                  </p>
                </div>              
              </div>
          </div>
          <div class="col-md-9">
            <question-editor></question-editor>
          </div>
    </div>
  </div>  
</template>

<script>
  import Navbar from '../components/navbar.vue';
  import ThemeEditor from '../components/editor/themeEditor.vue';
  import ValueEditor from '../components/editor/valueEditor.vue';
  import QuestionEditor from '../components/editor/questionEditor.vue'
  
  export default ({
      components: { Navbar, ThemeEditor, ValueEditor, QuestionEditor },
      created () {
        this.$store.commit('initPictures');
      },
      methods: {
        saveQuestions() {
          var dataset = {
            issues: this.$store.state.issues,
            values: this.$store.state.values,
            questions: this.$store.state.questions,
          }
          var content = JSON.stringify(dataset);
          var a = document.createElement("a");
          var file = new Blob([content], {type: "application/json"});
          a.href = URL.createObjectURL(file);
          a.download = "otazky.json";
          a.click();
          return false;
        },
        loadQuestions() {
          var files = document.getElementById('selectFiles').files;
          
          if (files.length <= 0) {
            return false;
          }
          
          var fr = new FileReader();
  
          var _this = this;
          fr.onload = function(e) { 
          console.log(e);
            var result = JSON.parse(e.target.result);
            _this.$store.state.questions = result.questions;
            _this.$store.state.values = result.values;
            _this.$store.state.issues = result.issues;
          }
          
          fr.readAsText(files.item(0));
          this.$store.commit('initPictures');
        }
        
      }
  })
</script>