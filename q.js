const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
// const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

let apiQuotes = []

// Loading Spinner Shown
function loading() {
  loader.hidden = false
  quoteContainer.hidden = true
}

// Remove Loading Spinner
function complete() {
  quoteContainer.hidden = false
  loader.hidden = true
}

// Show New Quote
function newQuote() {
  loading()
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  // Check if Author field is blank and replace it with 'Unknown'
  if (!quote.author) {
    authorText.textContent = 'Unknown'
  } else {
    authorText.textContent = quote.author
  }
  // Check Quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote')
  } else {
    quoteText.classList.remove('long-quote')
  }
  // Set Quote, Hide Loader
  quoteText.textContent = quote.text
  complete()
}

// Get Quotes From API
async function getQuotes() {
  loading()
  const apiUrl = 'https://type.fit/api/quotes'
  try {
    const response = await fetch(apiUrl)
    apiQuotes = await response.json()
    newQuote()
  } catch (error) {
    // Catch Error Here
  }
}

// Tweet Quote
// function tweetQuote() {
//   const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`
//   window.open(twitterUrl, '_blank')
// }

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote)
// twitterBtn.addEventListener('click', tweetQuote)

// On Load

function shareQuote() {
  const quote = quoteText.innerText // replace with the actual quote
  const author = authorText.innerText
  //   const hashtags = 'quotes,motivation' // optional, separate by commas if more than one
  //   const twitterHandle = 'twitterHandle' // replace with the actual Twitter handle, optional
  //   const whatsappHandle = 'whatsappHandle'
  //   // encodeURIComponent is used to encode special characters in the URL
  //   const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
  //     quote
  //   )}&hashtags=${encodeURIComponent(hashtags)}&via=${encodeURIComponent(
  //     twitterHandle
  //   )}`
  //   // const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(quote)}&via=${encodeURIComponent(whatsappHandle))}`
  //   const instagramUrl = `https://www.instagram.com/`

  //   window.open(whatsappUrl, '_blank')
  //   window.open(twitterUrl, '_blank')
  //   window.open(instagramUrl, '_blank')
  //   const static = 'Quote of the day !!!'
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}-${author}`
  window.open(twitterUrl, '_blank')
}

getQuotes()
