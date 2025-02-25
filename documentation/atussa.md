# Dokumentation zur Datenbank

## 1. Entscheidung für MongoDB

MongoDB wurde als NoSQL-Datenbank gewählt, da sie eine flexible und skalierbare Lösung für das Webprojekt bietet. Die Datenbank bietet eine flexible , skalierbare und leistungsstarke Möglichkeit zum Speichern von Daten. In MongoDB sind Datenbanken , Sammlungen und Dokumente die grundlegenden Bausteine ​​für die Datenspeicherung und -verwaltung . Im Gegensatz zu relationalen Datenbanken ermöglicht MongoDB eine schemalose Speicherung, wodurch die Struktur der Daten einfacher angepasst werden kann. Auf Grund der Funktionalität der Plattform, die es Nutzer\*innen ermöglicht, Notizen hochzuladen und herunterzuladen, ist eine dynamische und leistungsfähige Datenbanklösung erforderlich.

**Vorteile von MongoDB:**

- Flexible Datenstruktur durch JSON-ähnliche Dokumente
- Skalierbarkeit durch verteilte Speicherung
- Hohe Performance für Lese- und Schreiboperationen
- Einfache Integration mit Node.js

## 2. Erstellung der Datenbank

Die Datenbank wurde in MongoDB erstellt, dabei ist zu beachten, dass die Datenbank in MongoDB erst erstellt wird, wenn der User anfängt, Daten in diese Datenbank einzugeben. Dafür wurden folgende Schritte durchgeführt:

1. **Erstellung der Datenbank und einer Kollektion**

   - Zuallererst wurde MongoDB installiert
   - In der MongoDB interface wurde eine neue Datenbank erstellt.
   - Innerhalb dieser Datenbank wurden unterschiedliche Kollektion hinzugefügt.
   - Hierbei muss ebenfalls von den Entwickler\*innen ein Benutzer angelegt werden, welcher Zugang zu der Datenbank hat.

2. **Verbindung zur Datenbank herstellen**

   - Über die MongoDB-Oberfläche wurde die Verbindungs-URI generiert.
   - Diese URI wurde in die Anwendung integriert, indem sie in einer Umgebungsvariable gespeichert wurde.

```javascript
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/StudyBuddy";
```

## 3. Nutzung von Mongoose als Schnittstelle

Mongoose ist eine Object Document Mapping (ODM) Bibliothek. Genauer betrachtet ist sie eine Bibliothek für die Abbildung von Objekten auf Dokumenten. Somit ermöglicht Mongoose eine einfache Interaktion mit der MongoDB-Datenbank durch definierte Schemen und Modelle.

**Vorteile von Mongoose:**

- Definiert die Struktur der gespeicherten Daten
- Ermöglicht Validierung und Middleware-Funktionalitäten
- Erleichtert die CRUD-Operationen (Create, Read, Update, Delete)

  ```javascript
  mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Verbunden mit MongoDB"))
    .catch((err) =>
      console.error("Fehler bei der Verbindung zu MongoDB:", err)
    );
  ```

## Dokumentstruktur

https://www.geeksforgeeks.org/mongodb-database-collection-and-document/

Ein Dokument in MongoDB ist eine flexible Datenstruktur, die aus Feld-Wert-Paaren besteht . Zum Beispiel:

```javascript
{
  "Titel": "MongoDB-Grundlagen",
  "Autor": "John Doe",
  "Jahr": 2025
}
```

Felder in Dokumenten müssen mit Zeichenfolgen benannt werden. Der Feldname \_id ist für die Verwendung als Primärschlüssel reserviert . Der Wert dieses Felds muss eindeutig und unveränderlich sein und kann von jedem beliebigen Typ außer einem Array sein.
Der Feldname darf keine Nullzeichen enthalten.
Die Feldnamen der obersten Ebene sollten nicht mit einem Dollarzeichen ($) beginnen.
Dokumentgröße:
Die maximale Größe des BSON-Dokuments beträgt 16 MB. Dadurch wird sichergestellt, dass das einzelne Dokument nicht zu viel RAM oder Bandbreite (während der Übertragung) verbraucht. Wenn ein Dokument mehr Daten als die angegebene Größe enthält, stellt MongoDB eine GridFS-API zum Speichern solcher Dokumente bereit. Ein einzelnes Dokument kann doppelte Felder enthalten .

MongoDB speichert immer die Reihenfolge der Felder in den Dokumenten mit Ausnahme des Felds \_id (das immer an erster Stelle steht) und das Umbenennen von Feldern kann die Reihenfolge der Felder in den Dokumenten ändern.

### 3.1 Definition des User-Schemas

Ein Schema definiert die Struktur eines Dokuments in einer Kollektion. Jedes Schemata beinhaltet Properties, Type und ein Model. Das `User`-Schema enthält drei Attribute: firstName, email, password. Daraus kann entnommen werden, dass der User für die Nutzung der Webpage seinen/Ihren Namen, Email und ein Passwort benötigt.

```javascript
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
```

## 4. CRUD-Operationen mit Mongoose

Eine weitere Funktion von Mongoose ist, das verschiedene Operationen auf der Datenbank ausgeführt werden können. Unter diese Funktionen gehören zum Bespiel das Hinzufügen, Abfragen oder Löschen von Daten. Wir haben eine Funktionalitäten unserer Datenbank hinzugefügt, diese Methoden können neur Nutzer\*innen erstellen, abrufen, aktualisieren und löschen.

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

## 6. Fazit

MongoDB in Kombination mit Mongoose bietet eine leistungsfähige und flexible Lösung für das Webprojekt. Durch die Nutzung von JSON-Dokumenten und einer schemalosen Struktur wurde eine skalierbare Plattform für Schüler und Studierende geschaffen, die eine einfache Verwaltung und Speicherung von Lerninhalten ermöglicht.

---

Literatur:
https://www.mongodb.com/resources/languages/mern-stack
