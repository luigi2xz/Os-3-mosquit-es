const botoes = document.querySelectorAll('.objetivos')
// botoes.length

for(let i = 0; i < botoes.length; i++ ){
console.log(i);
botoes[i].classList.add('ativo');
botoes[i].classList.remove('ativo');
}