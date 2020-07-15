  const express = require("express");
  const bodyParser = require("body-parser");
  const app = express();
  var items = ["Buy Food","Make Food","Eat Food"];

  app.set('view engine', 'ejs');
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(express.static("public"));

  app.get("/", function(req, res) {

    var today = new Date();
    var options = {
      weekday: "long",
      day: "numeric",
      month: "long",

    };
    var day = today.toLocaleDateString("en-US", options);
    res.render("list", {
      toDay: day,
      newListItems: items
    });

  });
  app.post("/", function(req, res) {
    var item = req.body.newitem;
    items.push(item);
    res.redirect("/");
  })










  app.listen(process.env.PORT || 3000, function() {
    console.log("Server starting in port 3000");
  })
