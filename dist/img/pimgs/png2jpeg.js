const imagemin = require('imagemin');
const pngToJpeg = require('png-to-jpeg');

imagemin(['./*.png'], './jpg/', {
    plugins: [
        pngToJpeg({quality: 90})
    ]
}).then((files) => {
    // console.log(files);
    // Please keep in mind that all files now have the wrong extension
    // You might want to change them manually
    console.log('PNGs converted to JPEGs:', files);
});
