document.addEventListener("DOMContentLoaded", () => {
  // 1. Login-Status abfragen
  fetch('/api/users/status', { credentials: 'include' })
    .then(response => response.json())
    .then(data => {
      const userMenu = document.getElementById("test-menu");
      
      // Falls eingeloggt, ersetze den Inhalt von #user-menu
      if (data.loggedIn && userMenu) {
        userMenu.innerHTML = `
            <ul>
                <li class="nav-items"><a id="share-btn" href="./share">Share</a></li>
                <li class="nav-items"><a href="./browse">Browse</a></li>
                <li class="nav-items">Hallo ${data.user.firstName}</li>
                <li class=nav-items" id="logout">Logout</li>
            </ul>
        `;
        
        const logoutEl = userMenu.querySelector("#logout");
        logoutEl.addEventListener("click", async () => {
          try {
            const res = await fetch('/api/users/logout', {
              method: 'POST',
              credentials: 'include'
            });
            if (res.ok) {
              window.location.href = "/login";
            }
          } catch (error) {
            console.error("Logout Error:", error);
          }
        });
      }
    })
    .catch(err => console.error("Error fetching user status:", err));

  // 2. Gatekeeper-Funktion für den Share-Button
  const shareBtn = document.getElementById("share-btn");
  if (shareBtn) {
    shareBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('/api/users/status', { credentials: 'include' });
        const data = await response.json();
        if (data.loggedIn) {
          window.location.href = "/share";
        } else {
          window.location.href = "/login?redirect=share";
        }
      } catch (error) {
        console.error("Fehler beim Prüfen des Login-Status:", error);
        window.location.href = "/login?redirect=share";
      }
    });
  }
});