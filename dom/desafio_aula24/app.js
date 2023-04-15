new Vue({
    el:'#desafio',
    data:{
        nome: 'Rafael',
        idade: 21,
        imgWalpaper: 'https://img.freepik.com/vetores-gratis/moldura-oriental-vermelha-vetor-de-ilustracao-de-nuvem-chinesa_53876-140200.jpg?w=740&t=st=1681436041~exp=1681436641~hmac=54074ea87f56a6b6b969a20f20a4ca5cc3d00304cf1f42e6016d0006635a93ce'
    },
    methods:{
        triplicaIdade(){
            return (this.idade*3);
        },
        geraNumeroRamdom(){
            return Math.random();
        }
    }
});