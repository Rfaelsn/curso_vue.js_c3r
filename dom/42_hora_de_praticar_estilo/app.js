new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		perigo: true,
		classe3: '',
		classe4: '',
		cor5: '',
		estilo5:{
			width: '100px',
			height: '100px'
		},
		width: '0',
	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{
				this.classe1 = this.classe1 == 'destaque' ?
				'encolher':'destaque' ;
			},1000)
		},
		setPerigo(event){
			if (event.target.value == 'true') {
				this.perigo = true;
			} else if (event.target.value == 'false'){
				this.perigo = false;
			}
		},
		iniciarProgresso() {
			let progresso = 0;
			const intervalo = setInterval(()=>{
				progresso += 5;
				this.width = `${progresso}%`
				if(progresso == 100){
					clearInterval(intervalo);
				}
			},500);
		}
	}
})
