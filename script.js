// Captura o evento de envio do formulário
document.getElementById('formContato').addEventListener('submit', function(event) {
    // Evita que a página seja recarregada ao enviar o form
    event.preventDefault();

    // Captura os valores digitados nos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação 1: Verifica se os campos não estão em branco
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos obrigatórios antes de enviar.');
        return; // Interrompe a execução se houver erro
    }

    // Validação 2: Verifica o formato do e-mail usando Expressão Regular (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido (ex: usuario@dominio.com).');
        return;
    }

    // Simulação de envio bem-sucedido
    alert('Mensagem enviada com sucesso! Obrigado pelo contato, ' + nome + '.');

    // Limpa os campos do formulário após o "envio"
    document.getElementById('formContato').reset();
});