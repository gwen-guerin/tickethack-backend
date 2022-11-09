const { json } = require('express');
var express = require('express');
var router = express.Router();
var trip = require('../trips.json');
const moment = require('moment');
const Carts = require('../models/cart');

router.post('/', (req, res) => {
  const wantedDate = new Date(req.body.date);
  const formatedWantedDate = moment(wantedDate).format('DD-MM-YYYY');
  const trips = trip.filter(
    (e) =>
      e.departure === req.body.departure &&
      e.arrival === req.body.arrival &&
      moment(e.date.$date).format('DD-MM-YYYY') === formatedWantedDate
  );

  if (trips) {
    res.json({ result: true, trips: trips });
  } else {
    res.json({ result: false });
  }
});

router.post('/cart', (req, res) => {
  console.log("body",req.body);
  const { trip, date, price } = req.body;

  const newCart = new Carts({
    trip,
    date,
    price,
  });
  newCart.save().then((cartSaved) => {
    if (cartSaved) {
      return res.json({ result: true, cartSaved });
    }
    res.json({ result: false, error: 'Try again' });
  });
});

router.get('/cart', (req, res) => {
    Carts.find().then(carts => {
        console.log(carts);
        res.json({carts})
    })
})

module.exports = router;
