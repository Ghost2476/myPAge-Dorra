function SignIn() {
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const birthdate = document.getElementById('birthdate').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const number = document.getElementById('number').value.trim();
    const ville = document.getElementById('ville').value.trim();
    const gouvernerat = document.getElementById('gouvernerat').value.trim();

    if (!name || !surname || !birthdate || !email || !password || !confirmPassword || !number || !ville || !gouvernerat) {
        alert("All fields must be filled.");
        return;
    }
    if (!email.includes('@')) {
        alert("Email must contain '@'.");
        return;
    }

    const birthYear = new Date(birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
    if (isNaN(birthYear) || birthYear < 1900 || birthYear > currentYear) {
        alert("Enter a valid birth year between 1900 a>nd the current year.");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    if (!/^\d{8}$/.test(number)) {
        alert("Mobile number must be exactly 8 digits.");
        return;
    }

    alert("Sign-In successful!");
    window.location.href = "main.html";
}
function LogIn(){
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    window.location.href = "main.html";
}