<template>
    <div>
        <h2>Lista de Leitura</h2>
        <ul>
            <li v-for="(livro, index) in livrosLidos" :key="index">{{ livro.titulo }}</li>
        </ul>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            livrosLidos: [],
        };
    },
    watch: {
        $root: {
            handler: "adicionarLivroLido",
            deep: true,
        },
    },
    methods: {
        adicionarLivroLido(livro) {
            if (livro.lido) {
                this.livrosLidos.push(livro);
            }
        },
    },
};
</script>