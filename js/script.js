/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/*Array of objects containing quotes, authors, year of publication and citations */
var quotes = [{quote: '"Don\'t cry because it\'s over, smile because it happened."', author: "Dr.Seuss"
              },
              {quote: '“Hardest of all, as one becomes older, is to accept that sapient remarks can be drawn from the most unwelcome or seemingly improbable sources, and that the apparently more trustworthy sources can lead one astray.”',
               author: "Christopher Hitchens",citation:"Hitch 22: A Memoir"
              },
              {quote: 'Nature can be lethal. But it doesn\'t hold a candle to man."', author: "Samuel L.Jackson", citation:"Deep Blue Sea"
              },
              {quote: 'I never look back darling, it distracts from the now."', author: "Edna Mode", citation:"The Incredibles"
              },
              {quote: '"It is well to give when asked but it is better to give unasked, through understanding."', author: "Kahil Gibran", year:1923, citation:"The Prophet"
              },
            ];


/* The function gets a random quote object from the quotes array and returns the value */
function getRandomQuote(quotes) {
	var randomNum = Math.floor(Math.random() * Math.floor(quotes.length));
	return quotes[randomNum];
}

console.log(getRandomQuote(quotes));

/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
	var htmlText;
	var quoteObj = getRandomQuote(quotes);
	htmlText = '<p class="quote"> quoteObj.quote </p>';
	htmlText += '<p class="source"> quoteObj.author';
	if (quoteObj.citation !== null) {
		htmlText += '<span class="citation"> quoteObj.citation </span>'
	}
	if (quoteObj.year !== null) {
		htmlText += '<span class="year"> quoteObj.year </span>'
	}
	htmlText += '</p>'

}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.