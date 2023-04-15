new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(){
            alert('Botão foi clicado');
        },
        escreveValor(event){
            this.valor = event.target.value;
        },
    
    }
})