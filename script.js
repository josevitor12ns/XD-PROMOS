const groupLink = "https://chat.whatsapp.com/SEULINKAQUI";

function enterGroup(code) {
  alert("Código selecionado: " + code + "\nRedirecionando para o grupo...");
  window.location.href = groupLink;
}

document.getElementById("whatsappBtn").addEventListener("click", function() {
  alert("Escolha um código abaixo para entrar!");
});