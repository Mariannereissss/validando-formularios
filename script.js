 
const form = document.querySelector('.form');
const botao = document.querySelector('.bot');

function verificacao(event) {  
    event.preventDefault()
            
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;
    const p = document.getElementById('mensagens');
    const pNome = document.getElementById('msgnome');
    const pEmail = document.getElementById('msgemail'); 
    const pIdade = document.getElementById('msgidade'); 

    let erros = '';

    if(nome.trim() === '') {
        pNome.textContent = "Preencha o nome";
        pNome.style.color = 'red';
        erros = 'error';
    } else {
        pNome.textContent = "";
    };

    if(!email.includes("@") || !email.includes(".com")) {
        pEmail.textContent = "Email inválido";
        pEmail.style.color = 'red';
        erros='error'
    } else {
        pEmail.textContent = "";
    };

    if(idade < 18) {
        pIdade.textContent = "Precisa ter mais de 18 anos";
        pIdade.style.color = 'red';
        erros = 'error'
    }else {
        pIdade.textContent = "";
    };

    if(erros === '') {
        p.textContent = 'Formulário enviado com sucesso';
        p.style.color = 'green';

        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('idade').value = '';

        } else {
            p.textContent = 'Preencha todos os campos corretamente';
            p.style.color = 'red';
        }
};

botao.addEventListener('click', verificacao);
