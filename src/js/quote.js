const quote = document.querySelector('.quote');
const author = document.querySelector('.author')
console.log(quote, author)

function getRandomNum(max) {
   let randomNum = Math.floor(Math.random() * max);
  return randomNum === 0 ? randomNum : randomNum
}

async function getQuote () {
    const url = 'https://type.fit/api/quotes';
    const res = await fetch(url);
    const data = await res.json();
    const randomQoute = getRandomNum(100);
    quote.textContent = data[randomQoute].text;
    author.textContent = data[randomQoute].author;
}

getQuote();