const options = {
  method: 'GET',
  headers: {
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
  }
};
  
function search(query){
      fetch(`https://google-translate1.p.rapidapi.com/language/translate/v2/languages'${query}`,  options)
      .then (response => response.json())
      .then (data => renderSearch(data))
      .catch(error => console.log(error))
  };

const buttonTranslate = document.querySelector('.buttonTranslate');


buttonTranslate.addEventListener('search', event => {
    event.preventDefault()
    const form = event.target

    console.log(form.search)
    search(form.search.value)
}
)
