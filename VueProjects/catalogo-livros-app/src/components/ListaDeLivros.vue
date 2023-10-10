<template>
    <div>
        <h2>Lista de Livros</h2>
        <div v-for="(livro, index) in livros" :key="index">
            <livro :info="livro" @adicionar-leitura="adicionarLeitura(livro)" />
        </div>
    </div>
</template>
  
<script>
import Livro from "./Livro.vue";

export default {
    components: {
        Livro,
    },
    data() {
        return {
            livros: [
                { titulo: "Livro 1", autor: "Autor 1", lido: false },
                { titulo: "Livro 2", autor: "Autor 2", lido: false },
                { titulo: "Livro 3", autor: "Autor 3", lido: false },
            ],
        };
    },
    methods: {
        adicionarLeitura(livro) {
            livro.lido = true;
        },
    },
};
</script>