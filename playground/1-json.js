const fs = require('fs');
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);

// const parsedData = JSON.parse(bookJSON);
// // console.log(parsedData.author);
// // fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// console.log(dataBuffer.toString());
// const data = JSON.parse(dataBuffer);
// console.log(data.title);

//CHALLENGE - load and parse data and edit - stringify that object and overwrite contents of data then run
// fs.writeFileSync('1-json.json', )

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = "Elaine";
user.age = 33

const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON);
