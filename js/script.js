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
var output;
var quotes = [
  quote1 = {
    quote: "Even if we don't have the power to choose where we come from, we can still choose where we go from there.",
    source: "Stephen Chbosky",
    citation: "The Perks of Being a Wallflower ",
  },
  quote2 = {
    quote: "The Best Way To Get Started Is To Quit Talking And Begin Doing.",
    source: "Walt Disney"
  },
  quote3 = {
    quote: "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty",
    source: "Winston Churchill"
  },
  quote4 = {
    quote: "There is no greater agony than bearing an untold story inside you.", 
    source: "Maya Angelou", citation: "I Know Why the Caged Bird Sings", 
    year: 1970
  },
  quote5 = {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    source: "Eleanor Roosevelt"
  },
  quote6 = {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon"
  },
  quote7 = {
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    source: "Mother Teresa",
    year: 1993
  }
];


/***
 * `getRandomQuote` function: Generates a random number between 0-number of elements in quotes array
 * and return the element on that position.
***/
function getRandomQuote() {
  const randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}



/***
 * `printQuote` function: calls getRandomQuote() function to get a quote object and 
 * then generates an HTML string based on the properties of quote object.   
***/
function printQuote() {
  // get random quote
  const randomQuote = getRandomQuote();

  // construct output string with quote and source
  output = '<p class = "quote">' + randomQuote.quote + '</p>';
  output += '<p class = "source">' + randomQuote.source;

  // checking if quote has both citation and year properties
  if(randomQuote.citation && randomQuote.year) {
    output += '<span class = "citation">' + randomQuote.citation + '</span>' + '<span class = "year">' + randomQuote.year + '</span>' + '</p>';
  }

  // checking if quote has only citation property
  else if(randomQuote.citation) {
    output += '<span class = "citation">' + randomQuote.citation + '</span>' + '</p>';
  }

  // checking if quote has only year property
  else if(randomQuote.year) {
    output += '<span class = "year">' + randomQuote.year + '</span>' + '</p>';
  }
  
  // quote has neither citation nor year property
  else {
    output += '</p>';
  }

  // get div of qutation box and set its innerHTML to our output string.
  var htmlDivQuoteBox = document.getElementById('quote-box');
  htmlDivQuoteBox.innerHTML = output;
  console.log(randomQuote);
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);