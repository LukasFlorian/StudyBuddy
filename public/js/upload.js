// add event listener to the upload button
document.getElementById('upload-btn').addEventListener('click', async function(event) {
  event.preventDefault();

  // collect form data
  const documentTitle = document.getElementById('title').value;
  const documentDescription = document.getElementById('description').value;
  const uploadFile = document.getElementById('upload').files[0];
  
  // collect tag
  const selectedTag = document.querySelector('input[name="tag"]:checked');
  if (!selectedTag) {
    alert('Bitte wähle einen Tag aus.');
    return;
  }
  const tag = selectedTag.value;
  
  try {
    // check if user is logged in
    const response = await fetch('/api/users/status');
    const status = await response.json();

    // if user is logged in, proceed with upload
    if (status.loggedIn) {
      const userID = status.user.id;

      // create form data object containing all necessary information
      const formData = new FormData();
      formData.append('docTitle', documentTitle);
      formData.append('description', documentDescription);
      formData.append('uploadFile', uploadFile);
      formData.append('tag', tag);
      formData.append('userID', userID);

      // send POST request with fromData to /api/upload
      const uploadResponse = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      // check response status and display appropriate message
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