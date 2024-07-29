document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Parâmetros para enviar o email
        const params = {
            responsavel: document.getElementById('responsavel').value,
            contato: document.getElementById('contato').value,
            endereco: document.getElementById('endereco').value,
            data: document.getElementById('data').value,
            tipo_festa: document.getElementById('tipo-festa').value,
            quantidade_pessoas: document.getElementById('quantidade-pessoas').value,
            horario_entrada: document.getElementById('horario-entrada').value,
            horario_saida: document.getElementById('horario-saida').value
        };

        emailjs.send("service_btgaz6c", "template_4qyieeu", params)
        .then(function(response) {
            alert('Mensagem enviada com sucesso!', response.status, response.text);
        }, function(error) {
            alert('Erro ao enviar a mensagem:', error);
        });
    });
});
