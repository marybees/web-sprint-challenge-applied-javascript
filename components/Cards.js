// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const { default: Axios } = require("axios");

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then((response) => {
    console.log(response)
    let articlesKeys = Object.keys(response.data.articles);
    articlesKeys.forEach((key) => {
        console.log(key)
        const articles = response.data.articles[key]
        articles.forEach((article) => {
            createCard(article)
        })
    });
})
.catch((error) => {
    console.log("The data was not returned. ", error);
});

function createCard(article) {
console.log(article)
    //Create Element
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');

    //Add Image Source Attribute
    authorImg.src = article.authorPhoto;

    //Add Class to Element
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    //Text Content
    headline.textContent = article.headline
    authorName.textContent = article.authorName

    //Select Header Container Element
    const cardContainer = document.querySelector('.cards-container');

    //Append Elements
    imgContainer.append(authorImg);
    imgContainer.append(authorName);
    author.append(imgContainer);
    card.append(headline);
    card.append(author);
    cardContainer.append(card);

    //Add Event Listener
    card.addEventListener("click", () => {
        console.log(headline);
    });

return card;

}
