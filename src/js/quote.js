import { quotes, lang } from './translation.js';

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const quotesIcon = document.querySelector('.qoutes-icon');

export async function getQuote (lang) {
    const res = await fetch(quotes[lang]);
    const data = await res.json();
    function getRandomNum() {
   let randomNum = Math.floor(Math.random()*15 + 1);
  return randomNum === 0 ? randomNum : randomNum
}
    const randomQoute = getRandomNum();
    quote.textContent = data[randomQoute].text;
    author.textContent = data[randomQoute].author;
}

quotesIcon.addEventListener('click', ()=>getQuote(lang))