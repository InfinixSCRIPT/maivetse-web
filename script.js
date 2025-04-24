function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  const chatBox = document.getElementById("chat-box");

  // Kullanıcının mesajı
  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = message;
  chatBox.appendChild(userMsg);

  // Botun cevabı
  const botMsg = document.createElement("div");
  botMsg.className = "message bot";
  botMsg.textContent = cevapVer(message);
  chatBox.appendChild(botMsg);

  // Aşağı kaydır
  chatBox.scrollTop = chatBox.scrollHeight;

  input.value = "";
}

// Basit bot cevapları
function cevapVer(mesaj) {
  mesaj = mesaj.toLowerCase();
  if (mesaj.includes("merhaba") || mesaj.includes("selam")) return "Selam! 👋";
  if (mesaj.includes("nasılsın")) return "İyiyim, sen nasılsın?";
  if (mesaj.includes("site")) return "Maivetse şu anda geliştirme aşamasında!";
  return "Hmm... Anlayamadım. Başka bir şey dene!";
}
