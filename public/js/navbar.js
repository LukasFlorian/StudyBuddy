document.addEventListener("DOMContentLoaded", () => {
  // chek if user is logged in
  fetch('/api/users/status', { credentials: 'include' })
    .then(response => response.json())
    .then(data => {
      const userMenu = document.getElementById("user-menu");
      
      // if logged in, display greeting and logout button
      if (data.loggedIn && userMenu) {
        userMenu.innerHTML = `
          <div class="user-hover">
            <span class="greeting">Hallo ${data.user.firstName}</span>
            <span class="logout">Logout</span>
          </div>
        `;
        
        // define logout button; on click, send POST request to logout user
        const logoutEl = userMenu.querySelector(".logout");
        logoutEl.addEventListener("click", async () => {
          try {
            const res = await fetch('/api/users/logout', {
              method: 'POST',
              credentials: 'include'
            });
            // if successful logout, redirect to login page
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

  /* gate keeper function checks if user is logged in
     before grantig access to /share page. If user is not
     logged in, redirect to /login page */

  // get share button and add event listener
  const shareButton = document.getElementById("share-btn");
  if (shareButton) {
    shareButton.addEventListener("click", async (e) => {
      e.preventDefault();
      try {
        // check if user is logged in
        const response = await fetch('/api/users/status', { credentials: 'include' });
        const data = await response.json();
        // grant acess to /share page if user is logged in
        if (data.loggedIn) {
          window.location.href = "/share";
        //if user is not logged in, redirect to login page
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