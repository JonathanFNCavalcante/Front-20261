const API_URL = 'http://localhost:3000';

export const authService = {
    async login(email, senha) {
        const response = await fetch(`${API_URL}/usuarios?email=${email}`);
        const users = await response.json();

        if (users.length > 0 && users[0].senha === senha) {
            const user = users[0];
 
            const payload = JSON.stringify({ id: user.id, email: user.email, exp: Date.now() + 3600000 });
            const token = btoa(payload); 

            localStorage.setItem('@AlunoOnline:token', token);
            localStorage.setItem('@AlunoOnline:user', JSON.stringify({ id: user.id, email: user.email }));

            return { user, token };
        } else {
            throw new Error('E-mail ou senha inválidos');
        }
    },

    logout() {
        localStorage.removeItem('@AlunoOnline:token');
        localStorage.removeItem('@AlunoOnline:user');
    },

    getToken() {
        return localStorage.getItem('@AlunoOnline:token');
    },

    getUser() {
        const user = localStorage.getItem('@AlunoOnline:user');
        return user ? JSON.parse(user) : null;
    }
};