function handleRegistration() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const username = document.getElementById('chosen-username').value;
    const password = document.getElementById('register-password').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const interest = document.getElementById('interest').value;
    const termsAccepted = document.querySelector('input[name="terms"]').checked;
    
    if (!firstName || !lastName || !username || !password || !gender || !interest || !termsAccepted) {
        alert('Bitte füllen Sie alle erforderlichen Felder aus und akzeptieren Sie die Nutzungsbedingungen.');
        return;
    }

    const userData = {
        firstName,
        lastName,
        username,
        password,
        gender,
        interest
    };

    fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        if (data.success) {
            window.location.href = "index.html";
        }
    })
    .catch(error => console.error('Fehler: ', error));
}

function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        if (data.success) {
            // Hier könnten Sie den Benutzer zu seiner personalisierten Seite weiterleiten
            window.location.href = "content.html";
        }
    })
    .catch(error => console.error('Fehler: ', error));
}

function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        if (data.success) {
            // Lokale Speicherung, um den Benutzerzustand zu verwalten
            localStorage.setItem('currentUser', JSON.stringify(data.user));

            // Leite den Benutzer zu seiner personalisierten Inhaltsseite weiter
            window.location.href = "content.html";
        }
    })
    .catch(error => console.error('Fehler: ', error));
}

document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (user) {
        document.getElementById('user-interest').textContent = user.interest;
        const interestContentId = `${user.interest}-content`;
        document.getElementById(interestContentId).style.display = 'block';

        // Zeigen Sie die Standortdaten und die aktuelle Uhrzeit an
        navigator.geolocation.getCurrentPosition(position => {
            document.getElementById('geo-coords').textContent = `Lat: ${position.coords.latitude.toFixed(4)}, Lon: ${position.coords.longitude.toFixed(4)}`;
        });
        if (!'geolocation' in navigator) {
            console.log('Geolocation wird von Client nicht unterstützt.');
            document.getElementById('geo-coords').textContent = 'Geolocation wird nicht unterstützt';
        }
        document.getElementById('system-time').textContent = new Date().toLocaleString();
    }
});