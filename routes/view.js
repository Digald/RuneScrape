var headline_controller = require("../controllers/headline.js");

module.exports = function(app) {
  app.get("/", headline_controller.display_scrape);
  app.get("/saved");
};
