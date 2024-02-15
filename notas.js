       //Notas JS//
    
    //Obter valores inseridos pelo usuário//
const formEl = document.getElementById("form")
const nomeEl = document.getElementById("nome")
const notaUmEl = document.getElementById("nota-um")
const notaDoisEl = document.getElementById("nota-dois")
const mediaEl = document.getElementById("media")
const situacaoEl = document.getElementById("situacao")

   //Captura valores inseridos pelo usuário//
    formEl.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = nomeEl.value
    const notaUm = parseFloat(notaUmEl.value)
    const notaDois = parseFloat(notaDoisEl.value)

    //Condições//
    if(nome ==""){
    alert("Por favor, insira um nome!")
    nomeEl.focus()
    return
  }

  // O símbolo || significa OU//
    if(isNaN(notaUm)||isNaN(notaDois)){
    alert("Por favor, insira as notas!")
    return
  }

    //Soma das notas(Importante)//
    //O () serve para criar uma ordem de precedência//
    //Soma direta//
    const media = (notaUm + notaDois) / 2

    mediaEl.textContent="Média das notas: " + media.toFixed(2)
    mediaEl.innerHTML = "<p class='bg-indigo-200 p-3 font-bold'>
    Média das notas " + media.toFixed(1)+"</p>"
    mediaEl.innerHTML = `<p class='bg-indigo-200 p-3 font-bold'>
    Média das notas: ${media.toFixed(1)}</p>`;
  
     //Condição pra ver se o aluno tá aprovado ou reprovado//
    if(media >=5){
    situacaoEl.innerHTML = `<p class="bg-blue-500 text-white-400 p-3 font-bold">
    Parabéns ${nome}! Você foi aprovado(a)! </p>` 

    }else if(media>=4){
    situacaoEl.innerHTML = `<p class="bg-yellow-500 text-white-400 p-3 font-bold">
    Opa ${nome}! Você está de recuperação!</p>`
  
    }else{
    situacaoEl.innerHTML =  `<p class="bg-red-500 text-white-400 p-3 font-bold">
    Sinto muito ${nome}! Você está reprovado(a)!</p>`
  }
  }) 

  //Essa função é útil para calcular a média escolar de um aluno//
  //A função oferece uma abordagem mais modular e reutilizável para o cálculo da média //
  function mediaEscolar(notaUm, notaDois){
    return(notaUm + notaDois) / 2
  }
