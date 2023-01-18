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
  },
    data: encodedParams
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
