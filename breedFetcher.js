
const request = require('request');
// const searchedBreed = process.argv.slice(2)[0];
const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, desc) => {
    if (response.statusCode === 404) {
      console.log(`Website Not Found`);
    } else {
      const data = JSON.parse(desc);
      if (data.length === 0 ) {
        callback('Breed not Found!');
      } else {
        const description = data[0].description;
        console.log(description);
        callback(error, description)
      }
    }

  });
};

module.exports = {fetchBreedDescription}