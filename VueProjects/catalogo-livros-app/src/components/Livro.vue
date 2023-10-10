<template>
    <div class="livro">
        <h3>{{ info.titulo }}</h3>
        <p>Autor: {{ info.autor }}</p>
        <button v-if="!info.lido" @click="adicionarLeitura">Adicionar à Leitura</button>
    </div>
</template>
  
<script>
export default {
    props: {
        info: Object,
    },
    methods: {
        adicionarLeitura() {
            this.$emit("adicionar-leitura");
        },
    },
};
</script>
  
<style scoped>
.livro {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
}
</style>