const images = [
    "Background_01.jpg",
    "Background_02.jpg",
    "Background_03.jpg",
    "Background_04.jpg"
];

const backGroundImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");

image.id = "pageBackground";
image.src = `img/${backGroundImage}`;

document.body.appendChild(image);