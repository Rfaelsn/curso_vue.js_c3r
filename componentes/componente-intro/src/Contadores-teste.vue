<template>
    <div>
        <h1>Contadores</h1>
        <app-contador v-for="c in 5" :key="c"/>
    </div>
</template>

<script>
import Contador from './Contador-teste.vue';
export default {
    components:{
        'app-contador' : Contador
    } 
}
</script>

<style>

</style>