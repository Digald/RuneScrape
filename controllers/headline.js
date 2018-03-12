var db = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");

exports.display_scrape = function(req, res) {
  db.Headline.find({}).then(function(result) {
    // console.log(result);
    res.render("home", {
      css: "home.css",
      js: "home.js",
      article: result
    });
  });
};

exports.scrape_page = function(req, res) {
  db.Headline.remove({ saved: false }).then(function(result) {
    axios
      .get("http://services.runescape.com/m=news/archive?oldschool=1")
      .then(function(response) {
        // wrap data to use
        var $ = cheerio.load(response.data);
        // grab elements from html using wrapper
        $("#newsSection .news-article__details").each(function(i, element) {
          var result = {};
          // grap the next and link and saved it to the object
          result.title = $(this)
            .children(".news-article__title")
            .find(".secondary-link")
            .text();
          result.summary = $(this)
            .find(".news-article__summary")
            .text();
          result.link = $(this)
            .children(".news-article__title")
            .find(".secondary-link")
            .attr("href");
          // Add to database
          db.Headline.create(result).then(function(dbHeadline) {
            // console.log(dbHeadline);
          });
        });
        res.redirect("/");
      });
  });
};

exports.save_article = function(req, res) {
  console.log(req.body);
  db.Headline.findOneAndUpdate(
    { _id: req.body.id },
    { $set: { saved: true } }
  ).then(result => {
    res.json(result);
  });
};
