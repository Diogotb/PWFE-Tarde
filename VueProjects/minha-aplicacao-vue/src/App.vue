<template>
  <div id="app">
    <header>
      <h1>Lista de Tarefas</h1>
    </header>
    <main>
      <ListaDeTarefas />
    </main>
    <footer>
      <p>Desenvolvido com Vue.js</p>
    </footer>
  </div>
</template>

<script>
import ListaDeTarefas from "@/components/ListaDeTarefas.vue";

export default {
  components: {
    ListaDeTarefas,
  },
};
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

footer {
  background-color: #35495e;
  color: #fff;
  padding: 10px 0;
}
</style>