// Intentionally vulnerable demo code for Snyk Code testing. Do not deploy.
const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const app = express();

// Command injection
app.get('/ping', (req, res) => {
  exec('ping -c 1 ' + req.query.host, (err, out) => res.send(out));
});

// Path traversal
app.get('/file', (req, res) => {
  res.send(fs.readFileSync('./data/' + req.query.name, 'utf8'));
});

// Reflected XSS
app.get('/hello', (req, res) => {
  res.send('<h1>Hello ' + req.query.name + '</h1>');
});

// Hardcoded secret
const DB_PASSWORD = 'SuperSecret123!';
const DB_PASSWORD = 'SuperSecret1234!';

app.listen(3000);
