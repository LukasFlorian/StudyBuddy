# Labor 2

## XML-Dokumente und DTD

### XML-Dokumente und Namspaces

#### Aufgabe 1: 
Recherchieren Sie zunächst im Internet nach dem Begriff XML Namespaces und erklären Sie den Einsatzzweck anhand eines konkreten Beispiels.

#### Antwort 1: 
XML Namespaces können Konflikte verhindern, wenn aus unterschielichen XML-Standards Elemente kombiniert werden.

#### Beispiel 1: 
~~~xml
<library xmlns:book="http://example.com/books"
         xmlns:mag="http://example.com/movie">
    <book:title>Harry Potter</book:title>
    <moovie:title>Afrika Doku</mag:title>
</library>
~~~
Über `xmlns:book` und `xmlns:movie` wird verhindert, dass es Namenskonflikte gibt. Es könne in einem Dokument sowohl Movie, als auch Book Elemente verwendet werden. Beiden kann hier ein Titel zugewiesen werden, ohne dass Konflikte enstehen. 

#### Aufgabe 2: 
Erstellen Sie jetzt ein gültiges XML-Dokument für ihren aktuellen Vorlesungsplan. Die erlaubten Elemente und Attribute definieren Sie in einer externen DTD-Datei. Um den Begriff „Titel“ mehrfach verwenden zu können, setzen Sie Namespaces ein.

##### a) Baumartiges Datenmodell
- Vorlesungsplan
  - Vorlesung (Namespace: "modul")
    - Bezeichnung (z.B. "Web Engineering 1")
    - Dozent
    - Zeit
  - Raumplan (Namespace: "raum")
    - raumBezeichnung

##### b) DTD Datei: 
~~~xml
<!ELEMENT vorlesungsplan (vorlesung+, raumplan+)>
<!ELEMENT vorlesung (titel, dozent, zeit)>
<!ELEMENT titel (#PCDATA)>
<!ELEMENT dozent (#PCDATA)>
<!ELEMENT zeit (#PCDATA)>
<!ELEMENT raumplan (raumBezeichnung, raumBeschreibung)>
<!ELEMENT raumBezeichnung (#PCDATA)>
<!ELEMENT raumBeschreibung (#PCDATA)>
~~~

##### c) XML Datei
~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE vorlesungsplan SYSTEM "vorlesungsplan.dtd">
<vorlesungsplan xmlns:modul="http://example.com/modul"
                xmlns:raum="http://example.com/raum">
    <modul:vorlesung>
        <titel>Web Engineering 1</titel>
        <dozent>Prof. Schneider</dozent>
        <zeit>Mo 10:00 - 12:00</zeit>
    </modul:vorlesung>
    <raum:raumplan>
        <raumBezeichnung>H222</raumBezeichnung>
        <raumBeschreibung>Hörsaal</raumBeschreibung>
    </raum:raumplan>
</vorlesungsplan>
~~~

---

### XML-Dokumente und Textformatierung
#### Entfernen Sie ein bauartiges Datenmodeel und die dazugehörige DTD-Datei

Baumartiges Modell:
- Dokument
  - Überschrift
  - Absatz (enthält Formatierungen: fett, kursiv)
  - Leerzeilen

DTD-Datei:
~~~xml
<!ELEMENT dokument (ueberschrift, absatz+, leerzeile*)>
<!ELEMENT ueberschrift (#PCDATA)>
<!ELEMENT absatz (#PCDATA | fett | kursiv)*>
<!ELEMENT fett (#PCDATA)>
<!ELEMENT kursiv (#PCDATA)>
<!ELEMENT leerzeile EMPTY>
~~~

#### Zugehörigen Text als XML speichern
Annahme: Es müssen keine Zeilenumbrüche angegeben werden.
~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE dokument SYSTEM "./Edward_Snowden.dtd">
<dokument>
    <ueberschrift>Edward Snowden</ueberschrift>
    <absatz> <fett>Edward Snowden</fett> ist ein <kursiv>US-amerikanischern Whistleblower</kursiv> und 
    ehemaliger <kursiv>CIA-Mitarbeiter</kursiv>. Seine Enthüllungen gaben einblicke in das 
    Ausmaß der weltweiten Überwachungs- und Spionagepraktiken von 
    Geheimdiensten - überwiegend jenen der Vereinigten Staten und 
    Großbritanniens. Diese lösten im Sommer 2013 die NSA-Affäre aus.</absatz>
    <leerzeile/>
    <absatz>Er wurde dafür mehrfach von nichtstaatlichen Organisationen 
    ausgezeichnet und für den Friedensnobelpreis nominiert.</absatz>
</dokument>
~~~

### Zeichensätze, Code-Tabellen und Character Encoding
#### Erweitern der laborumgebung
Die Laborumgebung ist dementsprechend erweitert

#### UTF-8, UTF-16, UTF-32 Encoding von Zeichen
##### Erstellen einer Python Datei zum Einlesen von Glypehn und bestimmen des Unicode Code Poiont, Zeichen-Endcoding für UTF-8, UTF-16be und  UTRF32-be, sowie deren Namen in Unicode

~~~py
import unicodedata

# Zeichenliste
glyphs = ["֎", "E", "ü", "©", "€", "֍", "☯", "😇", "⚛"]

# Tabelle mit Unicode-Informationen erstellen
print(f"{'Zeichen':<8}{'Unicode Codepoint':<18}{'UTF-8':<20}{'UTF-16be':<20}{'UTF-32be':<20}{'Name'}")
print("="*90)

for char in glyphs:
    codepoint = f"U+{ord(char):04X}"
    utf8 = char.encode("utf-8").hex()
    utf16 = char.encode("utf-16be").hex()
    utf32 = char.encode("utf-32be").hex()
    name = unicodedata.name(char, "N/A")
    
    print(f"{char:<8}{codepoint:<18}{utf8:<20}{utf16:<20}{utf32:<20}{name}")

~~~

##### Vergleich  der Unicode-Encodings
UTF-8: Kompakt für europäische Sprachen, da Codierlänge der Zeichen variabel ist.
UTF-16: Vorteilhaft für asiatische Sprachen, da viele Zeichen lediglich 2 Bytes benötigen.
UTF-32: Belegt immer 4 Bytes pro Zeichen und benötigt am meisten Speicher. 

##### Erkärung 'Glyphe'
Glyphe bezeichnet die visuelle Darstellung eines zeichens. Der Buchstabe B kann beispielsweise verschiedene Glyphen haben (je nach Schriftart).

##### Ausgabe der Glyphen "֎Eü©€֍☯😇⚛" im Terminal 
__Beobachtung__: Der Befehl funktioniert nicht. Bereits bei dem Einfügen von `print("֎Eü©€֍☯😇⚛")` im Terminal werden lediglich die Zeichen "EÜ€" übernommen also der Befehl wird zu `print(EÜ€)`. Dementsprechend ist die ausgabe "EÜ€". 

__Erklärung__: Das Terminal unterstütz diese Unicode-Zeichen nicht.

