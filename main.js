const container = document.querySelector('.container');
const unsplash = "https://unsplash.com/s/photos/random/";
const rows = 4;  

for(let i = 0; i < rows * 4; i++) {
    const img = document.createElement('img');
    img.src = `${unsplash}${randomNumber()}x${randomNumber()}`;
    container.appendChild(img);
};

function randomNumber() {
    return Math.floor(Math.random() * 100) + 300;
};