const CORRECT_USERNAME = "hilal123";
const CORRECT_PASSWORD = "mantapgan";

const SUCCESS_PAGE_CONTENT = "success.html"; 
const SUCCESS_HTML_CONTENT = `
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <title>Login Sukses</title>
        <style>
            body { font-family: Arial, sans-serif; text-align: center; padding-top: 50px; }
            h1 { color: green; }
        </style>
    </head>
    <body>
        <h1>Login Sukses</h1>
        <p>Selamat datang, ${CORRECT_USERNAME}!</p>
    </body>
    </html>
`;

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        messageDiv.textContent = "";
        messageDiv.className = "";

        if (usernameInput === CORRECT_USERNAME && passwordInput === CORRECT_PASSWORD) {

            messageDiv.textContent = "Login berhasil! Mengarahkan ke halaman sukses...";
            messageDiv.classList.add('success');
            
            setTimeout(() => {
                document.open();
                document.write(SUCCESS_HTML_CONTENT);
                document.close();
            }, 1000); 
            
        } else {
            messageDiv.textContent = "Login Gagal. Username atau Password salah.";
            messageDiv.classList.add('failure');
        }
    });
});