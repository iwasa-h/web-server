const express = require("express");
const path = require("path")
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
 
// app.get('/', function (req, res) {
// //   console.log(req);
//   res.send('<h2>Top Page</h2>');
// });
app.post('/api/v1/quiz', function (req, res) {
    const answer = req.body.answer;
    if(answer === "2") {
        // res.send("<h2>Good!!!!</h2>");
        res.redirect("/correct.html");
    } else {
        // res.send('Bad  "(-""-)"');
        res.redirect("/wrong.html");
    }
    res.send(answer);
  });

app.get('/api/vi/users', function (req, res) {
    res.send({
        name: "Mike",
        age: 30,
    });
  });

 
app.listen(3000, function() {
    console.log("I am running!");
});