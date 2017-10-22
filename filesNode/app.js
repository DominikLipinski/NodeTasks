var fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err, data) {
    fs.writeFile('newFileAsync.txt', data);
});

console.log('Speed test!');

/* just reading
fs.readFile('readMe.txt', 'utf8', function(err, data) {
    console.log(data);
});

Sync version - blocking code
var readMe = fs.readFileSync('readMe.txt', 'utf8');
fs.writeFileSync('newFile.txt', readMe);
*/