"use strict";
function Cadastro() {
    let senha1 = document.querySelector('#senha');
    let corfsenha = document.querySelector('#confirsenha');
    let email = document.querySelector('#email');
    if (senha1.value !== '' && corfsenha.value !== '' && email.value !== '') {
        if (senha1.value !== corfsenha.value) {
            alert("As senhas não coincidem. Tente novamente.");
        }
        else {
            // Cadastro bem-sucedido, redirecione para outra página
            window.location.href = "../view/index.html";
        }
    }
    else {
        alert("Por favor, preencha todos os campos.");
    }
}
