let propertySelected = {
    nome: '',
    localizacao: ''
};

function agendarVisita(nomeImovel, localizacao) {
    propertySelected.nome = nomeImovel;
    propertySelected.localizacao = localizacao;
    
    const modal = document.getElementById('contactModal');
    const propertyInfo = document.getElementById('propertyInfo');
    
    propertyInfo.textContent = `${nomeImovel} - ${localizacao}`;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    const modal = document.getElementById('contactModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
    document.getElementById('contactForm').reset();
}

window.addEventListener('click', function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) {
        fecharModal();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        fecharModal();
    }
});

function enviarWhatsApp(event) {
    event.preventDefault();
    
    const numeroWhatsApp = '5511933881236';
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;
    
    let textoWhatsApp = `Prezados, saudações.\n\n`;
    textoWhatsApp += `Gostaria de manifestar meu interesse na propriedade *${propertySelected.nome}*, situada em _${propertySelected.localizacao}_.\n\n`;
    textoWhatsApp += `Poderiam, por gentileza, me fornecer mais detalhes ou verificar a disponibilidade para uma visita exclusiva?\n\n`;
    textoWhatsApp += `Seguem meus dados para contato:\n`;
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
        fecharModal();
    }, 500);
    
    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    const telefoneInput = document.getElementById('telefone');
    
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