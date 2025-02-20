// /public/js/validation.js

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
  
    if (signupForm) {
      signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const firstname = document.getElementById('firstname-input').value;
        const email = document.getElementById('email-input').value;
        const password = document.getElementById('password-input').value;
  
        try {
          const res = await fetch('http://localhost:3000/api/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname, email, password })
          });
          
          const data = await res.json();
          if (res.ok) {
            alert('Registrierung erfolgreich!');
            window.location.href = './login.html';
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
        const email = document.getElementById('email-input').value;
        const password = document.getElementById('password-input').value;
  
        try {
          const res = await fetch('http://localhost:3000/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
          });
          
          const data = await res.json();
          if (res.ok) {
            // data enthält jetzt { message: "Login erfolgreich", firstname: "..." }
            localStorage.setItem("firstname", data.firstname);
          
            alert("Login erfolgreich!");
            window.location.href = "./homepage.html";
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
  