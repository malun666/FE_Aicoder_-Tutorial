const fs = require('fs');
const path = require('path');

let srcFile = path.join(__dirname, 'a.mp4');
let distFile = path.join(__dirname, 'b.mp4');

let rs = fs.createReadStream(srcFile);
let ws = fs.createWriteStream(distFile);

rs.pipe(ws);