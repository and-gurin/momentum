const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const quotesIcon = document.querySelector('.qoutes-icon')

function getRandomNum() {
   let randomNum = Math.floor(Math.random()*99 + 1);
  return randomNum === 0 ? randomNum : randomNum
}

async function getQuote () {
    const url = 'https://type.fit/api/quotes';
    const res = await fetch(url);
    const data = await res.json();
    const randomQoute = getRandomNum();
    quote.textContent = data[randomQoute].text;
    author.textContent = data[randomQoute].author;
}

quotesIcon.addEventListener('click', getQuote)

getQuote();