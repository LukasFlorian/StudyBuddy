document.addEventListener("DOMContentLoaded", () => {
  // Prüfe, ob ein Benutzername im localStorage vorhanden ist
  const storedFirstname = localStorage.getItem("firstname");
  const userMenu = document.getElementById("user-menu");

  if (storedFirstname && userMenu) {
    // Ersetze den "Login"-Link durch eine Begrüßung und einen Abmelden-Button
    userMenu.innerHTML = `Hallo ${storedFirstname} <button id="logout-btn">Abmelden</button>`;
    
    // Füge einen Event-Listener für den Abmelden-Button hinzu
    document.getElementById("logout-btn").addEventListener("click", () => {
      // Entferne den gespeicherten Benutzernamen
      localStorage.removeItem("firstname");
      // Leite den Nutzer zur Login-Seite weiter (oder lade die Seite neu)
      window.location.href = "./login";
    });
  }
});