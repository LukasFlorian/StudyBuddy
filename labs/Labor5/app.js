const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});

app.post('/register', (req, res) => {
    let users = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json')));
    const newUser = req.body;

    if (users.some(user => user.username === newUser.username)) {
        return res.status(400).json({ message: 'Benutzername ist bereits vergeben.', success: false });
    }

    users.push(newUser);
    fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(users, null, 2));
    res.status(201).json({ message: `Registrierung abgeschlossen, willkommen ${newUser.firstName} ${newUser.lastName}!`, success: true });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json')));

    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Falscher Benutzername oder Passwort!', success: false });
    }

    res.status(200).json({ message: `Willkommen zurück, ${user.firstName} ${user.lastName}!`, success: true, user });
});