const functions = require('firebase-functions');
const axios = require('axios');

const express = require('express');
const cors = require('cors');
const app = express();
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

const PexelsAPI = require('pexels-api-wrapper');
const pexelsClient = new PexelsAPI(functions.config().pexels.authorization);



app.get('/search/image', (req, res) => {
  console.log('Received Request')
  const query = req.query.q
  console.log(req.query);

  pexelsClient.search(query, 50, 1)
    .then(function(result){
        console.log(result);
        res.send(result);
    }).
    catch(function(e){
        console.err(e);
        res.status(e.status).send(e);
    });


  // axios({
  //   method: 'get',
  //   url: 'https://api.pexels.com/v1/search',
  //   data: {
  //     query,
  //     per_page: 50,
  //     page: 1,
  //   },
  //   headers: {
  //     Authorization: functions.config().pexels.authorization,
  //   },
  //   crossDomain: true,
  // })
  // .then(data => {
  //   console.log('received response');
  //   console.log(data);
  //   res.send(data);
  // })
});

exports.app = functions.https.onRequest(app);