<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/filmes">Catalogo Filmes</router-link> |
        <router-link to="/livros">Catalogo Livros</router-link> |
      </nav>
    </header>
    <main>
      <component :is="currentView" />
    </main>
  </div>
</template>

<script>
import CatalogoDeFilmes from "@/components/CatalogoDeFilmes.vue";
[import { ref, computed } from 'vue'
import HomeC from "@/components/HomeComponent.vue";
import AboutC from "@/components/AboutComponent.vue";
import NotFoundC from "@/components/NotFoundComponent.vue";


const routes = {
  '/': HomeC,
  '/about': AboutC,
  '/filmes': CatalogoDeFilmes,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFoundC
})]
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

header {
  background-color: #35495e;
  color: #fff;
  padding: 10px 0;
}
</style>
