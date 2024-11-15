function togglePassword() {
    const passwordField = document.getElementById('password-field');
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
}
