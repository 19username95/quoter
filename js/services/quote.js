function fetchQuote(language) {
  if (language===undefined) language = DEFAULT_LANGUAGE;
  if (!VALID_LANGUAGES.includes(language)) {
    throw new Error(`Invalid language: ${language}`)
  }
  return $.ajax( `${API_URL}?method=getQuote&lang=${language}&format=json`).then(res => {
    return res;
  });
}
