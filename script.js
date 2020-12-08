	let botao = document.querySelector('.btn')
	let glass = document.querySelector('.glass')
    let fechaContexto = document.querySelector('.fecha')
    let coracao = document.querySelector('.coracao')

	botao.addEventListener("click", ()=>{
		glass.style.display = "block";
		botao.style.display = "none"
	})

	fechaContexto.addEventListener("click", ()=>{
		glass.style.display = "none"
		botao.style.display = "block"
	})

	coracao.addEventListener("click", ()=> {
		
		if(coracao.style.color == "red") {
			coracao.style.color = "#fff"
			coracao.style.fontWeight = 0
			coracao.style.opacity= .7
		}else{
			coracao.style.color="red"
			coracao.style.fontWeight = "bold"
			coracao.style.opacity= 1
		}
		
	})
