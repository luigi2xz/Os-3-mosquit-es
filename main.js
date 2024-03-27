alert('Olá, seja bem vindo!');

let Nome_Usuario = '';

let texto = document.querySelector('span');

while (Nome_Usuario == ''){
Nome_Usuario = prompt('Qual o seu nome?');
}

texto.textContent = Nome_Usuario;