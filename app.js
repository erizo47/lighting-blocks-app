const board = document.querySelector('#board')
const SQUARES_NUMBERS = 400

const themeButton = document.querySelector('.theme-switch')

for ( let i = 0; i < SQUARES_NUMBERS; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
        setColor(square)
    )
    square.addEventListener('mouseleave', () => 
        returnColor(square)
    )
    board.append(square)
}

function setColor(element) {
    const color = `rgb(${getRandomNumber(20, 255)}, ${getRandomNumber(20, 255)}, ${getRandomNumber(20, 255)})`
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function returnColor(element) {
    element.style.backgroundColor = 'var(--squareColor)'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

themeButton.addEventListener('click', () => {
    if (themeButton.classList.contains('dark-theme')) {
        switchTheme('light-theme')
    } else if (themeButton.classList.contains('light-theme')){
        switchTheme('dark-theme')
    }
})

function switchTheme (theme) {
    if (theme === 'light-theme') {
        themeButton.classList.add('light-theme')
        themeButton.classList.remove('dark-theme')
        document.body.style.background = "var(--backgroundLight)"
        document.querySelector('.switch').style.background = 'var(--buttonPinLight)'
        document.querySelector('.theme-switch').style.background = 'var(--buttonLight)'
        document.querySelector('.switch').style.transform = 'translateX(37px)'
        
    } else {
        themeButton.classList.remove('light-theme')
        themeButton.classList.add('dark-theme')
        document.body.style.background = "var(--backgroundDark)"
        document.querySelector('.switch').style.background = 'var(--buttonPinDark)'
        document.querySelector('.theme-switch').style.background = 'var(--buttonDark)'
        document.querySelector('.switch').style.transform = 'translateX(0px)'
    }
}
