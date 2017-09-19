// grog
const fs = require('fs');

// Import text
function getData() {
  return new Promise((resolve, reject) => {
    fs.readFile('data.txt', 'utf8', (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(data);
    });
  });
}

// Write the data to the html
function writeHTML(header, items) {
  
}

// Turn text into Objects
function parseText(string) {
  const stringArr = string.split('\n');
  const header = [];
  const items = [];
  for (let i = 0; i < 5; i++) {
    if (stringArr[i].includes('bannerImage:')) {
      header.push(stringArr[i]);
    }
    if (stringArr[i].includes('name:')) {
      header.push(stringArr[i]);
    }
    if (stringArr[i].includes('description:')) {
      header.push(stringArr[i]);
    }
  }
  for (let i = 5; i < stringArr.length; i++) {
    if (stringArr[i].includes('img:')) {
      items.push(stringArr[i]);
    }
    if (stringArr[i].includes('title:')) {
      items.push(stringArr[i]);
    }
    if (stringArr[i].includes('description:')) {
      items.push(stringArr[i]);
    }
    if (stringArr[i].includes('price:')) {
      items.push(stringArr[i]);
    }
    if (stringArr[i].includes('category:')) {
      items.push(stringArr[i]);
    }
  }
  writeHTML(header, items);
}

getData().then((data) => {
  parseText(data);
});
