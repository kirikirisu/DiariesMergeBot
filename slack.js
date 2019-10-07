import express from 'express';
// import request from 'request';
// import merge from './merge';

const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

app.get('/', (req, res) => {
  res.send('Ngrok is working! Path Hit: ' + req.url);
});

app.post('/command', (req, res) => {
  res.send('this is the message.');
});
