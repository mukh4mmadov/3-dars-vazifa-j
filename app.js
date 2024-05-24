const body = document.querySelector('body')
const container = document.querySelector('.container')
const colorText = document.querySelector('.color-text')
const valeus = [
    '0','1','2','3','4','5','6','7','8','9',
    'a','b','c','d','e','f',
]
//dandom color function
function getGradient() {
    let color = '#'
    for(let i = 0; i < 6 ; i++){
        const randomNumber = Math.trunc(Math.random()* valeus.length)
        color += valeus[randomNumber]
    }
    return color
}
const color1 = getGradient();
const color2 = getGradient();


//set color to body
function setGradient() {
    const color1 = getGradient();
    const color2 = getGradient();
    const randomDeg = Math.trunc(Math.random() * 360)
    const bgColor = `linear-gradient(
        ${randomDeg}deg,
        ${color1},
        ${color2}
    )`;
    body.style.background = bgColor
    colorText.textContent = bgColor
}

setGradient()

container.addEventListener('click', setGradient)