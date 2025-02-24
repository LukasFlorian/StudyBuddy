// /public/js/validation.js

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm'); // changed
    const loginForm = document.getElementById('loginForm');     // changed
  
    if (signupForm) {
      signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const firstname = document.getElementById('firstnameInput').value; // changed
        const email = document.getElementById('emailInput').value;         // changed
        const password = document.getElementById('passwordInput').value;   // changed
  
        try {
          const res = await fetch('/api/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname, email, password })
          });
          
          const data = await res.json();
          if (res.ok) {
            alert('Registrierung erfolgreich!');
            window.location.href = './login';
          } else {
            alert(`Fehler: ${data.message}`);
          }
        } catch (error) {
          alert('Serverfehler!');
          console.error('Fehler beim Signup:', error);
        }
      });
    }
  
    if (loginForm) {
      loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('emailInput').value;      // changed
        const password = document.getElementById('passwordInput').value;  // changed
  
        try {
          const res = await fetch('/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', // WICHTIG: Cookie wird mitgesendet
            
            body: JSON.stringify({ email, password })
          });
  
          const data = await res.json();
          if (res.ok) {
            // Speichere den Vornamen lokal (für z. B. den Header)
            localStorage.setItem("firstName", data.firstName);
            alert("Login erfolgreich!");
            window.location.href = "./homepage";
          } else {
            alert(`Fehler: ${data.message}`);
          }
        } catch (error) {
          alert('Serverfehler!');
          console.error('Fehler beim Login:', error);
        }
      });
    }
  });