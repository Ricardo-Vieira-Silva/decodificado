let saida;

function possuiMaiusculaOuAcentuacao(texto) {
    const regexMaiuscula = /[A-Z]/;
    const regexAcentuacao = /[áàãâéèêíïóôõöúüç]/i;
    return regexMaiuscula.test(texto) || regexAcentuacao.test(texto);
}

function confereTexto(texto) {
    if (possuiMaiusculaOuAcentuacao(texto)) {
        alert("O texto não pode conter letras maiúsculas ou acentuação!");
        return false;
    }
    if (texto === "") {
        document.getElementById("saida__inicio").style.display = "flex";
        document.getElementById("saida__fim").style.display = "none";
        return false;
    }
    else {
        document.getElementById("saida__inicio").style.display = "none";
        document.getElementById("saida__fim").style.display = "flex";
        return true;
    }
}

function criptografar() {
    let texto = document.querySelector("textarea").value;
    if (confereTexto(texto)) {
        texto = texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
        document.getElementById("texto__saida").innerHTML = texto;
        saida = texto;
    }
}

function descriptografar() {
    let texto = document.querySelector("textarea").value;
    if (confereTexto(texto)) {
    texto = texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
    document.getElementById("texto__saida").innerHTML = texto;
    saida = texto;
    }
}

function copiarTexto() {
    navigator.clipboard.writeText(saida)
        .then(() => {
            console.log('Texto copiado para o clipboard: ' + saida);
        })
        .catch((error) => {
            console.error('Erro ao copiar texto para o clipboard: ' + error);
        });
}

function limparTextos() {
    document.querySelector("textarea").value = "";
    document.getElementById("texto__saida").innerHTML = "";
    document.getElementById("saida__inicio").style.display = "none";
    document.getElementById("saida__fim").style.display = "none";
}