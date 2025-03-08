# Labor 5: Dynamische Webseiten mit JavaScript

## 1. Erweitern der Laborumgebung

### 1.1 GitHub - Repositry und Webstorm
#### Abb. 1: Erstellung eines GitHub-Tokens:
![Token](<Screenshot 2025-03-05 at 3.00.12 PM.png>)

#### Abb. 2: Hinterlegen des Tokens in in Webstorm und clonen eines bereits bestehenden Repositories:
![ENV-VARIABLE](<Screenshot 2025-03-05 at 3.22.03 PM.png>)

### 1.2 NodeJS - Webserver

#### Abb. 3: Sudo apt update
![sudo apt update](image.png)

#### Abb. 4: Sudo apt install nodejs
![Nodejs](image-1.png)

#### Abb. 5: node -v
![node -v](image-2.png)

#### Abb. 6: sudo apt install npm
![install npm](image-3.png)

#### Abb. 7: npm -v
![npm -v](image-4.png)

#### Abb. 8: npm install fs
![install fs](image-5.png)


## 2. Erstellen von dynamischen Webseiten

- **`app.js`:**\
    NodeJS-Code (mit Hilfe von Express), der den Webserver startet und die verschiedenen Routen definiert (hier mit einem sehr einfachen Setup mit wenig Middleware und ohne eigene Router)
- **`users.json`:**\
    JSON-Datei mit dem Userdatensatz
- **Verzeichnis `/public`:**
  - `index.html`: Unter Route `/` aufgerufenes Login-Formular und Registrierungs-Verlinkung
  - `register.html`: Registrierungs-Formular
  - `content.html`: Anzuzeigende Inhalte - Kann aktuell auch ohne vorherigen Login aufgerufen werden (durch Navigation in URI-Zeile). In diesem Fall werden jedoch keine Inhalte angezeigt.
  - `styles.css`: CSS-Styles für die HTML-Seiten
  - `script.js`: JavaScript-Script, das die clientseitige Funktionalität der verschiedenen Seiten implementiert