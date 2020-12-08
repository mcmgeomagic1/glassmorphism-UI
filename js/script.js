	let botao = document.querySelector('.btn')
	let glass = document.querySelector('.glass')
    let fechaContexto = document.querySelector('.fecha')
    let caracaoDiv = document.querySelector('.coracao-div')
    let coracao = document.querySelector('.coracao')
    let coracaoActivo = document.querySelector('.coracao-activo')

	botao.addEventListener("click", ()=>{
		glass.style.display = "block";
		glass.style.animation = "zoomOne .2s ease-in-out"
		botao.style.display = "none"
	})

	fechaContexto.addEventListener("click", ()=>{
		glass.style.animation = "zoomOne2 .4s ease-in-out"
		setTimeout(esperaEFecha, 200)
	})

	const esperaEFecha =()=> {
		glass.style.display = "none"
		botao.style.display = "block"
	}

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
