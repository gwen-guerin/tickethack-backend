const { json } = require('express');
var express = require('express');
var router = express.Router();
var trip = require("../trips.json")
const moment = require("moment")

router.post('/', (req, res) => {

    const wantedDate = new Date(req.body.date)
    const formatedWantedDate = moment(wantedDate).format("DD-MM-YYYY")
    const trips = trip.filter(e => e.departure === req.body.departure && e.arrival === req.body.arrival && moment(e.date.$date).format("DD-MM-YYYY") === formatedWantedDate )

    if(trips){
        res.json({result : true, trips : trips})
    }
    else {
        res.json({result : false})
    }
})

module.exports = router;