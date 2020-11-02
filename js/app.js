document.addEventListener("DOMContentLoaded", function() {
  generateQuote();
  particlesJS.load('particles', 'assets/particles-config.json');

});

const loader = document.getElementById("loader");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

document.querySelector('.lang-switch__button_en').onclick = (() => {
  currentLanguage = 'en';
  document.querySelector('.lang-switch__button_en').classList.add('lang-switch__button_active');
  document.querySelector('.lang-switch__button_ru').classList.remove('lang-switch__button_active');
  generateQuote();
});
document.querySelector('.lang-switch__button_ru').onclick = (() => {
  currentLanguage = 'ru';
  document.querySelector('.lang-switch__button_ru').classList.add('lang-switch__button_active');
  document.querySelector('.lang-switch__button_en').classList.remove('lang-switch__button_active');
  generateQuote();
});

let currentLanguage = 'en';
let currentText = "";
let currentAuthor = "";

function generateQuote() {
  enableLoader();
  fetchQuote(currentLanguage)
    .then(res => {
      renderQuote(res)
    })
    .then(disableLoader);
}

function renderQuote(res) {
  currentText = res.quoteText;
  currentAuthor = res.quoteAuthor;

  document.getElementById('quote').innerText = currentText;
  let author = '';
  if (currentAuthor !== "") {
    document.getElementById('author').innerText = "— " + currentAuthor;
    document.getElementById('author').style.display = 'block';
  }
  else document.getElementById('author').style.display = 'none';
}

function tweet() {
  tweetQuote(currentText, currentAuthor);
}

function enableLoader () {
  loader.hidden = false;
  quote.hidden = true;
  author.style.display = 'none';
}
function disableLoader () {
  loader.hidden = true;
  quote.hidden = false;
  author.style.display = 'inherit';
}
