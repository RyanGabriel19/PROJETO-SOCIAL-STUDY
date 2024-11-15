document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validação simples (substitua isso pela lógica de autenticação real)
    if (username === 'admin' && password === 'senha123') {
        alert('Login bem-sucedido!');
        // Redirecionar para outra página (opcional)
        // window.location.href = 'home.html'; // Exemplo de redirecionamento
    } else {
        document.getElementById('errorMessage').innerText = 'Usuário ou senha inválidos.';
    }
});
