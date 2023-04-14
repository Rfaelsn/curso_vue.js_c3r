new Vue({
    el:'#desafio',
    data:{
        nome: 'Rafael',
        idade: 21,
        imgWalpaper: 'https://wallpapers.com/images/featured/tsfc7k18e4nwbwwb.jpg'
    },
    methods:{
        multiplicaIdade(){
            return (this.idade*3);
        },
        geraNumeroRamdom(){
            return Math.random();
        }
    }
});