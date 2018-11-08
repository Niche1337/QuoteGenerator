/*Quotes Generator Project*/
/******************************************/
/******************************************/
/******************************************/

/*Array of objects containing quotes, sources, year of publication and citations */
var quotes = [{quote: '"Don\'t cry because it\'s over, smile because it happened."', source: "Dr.Seuss", tag: "Profound"
              },
              {quote: '“Hardest of all, as one becomes older, is to accept that sapient remarks can be drawn from the most unwelcome or seemingly improbable sources, and that the apparently more trustworthy sources can lead one astray.”',
               source: "Christopher Hitchens",citation:"Hitch 22: A Memoir"
              },
              {quote: 'Nature can be lethal. But it doesn\'t hold a candle to man."', source: "Samuel L.Jackson", citation:"Deep Blue Sea", tag: "Humour"
              },
              {quote: 'I never look back darling, it distracts from the now."', source: "Edna Mode", citation:"The Incredibles"
              },
              {quote: '"It is well to give when asked but it is better to give unasked, through understanding."', source: "Kahil Gibran", year:1923, citation:"The Prophet"
              },
            ];


/* The function gets a random quote object from the quotes array and returns the value */
function getRandomQuote(quotes) {
	var randomNum = Math.floor(Math.random() * Math.floor(quotes.length));
	return quotes[randomNum];
}

/* The printQuote function gets a random quote object from the getRandomQuote function. 
It then creates a html string using what values it has stored within it, which is used to be printed onto the html page. */
function printQuote() {
	var htmlText;
	var randomColour ="#" + Math.floor(100000 + Math.random() * 900000)
	var quoteObj = getRandomQuote(quotes);

	//creates the html string
	htmlText = '<p class="quote">' + quoteObj.quote + '</p>';
	htmlText += '<p class="source">' + quoteObj.source;
	if (quoteObj.citation != null) {
		htmlText += '<span class="citation">' + quoteObj.citation + '</span>'
	}
	if (quoteObj.year != null) {
		htmlText += '<span class="year">' + quoteObj.year + '</span>';
	}
	if (quoteObj.tag != null) {
		htmlText += '<span class="year">' + quoteObj.tag + '</span>';
	}
	htmlText += '</p>'

	//prints the html string to the inner html
	document.getElementById("quote-box").innerHTML = htmlText;
	//when a new quote is generated, a random colour is chosen for the background
	document.getElementById("theBody").style.background = randomColour;

}

/* Runs the printsQuote function when the button is pressed*/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/*After 10 seconds a new quote will be generated using a timer*/
timeoutID = window.setTimeout(printQuote, 10000);

