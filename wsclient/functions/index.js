/**
 * Copyright 2018
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/**
 * Example for consume a webservice
 */

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const express = require('express');
const cookieParser = require('cookie-parser')();
const cors = require('cors')({ origin: true });
const app = express();
const soap = require('soap');


// method hello 

app.get('/hello/:name', (req, res) => {
  res.send('Hello World' + name);
});

/**
 * this method within a webservice client,
 * return exchange_value today
 */
app.get('/exchangeToday', (req, res) => {
  // set type result to JSON
  res.setHeader('Content-Type', 'application/json');
  //var resp = [];
  //The WSDL Url
  var url = 'http://banguat.gob.gt/variables/ws/TipoCambio.asmx?WSDL';
  //this case, the method not need to send parameters
  //var args = { name: "N.Hillary" };
  var args = {};

  //create webservice client
  try {
    soap.createClient(url, function (err, client) {
      // call a method exchange Today
      client.TipoCambioDia(args, function (err, result) {

        if (result) {
          // extract the values from JSON of response      
          var exchange_value = result.TipoCambioDiaResult.CambioDolar.VarDolar[0].referencia
          var exchange_date = result.TipoCambioDiaResult.CambioDolar.VarDolar[0].fecha
          console.log(exchange_date, exchange_value);
          //return values
          res.send('{ "date": "' + exchange_date + '", "value": ' + exchange_value + ' }');
        }        

      });
    });
  } catch (e) {
    //return error;
    console.log(e.stack);
    res.send('{ "error": "Error consume webservice" }');
  }
});

//  start a express application
exports.app = functions.https.onRequest(app);
