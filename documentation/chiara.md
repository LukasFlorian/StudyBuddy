# Frontend: HTML und CSS
Mit Hilfe von HTML und CSS können die Struktur, der Inhalt und das Design von Webseiten
erstellt werden. Beide Sprachen arbeiten Hand in Hand, um einen ansprechenden und funktionalen 
Web-Auftritt zu erstellen.

Dieses Kapitel beschreibt den Entwicklungsprozess von StudyBuddy hinsichtlich der Sprachen HTML und CSS.
Es betrachtet die Entstehung von der Zieldefinition über den ersten Webseitenentwurf
bis hin zur finalen Gestaltung. Zudem werden die eingesetzten Hilfsmittel beschrieben, die 
diesen Prozess begleitet haben. Außerdem wird anhand ausgewählter Code-Beispiele
die Funktionsweise des Codes erläutert.

## Einleitung Zieldefinition

Für das Design der Wep-Applikation "StudyBuddy" hat sich das Team folgende Ziele gesetzt,
damit die Bedürfnisse der Zielgruppe Schüler und Studenten*innen optimal erfüllt werden:

- **Übersichtlichkeit und Klarheit:**   
    Zweck der Website ist u. A. Schüler*innen und Studierende beim Lernen zu unterstützen.
    Dabei kann das Lernen für Prüfungen mit unter eine emotionale Belastung darstellen. 
    Sei es der Leistungsdruck, der gefühlte Zwang sich mit Themen auseinander zu setzen, 
    für die man wenig bis kein Interesse aufbringen kann oder die Überforderung bei dem 
    Versuch ein neues Thema zu verstehen, das unbegreiflich scheint.   
    Aus diesem Grund soll StudyBuddy eine übersichtliche und klare Gestaltung haben, 
    damit die Applikation einfach zu bedienen ist und keinen weiteren Stress im Lernprozess bedingt.

- **Ansprechendes, durchgängiges Farbdesign:**  
    Die farbliche Gestaltung des Web-Auftritts soll eine stressfreie, motivierende und 
    konzentrationsfördernde Atmosphäre schaffen. Deshalb fokussiert sich die Farbauswahl
    auf Blau- und Lilatöne. Diese zeichnen sich nach der PAD-Theorie[^1] durch eine beruhigende physiologische und
    emotionale Stimulation, sowie durch eine angenehme Farbwahrnehmung aus.[^2]  
    Weiterhin wurden im :root-Element Farben für das User-Interface definiert, die auf den Webseiten angewendet werden. 
    Dadurch ergibt sich ein einheitliches und konstantes Farbbild.

- **Flexible Navigation:**
    Den Nutzer*innen soll eine flexible Navigation zwischen der Hauptseite und den Unterseiten ermöglicht werden. 
    Dadurch soll eine möglichst effiziente Nutzung der Website gewährleistet werden.
  


[^1]: Die PAD-Theorie (Pleasure-Arousal-Dominance-Theorie) aus der Farbpsychologie beschäftigt sich mit der Wirkung von Farben. Pleasure beschreibt, wie angenehm oder unangenehm eine Farbe empfunden wird. Arousal zeigt die physiologische und emotionale Stimulation. Dominance stellt dar, wie stark eine Farbe ein Gefühl von Kontrolle oder Macht vermittelt. 

[^2]: vgl. Valdez, P., & Mehrabian, A. (1994). Effects of color on emotions. Journal of Experimental Psychology: General, 123(4), 394–409

## Erster Entwurf

Zu Beginn des Projekts wurde ein erster Entwurf der Homepage erstellt. 
Dafür wurde das Design-Programm Figma genutzt. Damit war es möglich, als Team gemeinsam 
an einem Entwurf zu arbeiten.

Dieser erste Entwurf ist in der Abbilung 1 zu sehen.

Bereits beim initialen Design wurde die Auffassung geteilt, dass die Homepage möglichst 
übersichtlich gestaltet sein soll. Dazu gehörte, dass sich das Design auf die Funktionen 
Up- und Download (später umbenannt in Share und Browse) ausrichtet, denn diese bilden die 
Hauptfunktionen der Webapplikation.

Weiterhin wurde sich für den Namen "StudyBuddy" entschieden, da die Applikation genau dies für 
ihre Nutzenden darstellen soll - eine angenehme, positive Unterstützung beim Lernen. Außerdem impliziert
"Buddy" - im Sinne von Freund - dass man mit anderen Lernenden zusammenarbeiten kann, indem man 
seine Lernunterlagen austauscht.

Abweichend von ursprünglichen Entwurf wurde die Farbauswahl getroffen. Wie in der Einleitung 
beschrieben, wurden Blau- und Lilatöne als Hauptfarben definert.  
Zudem wurden Anpassungen bei den Bildern vorgenommen. Wie in Abbildung 1 zu sehen ist, wirken 
die ersten Grafiken tendenziell kalt und wenig ansprechend. Deshalb wurden mit 
Microsoft Designer neue Bilder generiert.  
Eine weitere Veränderung ist, dass die Verlinkung zu "About Us", also dem Impressum, nicht mehr 
im Header zu finden ist. Da diese Unterseite keine der Hauptfunktionen von StudyBuddy
beinhaltet, wurde die Verknüpfung im footer der Webseiten aufgenommen.

Hiermit wurde der intiale Entwurf des Webseiten-Designs aufgezeigt. 
Im anschließenden Teil werden die Hilfsmittel beschrieben, die im bisherigen und folgenden
Entwicklungsprozess genutzt wurden.

## Hilfsmittel

### Literatur

**Wolf, Jürgen: HTML und CSS: Das umfassende Handbuch,**  
5., aktualisierte und überarbeitete Auflage 2023, Rheinwerk Verlag GmbH, Bonn 2023.

Dieses Buch wurde zur Bildung eines grundsätzlichen Verständnisses 
sowie als Nachschlagewerk für die verschiedenen HTML- und CSS-Elemente
genutzt.
Anfangs wurde es zur Vermittlung von Grundkenntnissen zu 
CSS-Gestaltungsmöglichkeiten und deren Anwendung verwendet. Dazu 
gehörten beispielsweise die Verwendung von margin, padding, color, 
border-Design und font-Design. Weiterhin wurden die verschiedenen 
Maßeinheiten in CSS und die Codierung von Farben erlernt. 

Im späteren Lauf diente dieses Werk zur Vertiefung des Wissens über 
CSS-Flexboxen, CSS-Grid und responsives Design.

**Schneider, Jürgen: Vorlesungsskript Web Engineering Kap 3 und Kap 4**  
Die Vorlesungsskript Kapitel 3 und Kapitel 4 wurden als Nachschlagewerk 
für den Aufbau und die Gestaltung der Webapplikation genutzt. Die beiden
Kapitel behandeln die Themen HTML und CSS.


### Artificial Intelligence

**Microsoft Designer**  
https://designer.microsoft.com/home 

Die Bildgenerierung Software Microsoft Desinger wurde zur Erstellung der Grafiken verwendet.  
Mittels des Prompts _"Logo für eine App mit Namen "StudyBuddy" in blau und 
lila. Mit dem text "studybuddy"."_ wurden mehrere Varianten des gewählten
Logos bzw. Icons erzeugt. Eine Schwierigkeit stellte dabei dar, dass die 
Bilder meist den Schriftzug "Studdybuddy" erhielten, der einen Tippfehler 
hatte. Trotz des Hinweisens der KI auf diesen Fehler, konnte keine 
Korrektur erfolgen. 
Deshalb wurde der Schritfzug manuell erstellt.

Weiterhin wurden die beiden Bilder auf der Homepage mit Microsoft Designer 
erstellt. Der hier verwendete Prompt ist _"In blau und lila. Gezeichnete 
Figur, die am PC etwas sucht. "studybuddy""._ Dort wurden aus vier 
generierten Bildern die zwei Grafiken ausgewählt, die auch auf der Homepage 
zu sehen sind.

### Webseiten und -applikationen

**Can I Use**  
https://caniuse.com/

Diese Webseite bietet die Möglichkeit, CSS-Selektoren oder -Eigenschaften auf ihre Kompatibilität mit Browsern zu prüfen. 

Dementsprechend für diese Anwendung genutzt, um die Kompatibilität des erstellen CSS-Codes mit den Browser Mozilla Firefor, Google Chrome, Microsoft Edge und Safari abzufragen.

**Coloors Image Picker**
https://coolors.co/image-picker/

Diese Anwenung wurde zur Erstellung der Farbauswahl für die Webseite genutzt. Nach dem Hochladen des Logos, konnten verschiedene Farben aus dem Logo extrahiert und die HEX-Werte für diese Farben ausgelesen werden.
Die hier erstellte Farbauswahl findet sich in den "UI"-Farben wieder, welche im :root-Element des CSS-Codes definiert wurden.

**Figma**  
https://www.figma.com/de-de/

Figma ist ein Design-Tool, mit dem der erste Webseitenentwurf erstellt wurde.
Dieser wird in der Einleitung dieses Kapitels beschrieben.


**Google Font Icons**
https://fonts.google.com/icons

Google Font bietet eine große Bibliothek von u. A. Icons an. 
Die Symbole im Login-Formular und Signup-Formular als svg-Elemente über 
Google Font bezogen. Dabei kann z. B. die Farbe und das Filling der Icons 
über Google Font definert werden. Im Anschluss kann der Code zum 
svg-Element kopiert und in der HTML-Datei eingefügt werden.

**IANA Media Types**  
https://www.iana.org/assignments/media-types/media-types.xhtml#image

Hier kanne eine gesammelte Auskunft über Medientypen eingesehen werden. 
Dies wurde für die Bestimmung der erlaubten Uploaddatein auf der Seite 
"Share" benötigt.  
Codeauszug:  
```html
<input type="file" id="upload" name="uploadFile" accept="image/*, application/pdf" />
```
Hier wurde ein Upload für alle Image Datentypen sowie für PDF festgelegt.
Denn StudyBuddy möchte den Austausch von z. B. Fotos von Lernunterlagen, 
aber auch von PDFs ermöglichen.

**mdn web docs**  
https://developer.mozilla.org/en-US/docs/Web/CSS

Diese Webseite bietet ausführliche Erklärungen zu den Funktionsweisen, dem Syntax und der Browser-Kompatibilität von HTML- und CSS-Elementen. 
Deshalb wurde diese Webseite zur Schaffung eines tieferen Verständnisses 
für die Anwendung und die korrekte Implementierung einiger CSS-Elemente 
verwendet. Beispielhaft können hier das aside-Element oder der Border-Style
 genannt werden.

**RealFaviconGenerator**  
https://realfavicongenerator.net/

Diese Seite kann zur Erstellung von eines Favicon in verschiedenen 
Dateiformaten verwendet werden. 
Für dieses Projekt wurden die Dateien favicon.svg und favicon-96x96.png mit 
Hilfe der Applikation erstellt. Grundlage dafür war das zuvor generierte 
Logo-Design.


**svg repo**
https://www.svgrepo.com/svg/408497/arrow-03

Svg repo ist eine Bibliothek für svg-Dateien. Von dort wurde der pinke Pfeil der Homepage kopiert und im HTML-Code eingebunden.


**W3C Font-Families**  
https://www.w3.org/Style/Examples/007/fonts.en.html

Die Unterseite zu Font-Families gibt eine Übersicht über das Aussehen verschiedener Font-Families in CSS. Damit konnte das Design der Schriften 
verglichen und die hier bevorzugte Font-Family "monospace" ausgewählt 
werden.

**W3 Schools**  
https://www.w3schools.com/

Die Lernplattform W3 School wurde zum Lernen und Testen genutzt. Auf der 
einen Seite konnten, mittels der ausführlichen und gut strukturierten 
Beispiele, neue Kenntnisse zur Funktionsweise von HTML und CSS gewonnen 
werden. Auf der anderen Seite wurden mit Hilfe des integrierten 
"Try-it-Yourself"-Editors die Auswirkung von unterschiedlichen 
Programmbestandteilen getestet. 



# Hypertext Markup Language (HTML)

Die Hypertext Markup Language (HTML) ist eine standartisierte Sprache zur 
Erstellung von Websiten. Mit ihr können die Struktur und die Inhalte einer 
Webseite programmiert werden. 

Dieses Kapitel beschäftigt sich mit der HTML-Programmierung von StudyBuddy.
Dabei wird zuerst auf die Sitemap der Webapplikation eingegangen um ein 
grundsätzliches Verständnis für die Webseiten zu schaffen. Anschließend wird
deren Aufbau mittels Kompositionsdiagramme dargestellt.
Abschließend wird anhand eines Code-Beispiels die Funktionsweise aufgezeigt.

## Sitemap

### Weitere Anwendungen

**Microsoft PowerPoint**
PowerPoint wurde zur Erstellung der Kompositionsdiagramme und zur Skalierung von
Grafiken verwendet.

# Cascading Style Sheet (CSS)




## Aufbau des Codes

Im Folgenden wird die Struktur des CSS-Codes beschrieben.  

Zuerst werden im Code die allgemeinen Gestaltungsregeln festgelegt, die auf alle Webseiten Einfluss haben. 
Dazu gehören das :root-Element, der Header der Webseiten, das <main>-Element inkl. der Klasse ".introduction", 
sowie der footer.

Anschließend wird auf das Design der Elemente der jeweiligen Webseiten eingegangen. 
Dabei werden die Elemente und Klassen in der Reihenfolge gestaltet, in der sie in den 
zugehörigen HTML-Dateien erstellt werden.

Im Anschluss an das Webseitendesign folgen die Anpassungen für das responsive Design
und die Programmierung von Animationen.


Innerhalb eines Selektors sind die Eigenschaft-Wert-Paare alphabetisch nach der Eigenschaft sortiert.


Es ergibt sich nachstehende Grob-Gliederung:

        1 :root
        2 all websites
            2.1  header
                2.1.1 header logo  
                2.1.2 header navigation  
            2.2 main incl. main-introduction
            2.3 footer
        3 homepage
        4 login/signup
        5 impressum
        6 browse
            6.1 browse searchbar
            6.2 browse sidebar
            6.3 browse main
        7 share
        8 responsive design
        9 animations

## Erläuterung eines Code-Bespiels

Einen besonderen Gestaltungsaufwand haben die Buttons der Klasse ".hp-button" mit sich gebracht.
Daher dienen diese als exemplarische Code-Beispiele zur Erläuterung des CSS-Designs.


### Auszug HTML-Code zu .hp-button
```html
<button class="hp-button" onclick="window.location.href='./browse';">Browse Notes</button>
```

### Auszug CSS-Code zu .hp-button
```css
.hp-button {
    appearance: none;
    background-color: var(--ui-blue);
    border: 2px solid var(--ui-blue);
    border-radius: 15px;
    color: white;
    cursor: pointer;
    font-size: var(--ui-font-size-big);
    font-weight: 550;
    margin: 0 auto;
    min-height: 60px;
    outline: none;
    padding: 1rem;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    width:45%;
    will-change: transform;
}

.hp-button:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-3px);
}

.hp-button:active {
    box-shadow: none;
    transform: translateY(0);
}
```

### Erklärung Funktionsweise

**.hp-button**
Durch diesen Selektor werden alle Elemente mit der Klasse "hp-button" angesprochen.

**appearance: none;** 
Das plattform- bzw. betriebssystemspezifische Aussehen des Buttons wird versteckt.

**background-color: var(--ui-blue);** 
Der Button bekommt die Hintergrundfarbe "-ui-blue" zugewiesen. Diese Farbe wurde im :root-Element definiert und 
hier über die Var()-Funktion aufgerufen. 
Bei der Definition im :root-Element können z. B. Farben oder Schriftarten für die gesamte CSS-Datei bestimmt werden.
Dies ermöglicht eine effiziente und flexible Festlegung von wiederkehrenden Eigenschaften und Werten, die einmal definiert 
und anschließend für beliebig viele Elemente angewendet werden können.

**border: 2px solid var(--ui-blue);**  
Diese Kurzschreibweise beschreibt die Breite (border-width), den Style (border-style) und die Farbe (border-color) des Rahmens.
Der hier programmierte Rahmen ist 2 Pixel breit, hat eine durchgezogene Linie und hat die Farbe "-ui-blue" zugewiesen. 
Alle 4 Seiten des Rahmens haben die gleiche Gestaltung.

**border-radius: 15px;**  
Der Radius des Rahmens von 15 Pixeln gibt eine Abrundung der Ecken des Rahmens an.

**color: white;**  
Die Schriftfarbe des Buttons ist weiß.

**cursor: pointer;**  
Die Darstellung des Mauszeigers verändert sich zu einer kleinen Hand, wenn der Mauszeiger über den Button bewegt wird. Dadurch wird
dem Nutzenden angezeigt, dass eine Verlinkung und die Möglichkeit, diese anzuklicken, existiert.

**font-size: var(--ui-font-size-big);**  
Die Schriftgröße des Buttontextes wird auf den Wert "--ui-font-size-big" festgelegt. 
Hierbei handelt es sich ebenfalls um eine benutzerdefinierte Größe, die im :root-Element definiert wird.
Der Wert ist max(1rem, 2vw). Durch die Max-Funktion wird stets der größere der beiden aufgeführten Werte angenommen.
Da es sich bei 16px um einen absoluten Wert handelt, wird dieser nur angenommen, 
wenn 2vw (2 % der Viewport-Breite) kleiner als 16 Pixel ist. So passt sich die Schriftgröße responsiv an die Viewport-Breite an.

**font-weight: 550**;  
Mit font-weight kann die Stärke (Fettheit) der Schrift eingestellt werden. 
Der Normalwert einer Schrift liegt bei 400, weshalb der hier eingestelle Wert 
von 550 die Schrift fetter darstellt als normal.

**margin: 0 auto;**  
Der Abstand um das Element herum wird oben und unten auf 0 gesetzt (es wird kein Abstand definiert). 
Der Wert auto für die linke und rechte Seite um das Element bedingen eine zentrierte Ausrichtung.

**min-height: 60px;**  
Der Button hat eine Mindesthöhe von 60px.

**outline: none;**  
Die Umrandung des Buttons wird deaktiviert.

**padding: 1rem;**  
Der Abstand zwischen Inhalt und Rahmen des Elementes wird auf 1 rem (root em) festgelegt. 
Diese Schreibweise gibt den Abstand für alle 4 Seiten um den Inhalt an.
1 rem entspricht der Schriftgröße, die im root-Element (entspricht html-Element oder :root-Element) definiert wurde.
In diesem Programm sind 1 rem 16 Pixel.

**text-align: center;**  
Der Text wird zentriert ausgerichtet.

**text-decoration: none;**    
Die Textdekorationen wie z. B. eine Unterstreichung werden entfernt. 

**transition: all 0.3s ease-in-out;**  
Dem Button wird ein Übergang zugewiesen. 
Der erste Wert all beschreibt, dass alle veränderbaren Eigenschaften wie z. B. die Position des Buttons beeinflusst werden.
Der zweite Wert 0.3s definiert, dass der Übergang 0.3 Sekunden, also 300 Millisekunden dauert.
Der letzte Wert ease-in-out legt den Ablauf der Animation fest. Die Animation startet langsam, beschleunigt in der Mitte und endet langsam.
Dadurch soll ein sanfter Effekt entstehen.

**width:45%;**   
Die Breite des Buttons wird auf 45 % des Eltern-Elements festgelegt.

**will-change: transform;**  
Dem Browser wird mitgeteilt, dass dem Button eine Transformation bevorsteht. 
Dadurch können Animationen und Übergänge flüssiger dargestellt werden.

&nbsp;


**.hp-button:hover**  
Mittels des Selektor :hover wird die Gestaltung definiert, die sichtbar wird, sobald der Mauszeiger über dem Button-Element schwebt.

**box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;**  
Der Button bekommt einen Schatten zugewiesen. Der RGBA-Wert definiert dabei die Farbe des Schattens. RGBA steht für Rot, Blau, Grün und Alpha. Mittels dieser Parameter kann eine Farbe codiert werden. Dabei legen Rot, Grün und Blau den jeweiligen Anteil in der Farbe fest und Alpha steht für die Deckkraft bzw. Transparenz. In diesem Beispiel wurde eine schwarze Farbe mit einer Deckkraft von 25 % bzw. einer Transparenz von 75 % gewählt.  
Die darauf folgenden drei Werte legen die Breite, Höhe und Unschärfe des Schattens fest.  
Der erste Wert ist die horizontale Breite - hier 0 Pixel.  
Der zweite Wert bestimmt die vertikale Höhe des Schattens - hier 8 Pixel.  
Der letzte Wert definiert die Unschärfe, also wie verschwommen der Schatten sein soll. Die im Code gewählte Unschärfe von 15 Pixel sorgt dafür, dass der Schatten optisch einen fließenden Übergang hat und keine harten Kanten entstehen.  

**transform: translateY(-3px);**
Es wird eine Transformation des Elements definiert. Die Funktion translateY beschreibt einen Verschiebung entlang der vertikalen Achse. Der Wert -3px legt dabei fest, dass die Verschiebung um 3 Pixel nach oben sein soll.

Die Kombination aus box-shadow und transform sorgt dafür, dass der Button etwas nach oben zu schweben scheint, wenn man mit dem Mauszeiger über ihn fährt.

&nbsp;


**.hp-button:active**   
Mit dem Selektor :active wird das Design beim Anklicken des Button bestimmt.

**box-shadow: none;**   
Der zuvor bei :hover definiert Schatten wird aufgehoben.
 
**transform: translateY(0);**  
Die zuvor bei :hover festgelegte Verschiebung entlang der vertikalen Achse wird entfernt. Der Button kehrt auf seine Ausgangsposition zurück.

# Abbildungsverzeichnis
Abb. 1: Erster Entwurf der Homepage 

![Erster Entwurf der Homepage](C:\Users\chiar\Labor\WebEngineering\Projekte\WebApp\img_md\firstDraft.png)

# Stichwortverzeichnis

CSS:  
Cascading Style Sheet

HTML:   
Hypertext Markup Language

SVG:   
Scalable Vector Graphics. Dieses Dateiformat stellt vektorbasierte Grafiken dar. Es eignet sich gut für den Einsatz im Webdesign, da es eine Skalierung ohne Qualitätsverlust ermöglicht. Weiterhin kann eine svg-Datei als svg-Element in HTML eingebunden und mit CSS bearbeitet werden.

