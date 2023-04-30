<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário <strong>{{ inverterNome() }}</strong></p>
        <p>idade do usuário <strong>{{ idadeLocal }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar (Função CallBack)</button>
    </div>
</template>

<script>
import barramento from '@/barramento';
export default {
    // props:['nome'],
    props:{
        //nome: String
        nome:{
            type: String,
            required: true
            //default:'Anônimo'
            // default: () =>{
            //     return Array(10).fill(0).join(',');
            // }
        },
        reiniciarFn: Function,
        idade: Number
    },
    data(){
        return{
            idadeLocal: this.idade
        }
    },
    methods:{
        inverterNome(){
            return this.nome.split('').reverse().join('');
        },
        reiniciarNome(){
            // const valorAntigo = this.nome;
            const novoNome = 'Pedro';
            this.$emit('nomeMudou', novoNome);
            // this.$emit('nomeMudou', {
            //     novoNome,
            //     valorAntigo
            // });
        }
    },
    created(){
        barramento.$on('idadeMudou', idade =>{
              this.idadeLocal = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
