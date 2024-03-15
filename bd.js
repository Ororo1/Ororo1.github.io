document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var password = document.getElementById('password').value;

    // Example validation, replace with your own authentication logic
    if (password === '_.life.of.jessica') {
        document.getElementById('signin').classList.add('hidden');
        document.getElementById('homepage').classList.remove('hidden');
    } else {
        alert('Invalid username or password');
    }
});
