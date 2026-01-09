function sendWhats(event) {
    event.preventDefault(); // evita recarregar a página

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !message) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const phone = "5511933881236"; // SEU NÚMERO

    const text = `Olá! Me chamo ${name}.\n\n${message}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
}
