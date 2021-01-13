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
    citation: "The Mind of James Cameron"
  },
  {
    quote: "Insanity: doing the same thing over and over again and expecting different results.",
    author:  "Albert Einstein" 
  },
  {
    quote: "The greatest wealth is to live content with little." ,
    author:  "Plato" 
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
    <p class="quote"> ${randomQuoteObject.quote} </p>
    <p class="source"> ${randomQuoteObject.author}
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
  randomQuote += `</p>`

  return document.getElementById('quote-box').innerHTML = randomQuote; 
};
printQuote();

// /***
//  * click event listener for the print quote button
//  * DO NOT CHANGE THE CODE BELOW!!
// ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);