// Run this file using $ node script.js 
// Run this file onece the data.json file is saved in the root directory
// before inserting javascript code in browsers console.

const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data.json').toString());

data.forEach((dataURL, index) => {
  var base64Data = dataURL.replace(/^data:image\/png;base64,/, "");
  require("fs").writeFile(`images/${index}.png`, base64Data, 'base64', function(err) {
    if (err) {
      console.error('An error ocurred!');
    }
  });
});