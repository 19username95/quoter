document.addEventListener("DOMContentLoaded", function() {
  generateQuote();
  particlesJS.load('particles', 'assets/particles-config.json');

});

// events
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

// fields
let currentLanguage = 'en';
let currentText = "";
let currentAuthor = "";

// methods
function generateQuote() {
  fetchQuote(currentLanguage)
    .then(res => {
      renderQuote(res)
    });
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
