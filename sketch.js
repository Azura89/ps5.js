let colorImg;
let grayscaleImg;

function preload() {
    colorImg = loadImage('/home/thinkllc/website_tests/p5.js_tests/lioncolor.jpg');
    grayscaleImg = loadImage('/home/thinkllc/website_tests/p5.js_tests/lionbnw.jpg');
}

function setup() {
    createCanvas(colorImg.width, colorImg.height);
    colorImg.loadPixels();
    grayscaleImg.loadPixels();
    for (let y = 0; y < colorImg.height; y++) {
        for (let x = 0; x < colorImg.width; x++) {
            let index = (x + y * colorImg.width) * 4;
            let r = colorImg.pixels[index];
            let g = colorImg.pixels[index + 1];
            let b = colorImg.pixels[index + 2];

            // Apply color to grayscale image
            grayscaleImg.pixels[index] = r;
            grayscaleImg.pixels[index + 1] = g;
            grayscaleImg.pixels[index + 2] = b;
        }
    }
    grayscaleImg.updatePixels();
}

function draw() {
    image(grayscaleImg, 0, 0);
}

