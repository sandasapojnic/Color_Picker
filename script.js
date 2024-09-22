const btn = document.querySelector('#picker');
let colorBackground = document.getElementById('colorBox');
let colorDescription = document.getElementById('inner');



function random(number){
    return Math.floor(Math.random() * (number + 1));
}

function getRandomHexCode() {
    const hexCharacters = '0123456789ABCDEF';
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
        hexCode += hexCharacters[random(15)];
    }
    return hexCode;
}

function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener('click', () => {
    const rndHex = getRandomHexCode();
    const rgbCol = hexToRgb(rndHex);
    //`rgb(${random(255)} ${random(255)} ${random(255)})`;
    colorBackground.style.backgroundColor = rndHex;
    colorDescription.textContent = `${rndHex} | ${rgbCol}`;
});