# Labor3
## Erstellen eines statischen Internetauftritts
### Erstellen eines OnePage Internetauftritts
Da wir zum aktuellen Zeitpunkt bereits den Programmentwurf final abgegeben habe, der allerdings kein Onepager ist, haben wir für dieses Labor eine neue Website erstellt.

~~~html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Porsche - Die Ikone der Sportwagen</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
        nav { background: #333; padding: 15px; position: fixed; width: 100%; top: 0; z-index: 1000; }
        nav a { color: white; text-decoration: none; margin: 15px; padding: 10px; }
        section { padding: 100px 20px; height: 100vh; }
        #home { background: lightgray; }
        #about { background: lightblue; }
        #models { background: #f4f4f4; }
        #articles { background: lightyellow; }
        #contact { background: lightgreen; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid black; padding: 10px; text-align: left; }
        th { background-color: #ddd; }
    </style>
</head>
<body>
    <nav>
        <a href="#home">Home</a>
        <a href="#about">Über Porsche</a>
        <a href="#models">Modelle</a>
        <a href="#articles">Artikel</a>
        <a href="#contact">Kontakt</a>
    </nav>

    <section id="home">
        <h1>Willkommen bei Porsche</h1>
        <p>Erlebe die Faszination der Porsche-Sportwagen.</p>
        <p>Mehr Informationen auf der offiziellen <a href="https://www.porsche.com/germany/" target="_blank">Porsche-Webseite</a>.</p>
    </section>

    <section id="about">
        <h2>Über Porsche</h2>
        <p>Porsche ist ein deutscher Automobilhersteller, der für seine Hochleistungs-Sportwagen bekannt ist.</p>
        <p>Das Unternehmen wurde 1931 von Ferdinand Porsche gegründet und hat seinen Hauptsitz in Stuttgart.</p>
        <p>Legendäre Modelle wie der Porsche 911 prägen die Geschichte des Unternehmens.</p>
        <p>Hier ist ein Link zur <a href="https://de.wikipedia.org/wiki/Porsche" target="_blank">Wikipedia-Seite über Porsche</a>.</p>
    </section>

    <section id="models">
        <h2>Porsche Modelle</h2>
        <p>Hier sind einige der bekanntesten Porsche-Modelle:</p>
        <ul>
            <li><strong>Porsche 911</strong> – Die Ikone der Sportwagen.</li>
            <li><strong>Porsche Cayenne</strong> – Ein Hochleistungs-SUV.</li>
            <li><strong>Porsche Taycan</strong> – Der vollelektrische Supersportwagen.</li>
        </ul>
        <p>Hier sind einige Bilder der Porsche-Modelle:</p>
        <img src="./img911.jpg" alt="Porsche 911" width="400">
        <img src="./imgCayenne.jpg" alt="Porsche Cayenne" width="400">
        <img src="./imgTaycan.jpg" alt="Porsche Taycan" width="400">
    </section>

    <section id="articles">
        <h2>Artikel</h2>
        <article>
            <h3>Die Geschichte des Porsche 911</h3>
            <p>Der Porsche 911 wurde erstmals 1964 vorgestellt und gilt als einer der ikonischsten Sportwagen aller Zeiten.</p>
            <a href="https://www.porsche.com/germany/aboutporsche/christophorusmagazine/" target="_blank">Mehr erfahren</a>
        </article>
        <article>
            <h3>Elektromobilität bei Porsche</h3>
            <p>Mit dem Taycan zeigt Porsche, dass Elektromobilität und Sportwagen-Performance perfekt zusammenpassen.</p>
            <a href="https://newsroom.porsche.com/de.html" target="_blank">Mehr erfahren</a>
        </article>
    </section>

    <section id="contact">
        <h2>Kontakt</h2>
        <p>Hier sind die Kontaktmöglichkeiten zu Porsche:</p>
        <table>
            <tr>
                <th>Medium</th>
                <th>Kontakt</th>
            </tr>
            <tr>
                <td>Offizielle Webseite</td>
                <td><a href="https://www.porsche.com/germany/" target="_blank">porsche.com</a></td>
            </tr>
            <tr>
                <td>Instagram</td>
                <td><a href="https://www.instagram.com/porsche/" target="_blank">@porsche</a></td>
            </tr>
            <tr>
                <td>YouTube</td>
                <td><a href="https://www.youtube.com/user/Porsche" target="_blank">Porsche auf YouTube</a></td>
            </tr>
        </table>
    </section>
</body>
</html>
~~~

### Multipage
Den Inhalt der Multipage und die Struktur finden Sie im Ordner `Labor3/Multipage`