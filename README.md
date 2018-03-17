# RuneScrape
A MongoDB web-scraper app to bring you the latest Old School Runescape news all in one place!

## Getting Started
1. When cloning the repo be sure to do an npm install to get all the depencies.
2. Start the server by running node server.js or npm start.
3. Be sure to have your mongo client running on local host.

## How it Works
### Adding Articles to Display
If there are no articles on the home page, you can click the "Scrape New News!" button, and the page will be populated with articles scraped from the official Oldschool Runescape webpage. 
![Home Page](https://i.gyazo.com/63ec9f8927d69aebd7b2181a1dba4a33.png)

### Saving Articles
Clicking on a "save" button will updated the database and add it to your saved articles. Saved articles are removed from the home page until a new scrape is done. 
![Saved Page](https://i.gyazo.com/68b5481b7a77c56b9efa78b1478b2157.png)

### Your Saved Article Features
When navaging to your saved articles, each one will get two more button options. If you click "unsave", the article will completely be removed from the database because making a new scrape will retrieve more updated news.

Comments will display a modal for that specific article in which comments can be continuously added by anyone viewing that page as long as the article remians saved.
![Saved Features](https://i.gyazo.com/6760f3bda179f952ab0629b174f62920.png)

## Tech Used
* Node.js
* Express
* jQuery
* Handlebars.js
* Mongoose

## Todo and bugs

