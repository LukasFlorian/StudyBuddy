document.addEventListener('DOMContentLoaded', () => {
  // accessing the login and signup forms
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    if (signupForm) {
      // event listener for the signup form
      signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // collect form data
        const firstName = document.getElementById('firstname-input').value;
        const email = document.getElementById('email-input').value;
        const password = document.getElementById('password-input').value;
  
        try {
          // send POST request with form data to /api/users
          const res = await fetch('/api/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName, email, password })
          });
          
          // parse response into JSON
          const data = await res.json();

          // check response status and display appropriate message
          // if successful signup, redirect to login page
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
      // event listener for the login form
      loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        // collect form data
        const email = document.getElementById('email-input').value;
        const password = document.getElementById('password-input').value;
  
        try {
          // send POST request with form data to /api/users/login
          const res = await fetch('/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', // WICHTIG: Cookie wird mitgesendet
            body: JSON.stringify({ email, password })
          });
          // parse response into JSON
          const data = await res.json();
          
          // chek response status and display appropriate message
          //if successful login, store user's first name in local storage and redirect to homepage
          if (res.ok) {
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