<template>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#/">{{appname}}</a>        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page">Panel</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/editor">Editor</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/help">Nápověda</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/projection" class="nav-link active" aria-current="page" target="_blank">Projekce</router-link>
            </li>
          </ul>
          
            
          <p class="d-flex">
               <i class="bi bi bi-gear-fill text-info" v-on:click="toggleEditMode"></i>
          </p>
        </div>
      </div>  
    </nav>
</template>

<script>
export default ({
    props: ['appname'],
    methods: {
      toggleEditMode() {this.$store.commit('toggleEditMode')}
    }
})
</script>
