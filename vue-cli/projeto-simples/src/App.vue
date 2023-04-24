<template>
  <div id="app">
    {{ titulo }}
    <button @click="titulo += '##'">Alterar</button>
  </div>
</template>

<script>
//aqui será a nossa 'instância vue'
export default {
  // deve ser uma função pois o projeto trabalha com componentes
  data: function(){
    return{
      titulo: 'Teste data usando vue.js'
    }
  }
}
</script>

<style>
  #app{
    background-color: aqua;
    color: black;
  }
</style>