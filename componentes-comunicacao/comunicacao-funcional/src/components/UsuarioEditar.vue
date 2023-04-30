<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>idade do usuário <strong>{{ idadeLocal }}</strong></p>
        <button @click="alterarIdade">Alterar Idade</button>
        <button @click="reiniciarIdade">Reiniciar Idade</button>
    </div>
</template>

<script>
import barramento from '@/barramento';
export default {
    props:{
        idade: Number,
        reiniciarIdade: Function
    },
    data(){
        return{
            idadeLocal: this.idade
        }
    },
    methods:{
        alterarIdade(){
            // this.$emit('idadeMudou',33);s
            this.idadeLocal = 33
            // barramento.$emit('idadeMudou',this.idadeLocal);
            barramento.alterarIdade(this.idadeLocal);
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
