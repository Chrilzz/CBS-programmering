//DEl A
const express = require("express");
const app = express();

const port = 8080
app.listen(port, () => {
    console.log("server listening on port" +  port);
}); 

//DEL B
var besætning = [
    {
        køer: "50",
        hunde: "1",
        grise: "100",
        får: "20"
    }
]

//DEL C
app.get("/returner_hele_besaetningen", (req, res) => {
    res.status(200).json(besætning)
});

//DEL D
app.get("/returner_hele_besaetningen", function (req, res)

router.get('/', function (req, res) {
    res.status(200).json(data);
   });
   router.get('/:id', function (req, res) {
    let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
    });
    if (found) {
    res.status(200).json(found);
    } else {
    res.sendStatus(404);