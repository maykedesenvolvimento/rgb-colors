'use strict';

const app = function () {
    const color = document.querySelector('#color');

    const redRange = document.querySelector('#redRange');
    const greenRange = document.querySelector('#greenRange');
    const blueRange = document.querySelector('#blueRange');

    redRange.addEventListener('change', updateRedValue);
    greenRange.addEventListener('change', updateGreenValue);
    blueRange.addEventListener('change', updateBlueValue);

    /* const redValue = document.querySelector('#redValue');
    const blueValue = document.querySelector('#blueValue');
    const greenValue = document.querySelector('#greenValue');
    
    redValue.addEventListener('change', updateRedValue);
    greenValue.addEventListener('change', updateGreenValue);
    blueValue.addEventListener('change', updateBlueValue);*/

    function updateRedValue(event) {
        redValue.value = event.target.value;
        changeColor();
    }

    function updateBlueValue(event) {
        blueValue.value = event.target.value;
        changeColor();
    }

    function updateGreenValue(event) {
        greenValue.value = event.target.value;
        changeColor();
    }

    function changeColor() {
        color.style.background = `rgb(${redValue.value}, ${greenValue.value}, ${blueValue.value})`;
    }
}

window.addEventListener('load', app);