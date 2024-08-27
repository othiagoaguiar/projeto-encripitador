const textArea = document.querySelector(".input-text");
const mensagem = document.querySelector(".output-area");
const mensagemFinal = document.querySelector(".mensagem-final");
const personagem = document.querySelector(".personagem");
const infoSaida = document.querySelector(".informacao-saida");
const btnCopia = document.querySelector(".btn-copiar");

function btnEncripitar (){
    const textoCripitografado = cripitografar(textArea.value);
    mensagemFinal.innerHTML = textoCripitografado;
    textArea.value = "";
    personagem.style.display = "none";
    infoSaida.style.display = "none";
    btnCopia.style.display = "block";
    mensagemFinal.classList.add("ajustar");
    mensagem.classList.add("ajustar");
}

function cripitografar(stringCripitografada) {
    let matrizCodigo = [["e", "enter"] , ["i" , "imes"], ["a", "ai"], ["o" , "ober"], ["u", "ufat"]];
    stringCripitografada = stringCripitografada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringCripitografada.includes (matrizCodigo[i][0])){
            stringCripitografada = stringCripitografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringCripitografada;
}

function btnDesencripitar (){
    const textoDescripitografado = descripitografar(textArea.value);
    mensagemFinal.innerHTML = textoDescripitografado;
    textArea.value = "";
    personagem.style.display = "none";
    infoSaida.style.display = "none";
    btnCopia.style.display = "block";
}

function descripitografar(stringDescripitografada) {
    let matrizCodigo = [["e", "enter"] , ["i" , "imes"], ["a", "ai"], ["o" , "ober"], ["u", "ufat"]];
    stringDescripitografada = stringDescripitografada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringDescripitografada.includes (matrizCodigo[i][1])){
            stringDescripitografada = stringDescripitografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDescripitografada;
}

btnCopia.addEventListener("click", () => {
    let copiaTexto = mensagemFinal;
    copiaTexto.select();
    document.execCommand("copy");
    textArea.focus();
})