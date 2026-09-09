const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/rfid', (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ error: 'Nessun codice RFID ricevuto' });
    }

    console.log('RFID ricevuto:', code);

    res.json({ status: 'ok', received: code });
});

app.get('/', (req, res) => {
    res.send('Microservizio RFID attivo');
});

app.listen(port, () => {
    console.log(`RFID service in ascolto sulla porta ${port}`);
});
