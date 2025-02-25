# Gliederung zur Dokumentation des Client-seitigen User-Handlings und der public/js Komponenten

1. **Einleitung**  
   - Ziel: Darstellung der Client-seitigen Architektur und Interaktion zum User-Handling  
   - Überblick über die Trennung von UI, Logik und Kommunikation mit den Backend-Endpunkten  

2. **Struktur und Aufbau der public/js Komponenten**  
   2.1. **Dateien im Ordner public/js**  
       - upload.js  
       - navbar.js  
       - frontendBrowse.js  
       - validation.js  
   2.2. **Prinzip der Separation of Concerns**  
       - Darstellung der Zuständigkeiten: Interaktion (Events & DOM-Manipulation), Datenvalidierung, API-Kommunikation

3. **Detaillierte Dokumentation der einzelnen Dateien**  
   3.1. **upload.js**  
       - Zweck: Dateiupload und FormData-Zusammenstellung  
       - Erklärungen zu Fehlerbehandlung, Tag-Auswahl und Verweis auf Login-Status  
   3.2. **navbar.js**  
       - Zweck: Dynamische Anpassung der Navigation (Anzeige von "Hallo {firstName}" und Logout)  
       - Implementierung der Gatekeeper-Funktion: Weiterleitung bei fehlendem Login  
   3.3. **frontendBrowse.js**  
       - Zweck: Umsetzung der Dokumentensuche und Darstellung der Suchergebnisse  
       - Aufbau des Suchformulars, Verarbeitung der Query-Parameter und Download-Handling  
   3.4. **validation.js**  
       - Zweck: Client-seitige Validierung und Abgleich von Login/Signup-Formularen  
       - Erfassung, Validierung und Übertragung der Formular-Daten an API-Endpunkte

4. **Ausführliche Erklärung der Login-Logik**  
   4.1. **Client-seitiger Ablauf bei der Anmeldung**  
       - Erfassung der Nutzereingaben (Email, Password) im Login-Formular (HTML + validation.js)  
       - Einsatz der Fetch-API, inklusive "credentials" für Cookie-Handling  
       - Verarbeitung der JSON-Antwort und Speicherung von Daten (z. B. firstName in localStorage)  
       - Fehlerbehandlung und Rückmeldung an den Nutzer
   4.2. **Interaktion mit der dynamischen Navbar**  
       - Abruf des Login-Status via /api/users/status in navbar.js  
       - Dynamische UI-Anpassung: Umwandlung des Login-Links in einen Greeting-Bereich  
       - Implementierung des Logout-Mechanismus (Fetch POST /api/users/logout, Session-Clearing und Weiterleitung)
   4.3. **Zusätzliche Aspekte der Login-Logik**  
       - Session-Management: Wie das Cookie "connect.sid" genutzt wird  
       - Sicherheitsaspekte: Verschlüsselung von Passworten im Backend und Client-seitige Validierung

5. **Zusammenfassung und Ausblick**  
   - Fazit der dokumentierten Prozesse und Komponenten  
   - Überblick über die Interaktion aller Module im public/js Verzeichnis  
   - Mögliche Erweiterungen und Verbesserungen im User-Handling (z. B. Einsatz eines Template-Engines, zusätzliche Client-seitige Sicherheitsmaßnahmen)

- frontendBrowse.js
- navbar.js
- upload.js
- validation.js

- Gatekeeper Clientseitig
    - Verweise auf Gatekeeper Serverseitig falls vorhanden
- Loginlogik

## Clientseitige Implementierung
### Grundlegende Struktur

Die clientseitige JavaScript Architektur folgt dem Prinzip der Seperation of Concers, wodurch hie die unterschiedlichen Verantwortungen klar voneinander getrennt sind. 

Die für viele Funtkionalitäten benötigten Routen sind unter `src/routes` defniert und werden unter verwiesen unter `app.js`.

Die im Verzeichnis `public/js` befindlichen JavaScript Dateien `frontendBrowse.js`, `navbar.js`, `upload.js`und `validation.js`, gewährleisten mittels Einbindungen in die statischen HTML-Seiten in `/static` und über Kommunikationsschnittstellen mit dem Backend, ein angenehmes User-Interface und eine sinnvolle Interaktionssteuerung.

### Login/Signup-Handling in `validation.js`
`validation.js` wird cleintseitig zur Abwicklung der Signup und Login Funktionen verwendet und ist eingebunden in `/static/login.html`und `/static/signup.html`. 

Zunächst wird über einen EventListener geprüft ob, das HTML Dokument fertig geladen und geparst ist. Im Anschluss werden die Login- und Signup-Formulare über die jeweils festgelegte ID aufgerufen:

~~~js
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    ...
});
~~~

#### Signup
Das Skript prüft zunächst, ob das signupForm-Element auf der Seite existiert. Falls ja, wird ein Event Listener hinzugefügt, der auf das submit-Ereignis des Formulars reagiert:

~~~js
if (signupForm) {
      // event listener for the signup form
      signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        ...
    });
}
~~~

Im Anschluss werden die Eingaben `firstName`, `email` und `password` aus dem Formular über die festgelgte ElementId ausgelesen:

~~~js
const firstName = document.getElementById('firstname-input').value;
const email = document.getElementById('email-input').value;
const password = document.getElementById('password-input').value;
~~~

Innerhalb einer try-catch funktion werden nun die Usereingaben an das Backend gesendet, wobei über `catch` mögliche Serverfehler abgefangen werden. 

Hierbei wird fetch() verwendet, um eine asynchrone POST-Anfrage an die URL `/api/users/signup` zu senden. Die Userdaten werden dabei in einen JSON-String umgewandelt, was über `headers:` dem Empfänger mitgeteilt wird.

 `if(res.ok)`überprüft ob die Antwort von `/api/users/signup` zwischen 200-299 liegt, da Normalfall  `res.status(200)` erhalten wird, erscheint dann die Mitteilung einer erfolgreichen Registrierung und der User wird auf die Loginseite weitergeleitet wird. Falls die Antwort nicht zwischen 200 und 299 liegt, wird eine Fehlermeldung ausgegeben mit der übermittelten Message. 

 Falls die Kommunikation mit `/api/users/signup` gänzlich fehltschlägt wird das über `catch` abgefangen und es erscheint ebenfalls eine Fehlermeldung:

~~~js
try {
    const res = await fetch('/api/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email, password })
          });
          
    const data = await res.json();

    if (res.ok) {
        alert('Registrierung erfolgreich!');
        window.location.href = './login';
    } else {
        alert(`Fehler: ${data.message}`);
    }
}   catch (error) {
    alert('Serverfehler!');
    console.error('Fehler beim Signup:', error);
}
~~~

#### Login

Die Kommunikation des Login funktioniert nach dem gleichen Muster wie beim Signup, mit der Ausnahme, das hier `email` und `password` ausreichend sind, und der `firstName` nicht übertragen wird

Das Skript prüft zunächst, ob das loginForm-Element auf der Seite existiert. Falls ja, wird ein Event Listener hinzugefügt, der auf das submit-Ereignis des Formulars reagiert:

~~~js
if (loginForm) {
      // event listener for the signup form
      loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        ...
});
}
~~~

Im Anschluss werden die Eingaben `email` und `password` aus dem Formular über die festgelgte ElementId ausgelesen:

~~~js
const email = document.getElementById('email-input').value;
const password = document.getElementById('password-input').value;
~~~

Innerhalb einer try-catch funktion werden nun die Usereingaben an das Backend gesendet, wobei über `catch` mögliche Serverfehler abgefangen werden. 

Hierbei wird fetch() verwendet, um eine asynchrone POST-Anfrage an die URL `/api/users/login` zu senden. Die Userdaten werden dabei in einen JSON-String umgewandelt, was über `headers:` dem Empfänger mitgeteilt wird. Zudem zeigt `credentials: 'include` dem Backend, dass der Client noch keine Cookies hat, da sie dadurch normalerweise mitgesendet würden, allerdings noch nicht vorhanden sind. Zusätzlich akzeptiert der Browser aufgrunddessen Cookies, die vom Server gesendet werden. Als Resultat erstellt der Server ein Cookie, der dem Client gesendet wird und bei zukünftigen Anfragen an den Server mitgesendet wird. 

 `if(res.ok)`überprüft ob die Antwort von `/api/users/signup` im 200er Bereich liegt, da Normalfall  `res.status(200)` erhalten wird, erscheint dann die Mitteilung eines ergolgreichen Logins und der User wird auf die `./homepage` weitergeleitet. Zudem wird der firstName im `localStorage` des Browsers gespeichert.Falls die Antwort nicht zwischen 200 und 299 liegt, wird eine Fehlermeldung ausgegeben mit der übermittelten Message. 

 Falls die Kommunikation mit `/api/users/signup` gänzlich fehltschlägt wird das über `catch` abgefangen und es erscheint ebenfalls eine Fehlermeldung:

~~~js
try {
    const res = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password })
    });
    
    const data = await res.json();
    
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
~~~

### Verarbeitung des Uploads in `upload.js`
Das Dokument `upload.js` ist im Rahmen der Dateiverarbeitungslogik dafür zuständig, die vom User ausgewählte Datei zusammen mit vom User gewähltem Titel, Beschreibung, Tag an den Server zu übermitteln, damit dieser das File dann in der Mongo-Datenbank speichern kann.

Zunächst wird ein EventListener für den Upload-Button erstellt, der auf das Event `'click'` reagiert. Falls das Event eintrit, werden der Titel und die Beschreibung, ausgewählte File sowie der Tag ausgelesen. Falls es einen Tag gibt, wird außerdem, der dazugehörige value erfasst (hier:Exercises, Summary, Scribbled Notes) Sollte kein Tag ausgewählt sein, erscheint ein Altert mit der Aufforderung, einen Tag auszuwählen: 

~~~js
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
})
~~~

Für die Fehlerbehandlung in der Kommunikation wird `try-catch` verwendet.
Zunächst wird eine GET-Anfrage an dei Route `/api/users/status`gesendet, wodurch überprüft wird, ob der User eingeloggt ist. Die Antwort wird dass in ein JavaScript-Obejekt umgewandelt.

~~~js
const response = await fetch('/api/users/status');
const status = await response.json();
~~~

Die Antwort des Servers könnte beispielsweise so aussehen: 

~~~js
{
  "loggedIn": true,
  "user": {
    "id": "12345",
    "firstName": "Bob"
  }
}
~~~

Falls der Benutzer nicht eingeloggt, wird ein Alert mit `'Du bist nicht eingeloggt'` generiert.
~~~js
alert('Du bist nicht eingeloggt.')
~~~

Ist der Benutzer allerdings eingeloggt, wird ein FormData-Objekt erstellt, um die Daten für den Upload zu speichern. Infolgedessen wird dieses Objekt per POST-Anfrage an die API-Route `/api/upload` gesendet, wo es über weitere Verarbeitungsschritte in der Datenbank gespeichert wird:

~~~js
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
      ...
}
~~~

In Anbhängigkeit der Antwort von der API-Route werden Alerts über den Status des Hochladens generiert: 

~~~js
if (uploadResponse.status === 200) {
    alert('Dokument erfolgreich hochgeladen!');
    document.getElementById('upload-form').reset(); // Formular zurücksetzen
} else if (uploadResponse.status === 400) {
    alert('Fehler: UserID nicht gefunden.');
} else {
    alert('Serverfehler. Bitte versuche es später erneut.');
}
~~~

Sollte die Kommunikation mit dem Server fehlschlagen, wird der `catch` ausgelöst:

~~~js
} catch (error) {
    console.error('Fehler:', error);
    alert('Netzwerkfehler. Überprüfe deine Verbindung.');
}
~~~


### Anpassung der Navigationsleiste, wenn Benutzer eingeloggt:
