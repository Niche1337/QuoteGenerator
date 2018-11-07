



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

function printQuote() {
	var htmlText;
	var quoteObj = getRandomQuote(quotes);
	htmlText = '<p class="quote">' + quoteObj.quote + '</p>';
	htmlText += '<p class="source">' + quoteObj.author;
	if (quoteObj.citation != null) {
		htmlText += '<span class="citation">' + quoteObj.citation + '</span>'
	}
	if (quoteObj.year != null) {
		htmlText += '<span class="year">' + quoteObj.year + '</span>';
	}
	htmlText += '</p>'
	document.getElementById("quote-box").innerHTML = htmlText;
}
printQuote();

document.getElementById('loadQuote').addEventListener("click", printQuote, false);