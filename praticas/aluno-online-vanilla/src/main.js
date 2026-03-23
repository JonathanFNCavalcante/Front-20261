import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {

            event.preventDefault();

            const emailInput = document.getElementById('email');
            const senhaInput = document.getElementById('senha');
            const errorEmail = document.getElementById('error-email');
            const errorSenha = document.getElementById('error-senha');

            errorEmail.textContent = '';
            errorSenha.textContent = '';

            let isValid = true;

            if (emailInput.value.trim() === '') {
                errorEmail.textContent = 'O campo de email é obrigatório.';
                isValid = false;
            }

            if (senhaInput.value.trim() === '') {
                errorSenha.textContent = 'O campo de senha é obrigatório.';
                isValid = false;
            }

            if (isValid) {
                window.location.href = 'index.html';
            }
        });
    }
});