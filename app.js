//funçao com parâmetros
function displayText(tag, text) {
  let campo = document.querySelector(tag);
  campo.innerHTML = text;
}

//Criptografar com entrada do textarea
function criptografar() {
  let textoCrip = document.querySelector("textarea").value;

  if (textoCrip.trim() != "") {
    let textocripto = removerDiacritics(textoCrip.toLowerCase())
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    displayText("h2", textocripto);

    document.querySelector("textarea").value = "";
  }
}
//descriptografar com entrada do textarea
function descriptografar() {
  let textoDes = document.querySelector("textarea").value;
  //verificar se usuario inseriu algo
  if (textoDes.trim() != "") {
    //paramentos da cripto
    let textoDescrip = removerDiacritics(textoDes.toLowerCase())
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    displayText("h2", textoDescrip);

    document.querySelector("textarea").value = "";
  }
}

//remover os diacríticos
function removerDiacritics(userInput) {
  return userInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
//funçao de copiar
function copiar() {
  let textoClipboard = document.getElementById("para").innerText;

  navigator.clipboard.writeText(textoClipboard);
}
