document.getElementById('upload-btn').addEventListener('click', async function(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite
  
    // 1. **Titel und Description auslesen**
    const documentTitle = document.getElementById('title').value;
    const documentDescription = document.getElementById('description').value;
    
    // 2. **Ausgewählten Radio-Tag sammeln**
    const selectedTag = document.querySelector('input[name="tag"]:checked');
    if (!selectedTag) {
      alert('Bitte wähle einen Tag aus.');
      return;
    }
    const tag = selectedTag.value;
  
    // 3. **userID dynamisch aus der Session holen**
    try {
      const response = await fetch('/api/users/status');
      const status = await response.json();
      if (status.loggedIn) {
        const userID = status.user.id;
  
        // 4. **POST-Request an das Backend senden**
        const uploadResponse = await fetch('/api/documents/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ documentTitle, userID, tag })
        });
  
        // 5. **Statuscode auswerten und Nachricht anzeigen**
        if (uploadResponse.status === 200) {
          alert('Dokument erfolgreich hochgeladen!');
          document.getElementById('upload-form').reset(); // Formular zurücksetzen
        } else if (uploadResponse.status === 400) {
          alert('Fehler: UserID nicht gefunden.');
        } else {
          alert('Serverfehler. Bitte versuche es später erneut.');
        }
      } else {
        alert('Du bist nicht eingeloggt.');
      }
    } catch (error) {
      console.error('Fehler:', error);
      alert('Netzwerkfehler. Überprüfe deine Verbindung.');
    }
  });