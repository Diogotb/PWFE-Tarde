<template>
<div id="app">
    <header>
      <h1>Catálogo de Livros</h1>
    </header>
    <main>
      <ListaDeLivros />
      <ListaDeLeitura />
    </main>
    <footer>
      <p>Desenvolvido com Vue.js</p>
    </footer>
  </div>
</template>

<script>
import ListaDeLivros from "@/components/ListaDeLivros.vue";
import ListaDeLeitura from "@/components/ListaDeLeitura.vue";

export default {
  components: {
    ListaDeLivros,
    ListaDeLeitura,
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

main {
  display: flex;
  justify-content: space-around;
}

footer {
  background-color: #35495e;
  color: #fff;
  padding: 10px 0;
}
</style>