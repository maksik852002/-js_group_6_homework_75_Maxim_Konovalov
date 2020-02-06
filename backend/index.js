const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const cors = require('cors');

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors())

app.post('/decode', (req, res) => {
  res.send({decoded: Vigenere.Decipher(req.body.password).crypt(req.body.message)});
});

app.post('/encode', (req, res) => {
  res.send({encoded: Vigenere.Cipher(req.body.password).crypt(req.body.message)});
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
