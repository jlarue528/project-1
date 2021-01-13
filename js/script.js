/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron",
    citation: "The Mind of James Cameron"
  },
  {
    quote: "Insanity: doing the same thing over and over again and expecting different results.",
    author:  "Albert Einstein" // CHECK
  },
  {
    quote: "The greatest wealth is to live content with little." ,
    author:  "Plato" // CHECK
  },
  {
    quote: "The future belongs to those who prepare for it today.",
    author:  "Malcolm X",
    year: 1962 // CHECK
  },
  {
    quote: "The successful warrior is the average man, with laser-like focus.",
    author:  "Bruce Lee",
    citation: "Motivational Phrases" // CHECK
  },
  {
    quote: "Well done is better than well said.",
    author:  "Benjamin Franklin" // CHECK
  }
]


/**
 * Using a for loop to name each object's key value pairs within the array 
 */
// for(let i = 0; i < quoteArray.length; i++) {
//   let famousQuote = quoteArray[i].quote;
//   let famousAuthor = quoteArray[i].author;
//   let year = quoteArray[i].year;
//   let citation = quoteArray[i].citation;
//   const quoteObject = {};

//     if (Object.keys(quoteArray[i]).includes('year')) {
//       quoteObject = {
//         quote: famousQuote,
//         author: famousAuthor,
//         year: year
//       }
//     } else if(Object.keys(quoteArray[i]).includes('citation')) {
//       quoteObject = {
//         quote: famousQuote,
//         author: famousAuthor,
//         citation: citation
//       }
//     } else {
//       quoteObject = {
//         quote: famousQuote,
//         author: famousAuthor
//       }
//     }
// };


// /***
//  * `getRandomQuote` function
// ***/
//should randomly select quote from the quotes array and return it
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const randomQuote = {
    quote: quotes[randomNumber]
  }
  return randomQuote.quote;
    // return quoteObject[randomNumber];
  }



// // /***
// //  * `printQuote` function
// // ***/
//call the getRandomQuote function and then print the quote to the page using the template provided in the project instructions

function printQuote() {
  const randomQuoteObject = getRandomQuote();
  let randomQuote = `
    <p class="quote"> ${randomQuoteObject.quote} </p>
    <p class="source"> ${randomQuoteObject.author}
  `;
  console.log(randomQuoteObject);

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