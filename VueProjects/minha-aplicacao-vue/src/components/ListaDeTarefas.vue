<template>
    <div class="lista-tarefas">
      <h2>Minhas Tarefas</h2>
      <input v-model="novaTarefa" @keyup.enter="adicionarTarefa" placeholder="Digite uma nova tarefa" />
      <ul>
        <li v-for="(tarefa, index) in tarefas" :key="index">
          {{ tarefa }}
          <button @click="removerTarefa(index)">Remover</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        novaTarefa: "",
        tarefas: [],
      };
    },
    methods: {
      adicionarTarefa() {
        if (this.novaTarefa.trim() !== "") {
          this.tarefas.push(this.novaTarefa);
          this.novaTarefa = "";
        }
      },
      removerTarefa(index) {
        this.tarefas.splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped>
  .lista-tarefas {
    margin: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 10px 0;
  }
  </style>