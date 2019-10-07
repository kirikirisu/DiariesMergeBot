import express from 'express';
import request from 'request';
import merge from './merge';

const app = express();
const PORT = 5000;

const clientId = '785754149701.774269463299';
const clientSecret = process.env.CLIENT_SECRET;

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

app.get('/', (req, res) => {
  res.send('Ngrok is working! Path Hit: ' + req.url);
});

app.get('/oauth', (req, res) => {

  if (!req.query.code) {
    res.status(500);
    res.send({ "Error": "Looks like we're not getting code." });
    console.log("Looks like we're not getting code.");
  } else {
    request({
      url: 'https://slack.com/api/oauth.access', //URL to hit
      qs: { code: req.query.code, client_id: clientId, client_secret: clientSecret }, //Query string data
      method: 'GET', //Specify the method

    }, (error, response, body) => {
      if (error) {
        console.log(error);
      } else {
        res.json(body);

      }
    })
  }
});

app.post('/command', (req, res) => {
  const merged = new Promise((resolve) => {
    const done = merge();
    resolve(done);
  });

  merged.then((done) => {
    res.send(`pulls numbers ${done}`);
  });
});
