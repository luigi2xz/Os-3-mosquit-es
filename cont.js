const botoes = document.querySelectorAll('.objetivos')
const texto = document.querySelectorAll('.aba-conteudo')
// botoes.length

for(let i = 0; i < botoes.length; i++ ){
console.log(i);
botoes[i].onclick = function(){
    for(let j = 0; j < botoes.length; j++ ){
        botoes[j].classList.remove('ativo');
        texto[j].classList.remove('ativa');
    }
    botoes[i].classList.add('ativo');
    texto[i].classList.add('ativa');
}

// botoes[i].classList.remove('ativo');
}

const contadores = document.querySelectorAll('.contador');