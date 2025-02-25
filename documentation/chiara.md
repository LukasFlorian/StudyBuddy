## Frontend: HTML und CSS
Mit Hilfe von HTML und CSS können die Struktur, der Inhalt und das Design von Webseiten
erstellt werden. Beide Sprachen arbeiten Hand in Hand, um einen ansprechenden und funktionalen 
Web-Auftritt zu erstellen.

Dieses Kapitel beschreibt den Entwicklungsprozess von StudyBuddy hinsichtlich der Sprachen HTML und CSS.
Es betrachtet die Entstehung von der Zieldefinition über den ersten Webseitenentwurf
bis hin zur finalen Gestaltung. Zudem werden die eingesetzten Hilfsmittel beschrieben, die 
diesen Prozess begleitet haben. Weiterhin wird anhand ausgewählter Code-Beispiele
die Funktionsweise des Codes erläutert.

### Zieldefinition

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

### Erster Entwurf

Zu Beginn des Projekts wurde ein erster Entwurf der Homepage erstellt. 
Dafür wurde das Design-Programm [Figma](#webseiten-und--applikationen) genutzt. Damit war es möglich, als Team gemeinsam 
an einem Entwurf zu arbeiten.

[**Abbilung 1**](#abb-1-erster-entwurf-der-homepage) stellt den ersten Entwurf dar.

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
Im folgenden Teil wird auf die Erstellung der Strukur und des Inhalt mittels HTML
eingegangen. Anschließend wird die Gestaltung mit CSS dokumentiert.


## Hypertext Markup Language (HTML)

Die Hypertext Markup Language (HTML) ist eine standartisierte Sprache zur 
Erstellung von Websiten. Mit ihr können die Struktur und die Inhalte einer 
Webseite programmiert werden. 

Dieses Kapitel beschäftigt sich mit der HTML-Programmierung von StudyBuddy.
Dabei wird zuerst auf die Sitemap der Webapplikation eingegangen um ein 
grundsätzliches Verständnis für Verknüpfung der Webseiten zu schaffen. Anschließend wird
deren Aufbau mittels Kompositionsdiagramme dargestellt.
Abschließend wird anhand eines Code-Beispiels die Funktionsweise aufgezeigt.

### Sitemap

[**Abbilung 2**](#abb-2-sitemap) zeigt die Sitemap von StudyBuddy.

Die Homepage stellt den Ausgangspunkt der Webapplikation dar. Von dort ermöglicht die Struktur eine bidirektionale Navigation zwischen den Unterseiten "Login", "Impressum", "Browse" und "Share".
Eine Ausnahme der von der vollständigen Verlinkung stellt die Seite "Signup" dar. Diese ist nur vom "Login" aus zu erreichen. Dieser Aufbau wurde gewählt, da der "Signup" aus Sicht des Users nur einmal aufgerufen werden muss und bei der anschließenden Nutzung der "Login" ausreichend ist.

### Kompositionsdiagramme

Kompositionsdiagramme dienen dazu, den Inhalt und die Struktur der Webseiten zu visualisieren.

Die Darstellung erfolgt in Form von rechteckigen Containern. Der grundlegende Container ist  
meist das body-Element, da dieses das Fundament des sichtbaren Bereiches einer Webseite ist.
In jedem Containern können weitere Sub-Container plaziert werden, die wiederum untergeordnete
Container enthalten können.

Ziel ist es, den Aufbau der HTML-Elemente und deren Platzierung zu- bzw. ineinander grafisch darzustellen. 

Der Webauftritt von StudyBuddy zeichnet sich dadurch aus, dass alle Webseiten innerhalb des body-Elements die Subelemente "header", "main" und "footer" haben. Da durch wird ein einheitliches Design geschaffen und der Wiedererkennungswert für die Nutzenden erhöht.

Eine weitere Gemeinsamkeit der Homepage und der Unterseiten "Impressum", "Browse" und "Share"   ist die Sektion der Klasse "introduction". Diese Sektion befindet sich zu Beginn des main-Elements. Aufgrund der Gestaltung dieser Klasse, erhalten diese Webseiten eine kohärent 
designte Einleitung bzw. Überschrift.

Neben den Gemeinsamkeiten haben die Webseiten einige individuelle Strukuren. Diese werden im anschließenden Teil genauer beleuchtet.



#### Kompositionsdiagramm Homepage

Die [Abbildung 3](#abb-3-kompositionsdiagramm-homepage) zeigt das Kompositionsdiagramm der Homepage.

Neben des bereits beschriebenen Aufbaus enthält das main-Element ein svg-Element und eine Sektion der Klasse "hp-main-container".
Die skalierbare Vektorgrafik stellt einen pinken Pfeil dar, der den Fokus des Webseitenbesuchers auf den Browse-Button lenkt. Dadurch soll der Nutzende zur Interaktion mit diesem Button animiert werden.

Weiterhin umfasst die Sektion "hp-main-container" 4 Elemente: zwei Buttons und zwei Bilder. 
Bei den Buttons handelt es sich um Verlinkungen der Hauptfunktionen "Browse" und "Share" während die Grafiken zur optischen Aufwertung eingesetzt werden. 
Das Ziel dieser Struktur ist es, ein Elternelement für die Buttons und Bilder zu schaffen, welches sich als CSS-Flexbox zur Anordnung der Inhalte nutzen lässt.

Die Homepage soll insgesamt als ansprechende Aufmachung der WebApplikation dienen und den Nutzenden umgehend zu einer weiteren Interaktion einladen.


#### Kompositionsdiagramm Login und Signup

Die Struktur des Logins und des Signups lassen sich der [Abbildung 4](#abb-4-kompositionsdiagramm-login) und [Abbildung 5](#abb-5-kompositionsdiagramm-signup) entnehmen.

Die beiden Webseiten enthalten in dem main-Element ein Formular und einen Verlinkung untereinander.

Innerhalb des form-Element wird beim Login die e-Mail-Adresse und das Passwort eines Nutzenden abgefragt. Diese Informationen 
werden benötigt um eine Identifizierung und den damit verbundenen
Login zu ermöglichen.

Das Formular der Signup-Seite entscheidet sich insofern, dass das Login-Formular um die beiden Eingabe-Elemente "firstname" und "repeat password" erweitert wird.
Diese Daten werden einmalig bei der Erstellung eines neuen Users erfasst.
Der Vorname des Users wird benötigt, um diesen nach dem Login im Header anzuzeigen. Die Wiederholung des Passworts dient dazu, Tippfehlern im Paswort bei dessen Initialisierung entgegenzuwirken.

Die Verlinkung der beiden Webseiten untereinander wird durch die Einbettung eines Anker-Elements innerhalb eines Parapraphen realisiert.

Die beiden Seiten haben das Ziel, neue Nutzer*innen für die Webapplikation zu erfassen und diese anschließend zu identifizieren.

#### Kompositionsdiagramm Impressum

Die [Abbildung 6](#abb-6-kompositionsdiagramm-impressum) zeigt das Kompositionsdiagramm des Impressums.

Der Aufbau des Impressumg ist relativ schlicht gehalten.  
Innerhalb des main-Elements wird nach der Einleitung ein sektion-Element mit der Klasse "impressum-container" eingebettet. Dieses enthält eine h2-Überschrift und drei Paragraphen in Form von p-Elementen. 
 
Durch diese Struktur, wird ein übersichtliches Impressum mit einem klaren Fokus auf die enthaltenen Kontaktdaten geschaffen.

#### Kompositionsdiagramm Browse

Die Strukur der Browse-Seite wird in der [Abbildung 7](#abb-7-kompositionsdiagramm-browse) dargestellt.

Hier folgt auf die Einleitungssektion ein div-Element der Klasse "browse-search". 
Dieses enthält ein Formular, das mit Hilfe von CSS als Suchleiste gestaltet wird.

Anschließend wird ein div-Element mit der Klasse "browse-container" erzeugt. 
Dieses umfasst eine Seitenleiste und einen Hauptbereich.

Die Seitenleiste wird durch ein div-Element dargestellt und bietet Filteroptionen für die Suchergebnisse. Zur Auswahl stehen die Tags, die beim Hochladen einer Datei festgelegt werden können.  
Hier ist besonders zu erwähnen, dass sowohl die Suchleiste als auch die Seitenleiste dasselbe Form-Attribut mit dem Wert "search-form" haben.
Dadurch ist es möglich, den Suchbegriff und die gewählten Filter innerhalb einer GET-Request zu übermitteln.


Im Hauptbereich werden die Suchergebnisse ausgegeben. 
Dazu werden dynamisch - in Abhängigkeit der Suchtreffer - div-Elemente über iene Skript erstellt.

#### Kompositionsdiagramm Share

Die [Abbildung 8](#abb-8-kompositionsdiagramm-share) zeigt das Kompositionsdiagramm der Share-Seite.

Die Share-Seite hat den Zweck, dass Nutzer*innen neue Lernunterlagen hochladen können.
Deshalb enthält das main-Element einen Container ("share-container") mit einem Upload-Formular.
In diesem können Dateiname, Beschreibung und Tags der Lernunterlage definiert werden. Bei der Auswahl der Tags kann
nur eine der drei Optionen "exercises", "summary" und "scribbeld Notes" auf eine Lernunterlage zutreffen. Deshalb werden die Tags über Radiobuttons abgefragt, die nur die Auswahl einer Option zulassen.
Weiterhin wird ein input-Element mit dem Attribut type="file" genutzt, um das Hochladen einer Datei zu ermöglichen.
Abschließend kann der Upload über button-Element abgeschlossen werden.

Die Share-Seite stellt neben der Browse-Seite eine Hauptfunktion von StudyBuddy dar. Deshalb ist auch hier der Fokus auf der Benutzerfreudlichkeit. Diese steht allerdings im Konflikt mit dem Ziel eine möglichst gute Informationslage zu der hochgeladenen Datei zu erfassen.
Somit musste abgewogen werden, wie viele Details vom User zu einer Datei abgefragt werden können, bevor sich dieser gegen einen ggf. aufwändigen Upload entscheidet würde.
Mit der aktuellen Lösung wird versucht, den beiden Zielen bestmöglich gerecht zu werden.


## Cascading Style Sheet (CSS)

CSS bietet die Möglichkeit, eine HTML-Strukur visuell zu gestalten. 
Dadurch kann einer Webseite ein gewünschtes Design gegeben werden.

Im diesem Teil wird dokumentiert, wie der CSS-Code von StudyBuddy aufgebaut ist und wie sich dieser auf die HTML-Dokumente auswirkt. Die Funktionsweise wird anhand eines Code-Beispiels ausführlich erläutert.

### Aufbau des Codes

Im ersten Teil des CSS-Codes werden Gestaltungsmerkmale festgelegt, die auf alle oder einige Webseiten Einfluss haben.
Dazu gehören das :root-Element, der Header der Webseiten, das main-Element inkl. der Klasse ".introduction" und sowie der footer.

Anschließend wird die Webseiten-spezifische Gestaltung codiert. 
Dazu wird immer für eine Unterseite das komplette Design dieser Webseite gestaltet, bevor auf die Nächste eingegangen wird. 
Die Elemente und Klassen einer Seite werden in der Reihenfolge gestaltet, in der sie in den 
zugehörigen HTML-Dateien erstellt werden.

Im Anschluss an das Webseitendesign folgen die Anpassungen für das responsive Design
und die Programmierung von Animationen.

Für den gesamten CSS-Code gilt: Innerhalb eines Selektors sind die Eigenschaft-Wert-Paare alphabetisch nach der Eigenschaft sortiert.


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

### Erläuterung eines Code-Bespiels

Einen besonderen Gestaltungsaufwand haben die Buttons der Klasse ".hp-button" mit sich gebracht.
Daher dient diese als exemplarisches Code-Beispiele zur Erläuterung eines CSS-Designs.


#### Auszug HTML-Code zu .hp-button
```html
<button class="hp-button" onclick="window.location.href='./browse';">Browse Notes</button>
```

#### Auszug CSS-Code zu .hp-button
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

#### Erklärung Funktionsweise

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

Die Kombination aus box-shadow und transform sorgt dafür, dass der Button etwas nach oben zu schweben scheint, wenn man mit dem Mauszeiger über ihn fährt. Diese Animation hat das Ziel, den Nutzenden zum Anklicken des Buttons anzuregen.

&nbsp;


**.hp-button:active**   
Mit dem Selektor :active wird das Design beim Anklicken des Button bestimmt.

**box-shadow: none;**   
Der zuvor bei :hover definiert Schatten wird aufgehoben.
 
**transform: translateY(0);**  
Die zuvor bei :hover festgelegte Verschiebung entlang der vertikalen Achse wird entfernt. Der Button kehrt auf seine Ausgangsposition zurück. Der Mausklick wird so visuell bestätigt.

### Responsives Design

StudyBuddy soll eine Webapplikation für verschiedene Endgeräte sein. Deshalb wird App responsiv gestaltet, um eine opitmale Nutzererfahrung auf allen Bildschirmgrößen zu ermöglichen.
Damit soll das ansprechende Design und die Lesbarkeit für alle Endgeräte sichergestellt werden.

#### Breakpoints
Als Grundlage für das Responsive Design wurden Breakpoint festgelegt. Dabei handelt es sich um Bildschirmgrößen, bei denen eine maßgebliche Veränderung der Gestaltung angewendet wird.

In Anlehnung an die Breakpoints des ChromeDevTool (Developer Tool) sind folgende Intervalle definiert:

    bis 425 Pixel Bildschirmbreite:   
    Damit werden vorranging kleine Endgeräte wie Smartphones angesprochen. Bei diesen ist die Bildschirmbreite im Verhältnis zur Höhe gering, weshalb beim Design Elemente bevorzugt untereinander und nicht nebeneinander angeordnet werden.
    
    426 bis 768 Pixel Bildschirmbreite:
    Für mittelgroße Endgeräte wie z. B. Tablets.
    
    Über 768 Pixel Bildschirmbreite:
    Diese Gestaltung richtet sich an große Endgeräte wie Laptops und Bildschirme.
    Bei diesen in der Bildschirm meist breiter als hoch, weshalb Elemente nebeneinander dargestellt werden können.
    
#### Umsetzung der Responsivität

Zur praktischen Umsetzung des responsiven Design wurden wurden CSS-Flexboxen, die max()- und min()-Funktion, relative 
Maßeinheiten und Media Queries genutzt. 

Diese werden im Folgenden genauer beleuchtet.

**CSS-Flexboxen**

Mit Flexboxen können die Kindelemente eines Elements flexibel 
angeordnet werden. 
Zum einen wird die Position der Kindelemente über justify-content (horizontal) und align-items (vertikal) relativ zueinander oder innerhalb des Elternelements festgelegt. Dadurch ergibt sich der Vorteil, das keine absoluten Größen benötigt werden.  
Zum anderen ist es möglich, das Verhalten der untergeordneten Elemente bei 
einer Vergrößerung, Verkleinerung und deren Größe im Elternelement zu 
steuern. Mittels der Eigenschaft flex können der Wachstums-, der 
Verkleinerungsfaktor und die Basisgröße definiert werden. Ändert sich die Größe des Anzeigefensters, können sich die Kindelemente flexibel der
Größenänderung anpassen.

**max()- und min()-Funktion:**

Die beiden Funktionen können genutzt werden, einen von mehreren Werten auszuwählen.

Die max()-Funktion gibt immer den größten Wert zurück. Bei der min()-Funktion ist es umgekehrt.

Für die Gestaltung der Schriftgrößen von StudyBuddy wurde die max()-Funktion im :root-Element genutzt.

```css
    --ui-font-size-big: max(1rem, 2vw);
    --ui-font-size-small: max(0.8rem, 2vw);
    --ui-font-size-text: max(0.6rem, 1.4vw);
```
Dadurch passen sich die Schriftgrößen abhängig von der Bildschirmbreite an. 
Beträgt die Bildschirmbreite bspw. 2000 Pixel, so würde die max()-Funktion der --ui-font-size-big zwischen den Werten 1 rem (16 Pixel) und 2000*0,02 = 40 Pixel die Schriftgröße von 40 Pixeln auswählen.
Sobald der Wert 2vw (Prozentualer Anteil der Bildschirmbreite, view width) kleiner als die Größe 1 rem werden, so bleibt die Mindestschriftgröße bei 1 rem.

So kann sicher gestellt werden, dass die Schriftgröße nicht kleiner als 1 rem wird, diese sich aber bei großen Bildschirmen entsprechend vergrößert.

Die min()-Funktion wurde im Zusammenhang mit der Breite des Signups verwendet.
```css
  .signup{
        width: min(500px, 100%);
    }
```

Hier wird bestimmt, dass das Element der Klasse "signup" maximal 500 Pixel 
breit ist. Diese Breite wird unterschritten, sobald der Wert 100% einer Breite von weniger als 500 Pixel entspricht.

Neben den Schriftgrößen wurde diese Funktionen für die dynamische Gestaltung von Elementhöhen, -breiten und paddings verwendet. 
Die Funktionen, in Verbindung mit mindestens einer relativen Größe als Parameter, ermöglichen eine flexible Anpassung an die Bildschirmgrößen.
    
**relative Maßeinheiten**  

Beim responsiven Design spielen relative Maßeinheiten eine wichtige Rolle, da auch sie es ermöglichen, Inhalte flexibel an Bildschirmbreiten azupassen.  
Anstatt absoluter Pixelwerte kommen Einheiten wie Prozent %, em oder rem, Viewport height vh oder Viewprt width vw zu Einsatz.
Mit Prozent wird die Breite oder Höhe eines Elements im Verhältnis zum übergeordneten Element definert. Verändert sich die Größe des Elternelements, wird auch die Größe des untergeordneten Elements angepasst.  
Em und rem ermöglichen eine Skalierung von z. B. Schriftarten basierden auf der größe der übergeordneten Elements (em) oder des root-Elements (rem).
Die Viewport-Größen vh und vw passen sich direkt an die Bildschirmgröße an und eignen sich deshalb besonders für Elemente, deren Größe im direkten Verhältnis zur Bildschirmgröße steht. 

Für StudyBuddy wurden relative Maßeinheiten bspw. folgendermaßen angewendet:

```css
.browse-search{
    box-sizing: border-box;
    flex: 1 1 90%;
    margin: 0 1rem;
}
```
Hier wird der Klasse "browse-search" eine Anfangbreite von 90% des Elternelements zuwiesen. 
Weiterhin wurde die Margin - also der Außenabstandes des Elements - links und rechts auf 1rem gesetzt.
Dadurch passt sich dieses Element flexibel an die Größe des Elternelements an. Die Margin passt sich mit Veränderung der font-size, die im root-Element definiert wird, an.

**Media Queries**
Media Queries sind ein Werkzeug, um Designanpassung in Abhängigkeit der
Bildschirmgröße oder Gerätebedingungen zu machen.
Sie ermöglichen es, Gestaltungsregeln, aufgrund von z. B. der Breite, Höhe
oder Ausrichtung des Viewports, zu aktivieren.
Dadurch ermöglicht sich eine Differenzierung des Design je nach Beschaffenheit des Endgeräts.

Für StudyBuddy wurden Media Queries genutzt, um auf die Webseitengestaltung 
bei mittleren und kleinen Geräten einzuwirken.

```css
@media screen and (min-width: 426px) and (max-width: 768px){
    html{
        font-size: 12px;
    }
    .signup{
        width: min(500px, 100%);
    }
}
```

In diesem Code-Auszug wird das Design für die mittelgroßen Endgeräte, gemäß der zuvor definierten Breakpoints, angepasst. 
Über den Selektor wird die Bildschirmgröße abgefragt und wenn diese zwischen 426 Pixeln und 768 Pixeln liegt, wird die folgende Gestaltung angewendet. 
In diesem Fall wird die Schriftgröße des hmtl-Elements von 16 Pixel auf 12 Pixel angepasst. Diese Schriftgröße ist die Basis für die Einheit rem. Daraus folgt, dass alle Eigenschaften mit einem Wert der Einheit rem ebenfalls proportional verkleinert werden.

Weiterhin wird die ursprüngliche Breite der Klasse "signup" überschrieben.

**Herausforderungen bei der Umsetzung**

Eine Schwierigkeit bei der Implementierung des responsiven Designs stellte die Wahl dar, ob man nach dem Mobile-First- oder Desktop-First-Ansatz 
vorgeht. Da zu Beginn der Gestaltung mit CSS zu keine fundierten Kenntnisse
zu den beiden Ansätzen vorlagen, war der Einstieg in dieses Thema schwierig. Da erst im fortgeschrittenen Projektverlauf die Frage nach dem 
geeigneten Prinzip aufkam, wurde sich für den Desktop-First-Ansatz entschieden. Hintergrund war, das bis zu diesem Zeitpunkt eine 
Desktopansicht entworfen wurde. So konnte im Nachhinein - mit einen 
gewissen Programmier- und Testaufwand - der Desktop-First-Ansatz 
implementiert werden. 

Letztendlich konnte die Webseite trotz dieser Herausforderung erfolgreich responsiv gestaltet werden.
    

### Hilfsmittel

#### Literatur

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


#### Artificial Intelligence

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

#### Webseiten und -applikationen

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

#### Weitere Anwendungen

**Microsoft PowerPoint**  
PowerPoint wurde zur Erstellung der Kompositionsdiagramme und zur Skalierung von
Grafiken verwendet.

## Abbildungsverzeichnis
#### Abb. 1: Erster Entwurf der Homepage  
![Erster Entwurf der Homepage](C:\Users\chiar\Labor\WebEngineering\Projekte\WebApp\web_engineering\documentation\img\1_Erster_Entwurf.png)

#### Abb. 2: Sitemap  
![Sitemap](documentation\img\2_Sitemap.png)

#### Abb. 3: Kompositionsdiagramm Homepage  
![Kompositionsdiagramm Homepage](documentation\img\3_KompDia_Homepage.png)

#### Abb. 4: Kompositionsdiagramm Login   
![Kompositionsdiagramm Login](documentation\img\4_KompDia_Login.png)

#### Abb. 5: Kompositionsdiagramm Signup  
![Kompositionsdiagramm Signup](documentation\img\5_KompDia_Signup.png)

#### Abb. 6: Kompositionsdiagramm Impressum   
![Kompositionsdiagramm Impressum](documentation\img\6_KompDia_Impressum.png)

#### Abb. 7: Kompositionsdiagramm Browse  
![Kompositionsdiagramm Browse](documentation\img\7_KompDia_Browse.png)

#### Abb. 8: Kompositionsdiagramm Share   
![Kompositionsdiagramm Share](documentation\img\8_KompDia_Share.png)

## Stichwortverzeichnis

CSS:  
Cascading Style Sheet

HTML:   
Hypertext Markup Language

SVG:   
Scalable Vector Graphics. Dieses Dateiformat stellt vektorbasierte Grafiken dar. Es eignet sich gut für den Einsatz im Webdesign, da es eine Skalierung ohne Qualitätsverlust ermöglicht. Weiterhin kann eine svg-Datei als svg-Element in HTML eingebunden und mit CSS bearbeitet werden.

