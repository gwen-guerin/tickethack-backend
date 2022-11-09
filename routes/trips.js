const { json } = require("express");
var express = require("express");
var router = express.Router();
var trip = require("../trips.json");
const moment = require("moment");
const Carts = require("../models/cart");
const Bookings = require("../models/booking");

router.post("/", (req, res) => {
  const wantedDate = new Date(req.body.date);
  const formatedWantedDate = moment(wantedDate).format("DD-MM-YYYY");
  const trips = trip.filter(
    (e) =>
      e.departure === req.body.departure &&
      e.arrival === req.body.arrival &&
      moment(e.date.$date).format("DD-MM-YYYY") === formatedWantedDate
  );

  if (trips) {
    res.json({ result: true, trips: trips });
  } else {
    res.json({ result: false });
  }
});

<<<<<<< HEAD
router.post('/cart', (req, res) => {
  console.log("body",req.body);
=======
router.post("/cart", (req, res) => {
>>>>>>> 54f50390a193cc1011c724cc60ee50b0566e7363
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
    res.json({ result: false, error: "Try again" });
  });
});

router.get("/cart", (req, res) => {
  Carts.find().then((carts) => {
    res.json({ carts });
  });
});

router.post("/booking", (req, res) => {
  const { trip, date, price } = req.body;

  const newBooking = new Bookings({
    trip,
    price,
    date,
  });
  newBooking.save().then((bookingSaved) => {
    if (bookingSaved) {
      return res.json({ result: true, bookingSaved });
    }
    res.json({ result: false, error: "Try again" });
  });
});

router.get("/booking", (req, res) => {
  Bookings.find().then((data) => {
    res.json({ data });
  });
});

router.delete("/delete", (req, res) => {
  Carts.deleteOne({trip: req.body.trip, price: req.body.price, date : req.body.date}).then((data) => res.json({ data }));
});

router.delete("/deleteAll", (req, res) =>{
  Carts.deleteMany({}).then((data) => res.json({data}))
  
})

module.exports = router;
