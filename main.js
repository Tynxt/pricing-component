const toggle = document.querySelector("#toggle");
const toggleButton = document.querySelector("#toggle-button");

let counter = 0;

const togglePositions = ['right', 'left'];
const toggleColors = ['var(--light-grayish-blue-toggle)', 'var(--soft-cyan)']

toggle.addEventListener('click', _ => {
    toggle.style.setProperty('background-color', toggleColors[counter % 2]);
    toggleButton.style.setProperty(togglePositions[counter % 2], '0');
    toggleButton.style.setProperty(togglePositions[counter % 2 + 1], 'auto');
    counter+=1;
    }

)

const slider = document.querySelector("#slider");
const sliderBar = document.querySelector(".slider-bar")
const emptyLine = document.querySelector("#empty-line");
const fullLine = document.querySelector("#full-line");
const money = document.querySelector("#money");

let pressed = false;

slider.addEventListener('mousedown', _ => {
    pressed = true;
    slider.style.cursor = 'grabbing';
})

slider.addEventListener('mouseenter', _ => {
    slider.style.cursor = 'grab';
})

slider.addEventListener('mouseup', _ => {
    slider.style.cursor = 'grab';
})

window.addEventListener('mouseup', _ => {
    pressed = false;
})

window.addEventListener('mousemove', e => {
    const posX = e.pageX - (window.innerWidth - sliderBar.offsetLeft) / 2;
    if(pressed && posX >= 0 && posX <= sliderBar.offsetLeft) {
        slider.style.left = `calc(${posX}px - 1.5em)`;
        fullLine.style.width = `calc(${posX}px)`;
        emptyLine.style.width = `calc(${sliderBar.offsetLeft}px - ${posX}px)`;
        money.innerHTML = `$${Math.round(70 * 100 * posX / sliderBar.offsetLeft) / 100 }`;
    }
})


