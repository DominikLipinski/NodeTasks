var fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err, data) {
    fs.writeFile('newFileAsync.txt', data);
});

/* 
creating and removing directory
fs.mkdir('stuff', function() {
    fs.readFile('readMe.txt', 'utf8', function(err,data) {
        fs.writeFile('./stuff/newFileInNewDirectory.txt', data);
    });
});

fs.unlink('./stuff/newFileAsync.txt', function() {
    fs.rmdir('stuff');
});

just reading
fs.readFile('readMe.txt', 'utf8', function(err, data) {
    console.log(data);
});

Sync version - blocking code
var readMe = fs.readFileSync('readMe.txt', 'utf8');
fs.writeFileSync('newFile.txt', readMe);

deleting file
fs.unlink('newFile.txt');

*/