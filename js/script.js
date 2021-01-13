/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * Quotes @type {array}
 * This variable holds an array that includes a list of objects that list each quote used in the random quote generator
 * Each object has 2 standard properties:
 * * @type {string} quote
 * * @type {string} author
 * Some objects have additional properties:
 * * @type {string} citation
 * * @type {number} year
***/

const quotes = [
  {
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron",
    citation: "The Mind of James Cameron",
    purpose: 'Motivation'
  },
  {
    quote: "Insanity: doing the same thing over and over again and expecting different results.",
    author:  "Albert Einstein" 
  },
  {
    quote: "The greatest wealth is to live content with little." ,
    author:  "Plato",
    tag: 'Minimalist' 
  },
  {
    quote: "The future belongs to those who prepare for it today.",
    author:  "Malcolm X",
    year: 1962 
  },
  {
    quote: "The successful warrior is the average man, with laser-like focus.",
    author:  "Bruce Lee",
    citation: "Motivational Phrases" 
  },
  {
    quote: "Well done is better than well said.",
    author:  "Benjamin Franklin"
  }
]


/**
 * getRandomQuote function randomly selects a quote from the quotes array and returns it
 	* @returns {object} a random quote object
 */

function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const randomQuote = {
    quote: quotes[randomNumber]
  }
  return randomQuote.quote;
}

/***
  * printQuote function prints a random quote to the page
  * @returns {string} full HTML string displaying a random quote to the page
***/

function printQuote() {
  const randomQuoteObject = getRandomQuote();
  /** 
    * * randomQuote variable holds the value of the HTML that will be displayed on the page
    * * @type {string}
  */
  let randomQuote = `
    <p class= "quote"> ${randomQuoteObject.quote} </p>
    <p class= "source"> ${randomQuoteObject.author}
  `;
  /*
    * if statements list additions to HTML string if the quote objects include citation or year
  */
  if(Object.keys(randomQuoteObject).includes('citation')) {
    randomQuote += `
      <span class="citation"> ${randomQuoteObject.citation} </span>
    `
  } if (Object.keys(randomQuoteObject).includes('year')) {
    randomQuote += `
      <span class="year"> ${randomQuoteObject.year} </span>
    ` 
  }

  if(Object.keys(randomQuoteObject).includes('purpose')) {
    randomQuote += `
      <span class="citation"> ${randomQuoteObject.purpose} </span>
    `
  } if (Object.keys(randomQuoteObject).includes('tag')) {
    randomQuote += `
      <span class="year"> ${randomQuoteObject.tag} </span>
    ` 
  }
  randomQuote += `</p>`

  document.getElementById('quote-box').innerHTML = randomQuote;
  
  /**
    * when the randomBackgroundColor function is called a randomized background color is generated to accompany the random quote
   */
  randomBackgroundColor();
};
printQuote();

/**
 * getRandomBackgroundColor function randomly selects a color for a page's background
 	* @returns {string} which contains the HTML required to return the new background color and post it to the page
 */
function randomBackgroundColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let backgroundColor = "rgb(" + x + "," + y + "," + z + ")";

  return document.body.style.background = backgroundColor;
}

/**
 * setInterval method will refresh the page every 10 seconds with a new quote
 */
setInterval( () => {printQuote()}, 10000);

// /***
//  * click event listener for the print quote button
//  * DO NOT CHANGE THE CODE BELOW!!
// ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);