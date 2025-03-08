# Labor 1

## Bedeutung der HTML-Bausteine

### `<!DOCTYPE>`
Definiert den Dokumententyp.

### `<article>`
Definiert einen Artikel.

### `<head>`
Definiert Metadaten/Informationen.

### `<title>`
Definiert den Titel.

### `<p>`
Definiert einen Paragraphen.

---

## DHBW Startseite

### Für was steht die Deklaration `<!DOCTYPE html>`?
Definiert den Dokumententyp als HTML-Dokument.

### Suchen Sie nach dem `<html>`-Tag und erklären Sie die dort verwendeten Attribute:
- `dir="ltr"` → Text der Website wird von links nach rechts angezeigt.
- `lang="de-DE"` → Sprache Deutsch.
- `class="no-js"` → CSS-Klasse `no-js` wird zugewiesen, wenn JavaScript deaktiviert ist.

### Welches Zeichensatz-Encoding verwendet die Webseite?
**UTF-8**

### Suchen Sie jetzt nach den folgenden Begriffen und klicken jeweils auf den zugeordneten `href`-Attribut-Text. Was passiert?
- **Impressum**: Leitet auf die Impressumsseite der DHBW ([dhbw.de/impressum](https://www.dhbw.de/impressum)).
- **Instagram**: Leitet auf die Instagram-Seite ([https://www.instagram.com/dhbw.dualstudieren/](https://www.instagram.com/dhbw.dualstudieren/)).
- **CSS**: Leitet auf eine Seite mit CSS-Klassen.
- **JS**: Leitet auf eine Seite, die in JavaScript geschrieben ist.

---

## Entwicklungswerkzeuge anhand einer anderen Seite  

### Ladezeiten einiger Ressourcen:
- `startseite` → **113ms**
- `602a22886015476c24a2b6f7f78e2def.css?1701184751` → **0ms**
- `styles.css...` → **0ms**
- `vendor_head.min.js?vqk0vqs` → **0ms**
- `main.min.css?vqk0vqs` → **0ms**

---

## Erste 4 Request- und Response-Header

### **Response-Header**
1. **`content-security-policy-report-only: default-src 'self'; report-uri https://sentry2.in2code.de/api/24/security/?sentry_key=c7b33dfea5e4a45ee44013171a669946`**  
   → Richtlinie, die Cross-Site-Scripting verhindert. `self`: Es dürfen nur Inhalte von der eigenen Domain geladen werden. `report-uri`: gibt eine URL an, an die Versäße gegen diese Richtline gemeldet werden
2. **`content-type: text/html; charset=utf-8`**  
   → Dauer seit der Antwort vom Server erstellt wurde.
3. **`date: Sat, 08 Mar 2025 11:06:42 GMT`**  
   → Gibt Datum für die Serverantwort an.
4. **`content-language: de`**  
   → Gibt die Sprache des Inhalts an (z. B. Deutsch).

### **Request-Header**
1. **`:authority: www.dhbw.de`**  
   → Ziel-Domain
2. **`:method: GET`**  
   → GET-Methode: Daten werden angefordert.
3. **`:path: /startseite`**  
   → Gibt den angefragten Pfand `/startseite` an.
4. **`:scheme: https`**  
   → Verbindung erfolgt über HTTPS

---

## Matomo

Matomo (früher bekannt als Piwik) ist eine Open-Source-Webanalytik-Plattform.

### **Besucheranalyse**
Ermöglicht die Analyse des Besucherverhaltens auf Webseiten.

