<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>O nome é <strong>{{ nome }}</strong></p>
        <p>A idade é <strong>{{ idade }}</strong></p>
        <button @click="alteraNome">Alterar Nome</button>
        <hr>
        <div class="componentes">

            <app-usuario-info 
                :nome="nome" 
                :reiniciarFn="reiniciarNome"
                :idade="idade"
                @nomeMudou="nome = $event"
            />

            <!-- @idadeMudou="idade= $event" -->
            <app-usuario-editar 
            :idade="idade"
            :reiniciarIdade = "reiniciarIdade"
            
            />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data(){
        return{
            nome: 'Pedro',
            idade: 22
        }
    },
    methods:{
        alteraNome(){
            this.nome = 'Ana';
        },
        reiniciarNome(){
            this.nome = 'Pedro';
        },
        reiniciarIdade(){
            this.idade = 22;
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
