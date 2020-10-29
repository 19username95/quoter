document.addEventListener("DOMContentLoaded", function() {
  generateQuote();

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
});

let currentLanguage = 'en';

function generateQuote() {
  fetchQuote(currentLanguage)
    .then(res => {
      renderQuote(res)
    });
}

function renderQuote(res) {
  document.getElementById('quote').innerText = res.quoteText;
  document.getElementById('author').innerText = res.quoteAuthor;
}

