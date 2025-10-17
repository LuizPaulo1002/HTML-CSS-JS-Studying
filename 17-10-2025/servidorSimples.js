// Importa o módulo 'http' do Node.js para criar um servidor web
const http = require('http');

// Cria um servidor HTTP que recebe uma função callback com os objetos de requisição (req) e resposta (res)
const server = http.createServer((req, res) =>{
   
    // Define o cabeçalho da resposta para informar que o conteúdo enviado será HTML com codificação UTF-8
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // Verifica a URL da requisição para fazer o roteamento simples
    if(req.url == '/'){
        // Se a URL for '/', envia uma resposta HTML com conteúdo da página inicial
        res.end('<h1>Página inicial</h1> <p>Bem-Vindo ao meu servidor!</p>');
    }else if(req.url == '/contato'){
        // Se a URL for '/contato', envia uma resposta HTML com o contato
        res.end('<h1>Página de Contato</h1> <p>waltinho@gmail.com</p>');
    }else if(req.url == '/sobre'){
        // Se a URL for '/sobre', envia uma resposta HTML com informações sobre o servidor
        res.end('<h1>Página Sobre</h1> <p>Este é um servidor simples.</p>');
    }else{
        // Para qualquer outra URL, define o status da resposta como 404 (não encontrado)
        res.statusCode = 404;
        // Envia uma mensagem de erro informando que a página não foi encontrada
        res.end('<h1>ERROR!</h1> <p>Página não encontrada!</p>');
    }
});

// Faz o servidor ouvir requisições na porta 3050 e exibe uma mensagem no console quando o servidor está rodando
server.listen(3050, () => {
    console.log('Servidor rodando na porta 3050. . .');
});