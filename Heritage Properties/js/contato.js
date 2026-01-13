function enviarContatoWhatsApp(event) {
    event.preventDefault();
    
    const numeroWhatsApp = '5511999991892';
    
    const nome = document.getElementById('nomeCompleto').value;
    const email = document.getElementById('emailContato').value;
    const telefone = document.getElementById('telefoneContato').value;
    const cidade = document.getElementById('cidadeInteresse').value;
    const tipo = document.getElementById('tipoImovel').value;
    const mensagem = document.getElementById('mensagemContato').value;
    
    let textoWhatsApp = `Prezados, saudações.\n\n`;
    textoWhatsApp += `Entro em contato através do site da Heritage Properties.\n\n`;
    
    if (tipo || cidade) {
        textoWhatsApp += `Gostaria de consultar oportunidades`;
        if (tipo) textoWhatsApp += ` para *${tipo}*`;
        if (cidade) textoWhatsApp += ` na região de *${cidade}*`;
        textoWhatsApp += `.\n\n`;
    }
    
    textoWhatsApp += `Por gentileza, poderiam me retornar? Seguem meus dados:\n`;
    textoWhatsApp += `👤 *Nome:* ${nome}\n`;
    textoWhatsApp += `📧 *E-mail:* ${email}\n`;
    textoWhatsApp += `📱 *Telefone:* ${telefone}\n`;
    
    if (mensagem.trim() !== '') {
        textoWhatsApp += `\n*Nota adicional:*\n"${mensagem}"\n`;
    }
    
    textoWhatsApp += `\nCordialmente,\n${nome}`;
    
    const mensagemCodificada = encodeURIComponent(textoWhatsApp);
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
    
    window.open(urlWhatsApp, '_blank');
    
    setTimeout(() => {
        const form = document.getElementById('contactFormPage');
        if (form) form.reset();
    }, 500);
    
    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    const telefoneInput = document.getElementById('telefoneContato');
    
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length <= 11) {
                if (value.length > 6) {
                    value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
                } else if (value.length > 2) {
                    value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
                } else if (value.length > 0) {
                    value = value.replace(/^(\d*)/, '($1');
                }
                e.target.value = value;
            }
        });
    }
});