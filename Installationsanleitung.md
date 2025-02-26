# Installationsanleitung

## Schritt 1 (ZIP-Datei entpacken)
Entpacken Sie die ZIP-Datei `"Programmentwurf_Atussa_Chiara_Lukas_Nils.zip"`

## Schritt 2 (Node.js)
Stellen Sie sicher, dass Node.js (mindestens Version 12 oder höher installiert ist)

## Schritt 3 (Abhängigkeiten installieren)
**1.** Öffnen Sie ein Terminal und wechseln Sie in das Projektverzeichnis, in dem die Datei entpackt wurde und navigieren Sie in das entpackte Verzeichnis.
**2.** Führen Sie anschließend den Befehl aus.
~~~bash
npm install
~~~

### Schritt 4 (MongoDB)
**1.** Laden Sie MongoDB Community über folgenden Link herunter: https://www.mongodb.com/try/download/community
**2.** Führen Sie die heruntergeladene Datei
**3.** Wählen Sie `"Next"`
![alt text](documentation/img/image.png)

**4.** Akzeptieren Sie die Lizenzbedingungen
![alt text](documentation/img/image-1.png)

**5.** wählen Sie `"Next"`
![alt text](documentation/img/image-2.png)

**6.** Wählen Sie `"Complete"`
![alt text](documentation/img/image-4.png)

**7.** Wählen Sie jeweils ein passendes Data- und Log Directory und setzen Sie die anderen Einstellungen wie folgt:
![alt text](documentation/img/image-5.png)

**8.** Wählen Sie `"Install MongoDB Compass"`, dann `"next"`
![alt text](documentation/img/image-8.png)

**9.** Lassen Sie zu, dass das Programm änderungen an ihrem Gerät vornimmt. Eventuell ist der Name ein anderer.
![alt text](documentation/img/image-9.png)

**10.** Warten Sie den Installationsprozess ab und wählen `"Finisch"`
![alt text](documentation/img/image-10.png)

**11.** Nun öffnet sich die Applikation MongoDB Compass. Wählen Sie `"Start"`
![alt text](documentation/img/image-11.png)

**12.** Nun muss eine neue Verbindung eingerichtet werden. Wählen Sie dafür `"Add new connection"`
![alt text](documentation/img/image-12.png)

**13.** Hier müssen nun keine Änderungen vorgenommen werden. Wählen Sie `"Save & Connect"`

## Schritt 5 (app.js)
Navigieren Sie nun im Terminal in das entpackte Verzeichnis und führen folgenden Befehl aus aus.
~~~bash
src/app.js
~~~

## Schritt 6 (localhost:3000)
Öffnen Sie in einem Browser `http://localhost:3000`. Viel Spaß!

Um die Anwendung über eine Virtuelle Maschine auszuführen und vom Host-System aus die Website verwenden, muss die VM mit NGINX als Reverse Proxy konfiguriert werden.  
Hierzu funktioniert beispielsweise das Setup gemäß https://dev.to/logrocket/how-to-run-a-node-js-server-with-nginx-588 , ab dem Abschnitt "Configuring Nginx".  
Die Website kann dann vom Host-System aus über `http://<IP_Adresse_der_VM>:3000` oder auch hier in der VM selbst über `http://localhost:3000` aufgerufen werden.