const request = require('request');
const searchedBreed = process.argv.slice(2)[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${searchedBreed}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (response.statusCode === 404) {
    console.log(`Website Not Found`);
  }
  if (data.length === 0) {
    console.log('Breed not Found!');
  } else {
    const description = data[0].description;
    console.log(description);
  }

});