const conversionInput = document.getElementById('conversion-input');
const conversionInputSelect = document.getElementById('conversion-input-select');

const convertInput = () => {
    let meters;

    switch (conversionInputSelect.value) {
        case "mm": meters = conversionInput.value * 0.001;
        break;
        case "cm": meters = conversionInput.value * 0.01;
        break;
        case "m": meters = conversionInput.value * 1;
        break;
        case "km": meters = conversionInput.value * 1000;
        break;
        case "in": meters = conversionInput.value * 0.0254;
        break;
        case "ft": meters = conversionInput.value * 0.3048;
        break;
        case "yd": meters = conversionInput.value * 0.9144;
        break;
        case "mi": meters = conversionInput.value * 1609.344;
        break;
    }

    console.log(meters)
}

conversionInput.addEventListener('input', () => {
   convertInput()
})