// Once the data.json files has been downloaded from the browser, execute this script.
// Ex. $ node generate-images.js

const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data.json').toString());

data.forEach((dataURL, index) => {
  var base64Data = dataURL.replace(/^data:image\/png;base64,/, "");
  console.log(base64Data);
  fs.writeFile(`images/${index}.png`, base64Data, 'base64', function(err) {
    if (err) {
      console.error('An error ocurred!');
    }
  });
});