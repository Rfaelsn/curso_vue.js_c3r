<template>
	<div id="app">
		<span>
			<button class="vermelho" @click="compDinamico = 'VermelhoApp'">Carregar Componente Vermelho</button>
			<button class="verde" @click="compDinamico = 'VerdeApp'">Carregar Componente Verde</button>
			<button class="azul" @click="compDinamico = 'AzulApp'">Carregar Componente Azul</button>
		</span>
		
	
		<component :is="compDinamico">
			<span>Conteúdo do componente <strong>{{ compDinamico.slice(0,-3) }}</strong></span>
		</component>
	</div>
</template>

<script>
import VermelhoApp from './components/VermelhoApp.vue'
import VerdeApp from './components/VerdeApp.vue'
import AzulApp from './components/AzulApp.vue'

export default {
	name: 'app',
	components: { VermelhoApp, VerdeApp, AzulApp },
	data(){
		return{
			compDinamico: 'VermelhoApp'
		}
	}
}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	button {
		padding: 10px;
		color: #FFF;
		font-size: 1.3rem;
	}

    .caixa {
        color: #FFF;
        font-size: 1.8rem;
        padding: 25px;
		margin: 10px 0px;
    }

	.vermelho {
        border: 2px solid red;
        background-color: #f54235;
    }

	.verde {
        border: 2px solid green;
        background-color: #49b057;
    }

	.azul {
        border: 2px solid blue;
        background-color: #2594f0;
    }
</style>
