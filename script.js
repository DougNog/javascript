document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('meuFormulario');
    const inputs = form.querySelectorAll('input');

    // Função para validar um campo específico
    const validarCampo = (input) => {
        const formGroup = input.closest('.form-group');
        
        // Remove a classe de erro se já existir
        formGroup.classList.remove('error');

        // Verifica se o campo está vazio
        if (!input.value.trim()) {
            formGroup.classList.add('error');
            return false;
        }

        // Validações específicas por tipo de campo
        switch (input.type) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    formGroup.classList.add('error');
                    return false;
                }
                break;

            case 'tel':
                const telRegex = /^\d{10,11}$/;
                if (!telRegex.test(input.value.replace(/\D/g, ''))) {
                    formGroup.classList.add('error');
                    return false;
                }
                break;
        }

        return true;
    };

    // Adiciona validação em tempo real para cada campo
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            validarCampo(input);
        });

        input.addEventListener('blur', () => {
            validarCampo(input);
        });
    });

    // Validação no envio do formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let formValido = true;

        // Valida todos os campos
        inputs.forEach(input => {
            if (!validarCampo(input)) {
                formValido = false;
            }
        });

        if (formValido) {
            // Aqui você pode adicionar o código para enviar o formulário
            console.log('Formulário válido, enviando dados...');
        }
    });
}); 