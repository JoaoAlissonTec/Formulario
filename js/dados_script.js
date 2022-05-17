function enviar(){

    let nome = document.querySelector("input#txtnome")
    let idade = document.querySelector("input#txtidade")
    let sexo = document.getElementsByName("sex")
    let estc = document.querySelector("select#estc")
    let resultado = document.querySelector("div#result")
    resultado.innerHTML = ""
    let genero = ""
    let civil = estc.options[estc.selectedIndex].text

    if(nome.value.length == 0 || idade.value.length == 0){
        alert("[ERRO] VERIFIQUE SUAS INFORMAÇÕES.")
    }else{
        if(sexo[0].checked){
            genero = "Masculino"
        }else{
            genero = "Feminino"
        }
        resultado.innerHTML += `<p><strong>Nome: </strong><span>${nome.value}</span></p>`
        resultado.innerHTML += `<p><strong>Idade: </strong><span>${idade.value} anos</span></p>`
        resultado.innerHTML += `<p><strong>Gênero: </strong><span>${genero}</span></p>`
        resultado.innerHTML += `<p><strong>Estado civil: </strong><span>${civil}<span>`
    }
}