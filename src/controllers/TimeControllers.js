//date_time
// Express
const express = require('express');
// Enrutador
const router = express.Router();

//============================================================//
//                Enrutar Pag(Ver/usuario)                    //
//============================================================//
let date_ob = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();


// Let date year-month-date
const ayer_moth_date = (year + "-" + month + "-" + date);

// Let date hours-minutes-seconds
const hors_mins_secs = (hours + ":" + minutes + ":" + seconds)

// Let date year-month-date
const date_time = (year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);

// prints date in YYYY-MM-DD format
console.log('date connect ' +date_time);

// Exportacion Global
module.exports = {
ayer_moth_date: ayer_moth_date,
hors_mins_secs: hors_mins_secs,
date_time:date_time
}






