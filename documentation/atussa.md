# Dokumentation zur Datenbank

## 1. Entscheidung für MongoDB

MongoDB wurde als NoSQL-Datenbank gewählt, da sie eine flexible und skalierbare Lösung für das Webprojekt bietet. Im Gegensatz zu relationalen Datenbanken ermöglicht MongoDB eine schemalose Speicherung, wodurch die Struktur der Daten einfacher angepasst werden kann. Auf Grund der Funktionalität der Plattform, die es Nutzer*innen ermöglicht, Notizen hochzuladen und herunterzuladen, ist eine dynamische und leistungsfähige Datenbanklösung erforderlich.

**Vorteile von MongoDB:**

- Flexible Datenstruktur durch JSON-ähnliche Dokumente
- Skalierbarkeit durch verteilte Speicherung
- Hohe Performance für Lese- und Schreiboperationen
- Einfache Integration mit Node.js

## 2. Erstellung der Datenbank

Die Datenbank wurde in MongoDB erstellt. Dazu wurden folgende Schritte durchgeführt:

1. **Erstellung der Datenbank und einer Kollektion**

   - In MongoDB wurde eine neue Datenbank erstellt.
   - Innerhalb dieser Datenbank wurden unterschiedliche Kollektion hinzugefügt.
   - Hierbei muss ebenfalls von den Entwickler*innen ein Benutzer angelegt werden, welcher Zugang zu der Datenbank hat.

2. **Verbindung zur Datenbank herstellen**

   - Über die MongoDB-Oberfläche wurde die Verbindungs-URI generiert.
   - Diese URI wurde in die Anwendung integriert, indem sie in einer Umgebungsvariable gespeichert wurde.

   ```javascript
   mongoose
     .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log("Verbunden mit MongoDB"))
     .catch((err) =>
       console.error("Fehler bei der Verbindung zu MongoDB:", err)
     );
   ```

## 3. Nutzung von Mongoose als Schnittstelle

Mongoose wurde als Object Document Mapping (ODM) Bibliothek verwendet. Mongoose ermöglicht eine einfache Interaktion mit der MongoDB-Datenbank durch definierte Schemas und Modelle.

**Vorteile von Mongoose:**

- Definiert die Struktur der gespeicherten Daten
- Ermöglicht Validierung und Middleware-Funktionalitäten
- Erleichtert die CRUD-Operationen (Create, Read, Update, Delete)

### 3.1 Definition des User-Schemas

Ein Schema definiert die Struktur eines Dokuments in einer Kollektion. Das `User`-Schema enthält drei Attribute: firstName, email, password. Der User benötigt für die Nutzung der Webpage seinen/Ihren Namen, Email und ein Passwort.

```javascript
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
```

## 4. CRUD-Operationen mit Mongoose

Mit Mongoose können verschiedene Operationen auf der Datenbank ausgeführt werden:

- **Erstellen eines neuen Nutzers:**

  ```javascript
  const newUser = new User({
    firstName: "Max",
    email: "max@example.com",
    password: "securepassword",
  });
  newUser
    .save()
    .then((user) => console.log("Benutzer gespeichert", user))
    .catch((err) => console.error(err));
  ```

- **Abrufen eines Nutzers:**

  ```javascript
  User.findOne({ email: "max@example.com" })
    .then((user) => console.log("Benutzer gefunden", user))
    .catch((err) => console.error(err));
  ```

- **Aktualisieren eines Nutzers:**

  ```javascript
  User.updateOne({ email: "max@example.com" }, { firstName: "Maximilian" })
    .then(() => console.log("Benutzer aktualisiert"))
    .catch((err) => console.error(err));
  ```

- **Löschen eines Nutzers:**

  ```javascript
  User.deleteOne({ email: "max@example.com" })
    .then(() => console.log("Benutzer gelöscht"))
    .catch((err) => console.error(err));
  ```

## 5. Fazit

MongoDB in Kombination mit Mongoose bietet eine leistungsfähige und flexible Lösung für das Webprojekt. Durch die Nutzung von JSON-Dokumenten und einer schemalosen Struktur wurde eine skalierbare Plattform für Schüler und Studierende geschaffen, die eine einfache Verwaltung und Speicherung von Notizen ermöglicht.

---

Literatur:
https://www.mongodb.com/resources/languages/mern-stack
