<template>
  <div class="footer-2"> 
      <h1>footer-2Component</h1>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({})
  export default class Footer2Component extends Vue {

    mounted (){
      console.log('hello from app');
    }
    
  }

</script>

<style scoped lang="scss">
  .footer-2 {

  }
</style>
