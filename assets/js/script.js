const imagem = document.querySelector("#card_img-img");
const msgEmail = document.querySelector("#email");
const spanMsg = document.querySelector("#msg_email");
const msgSenha = document.querySelector("#senha");
const btnEntrar = document.querySelector("#entrar");

imagem.addEventListener("click", function () {
    if (imagem.src.includes("loginimagem-2")) {
        imagem.src = "./assets/img/loginimagem-1.png";
    } else {
        imagem.src = "./assets/img/loginimagem-2.png";
    }
});

msgEmail.addEventListener("keyup", function () {
    if (msgEmail.value == "") {
        spanMsg.innerText = "Digite um E-mail valido";
        spanMsg.style.fontSize = "1.5rem";
        spanMsg.style.color = "red";
    } else {
        spanMsg.innerText = "";
    }
});

msgSenha.addEventListener("keyup", function () {
    const msgSpan = document.querySelector("#msgPsw");
    if (msgSenha.value.length < 8) {
        const span = document.createElement("span");

        const spanMsg = document.createTextNode("Senha invalida");

        span.appendChild(spanMsg);

        span.style.fontSize = "1.5rem";

        span.style.color = "red";

        span.setAttribute("id", "msgPsw");

        if (!msgSpan) {
            msgSenha.insertAdjacentElement("afterend", span);
        } else {
            msgSpan.style.color = "red";
            msgSpan.innerText = "Senha invalida";
        }
    } else {
        msgSpan.innerText = "";
    }
});

btnEntrar.addEventListener("click", function (event) {
    event.preventDefault();

    const msgSpanPass = document.querySelector("#msgPsw");

    if (msgSpanPass.childNodes.length != 0 || msgSenha.childNodes.length != 0) {
        alert("Preencha todos os campos corretamente!");
    } else {
        alert("Seja bem vindo!");
    }
});

// Fazer a validação quando o usuario tentar mandar sem nada escrito
