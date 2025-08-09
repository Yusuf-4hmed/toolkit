const conversionInput = document.getElementById('conversion-input');
const conversionInputSelect = document.getElementById('conversion-input-select');

const conversionOutput = document.getElementById('conversion-output');
const conversionOutputSelect = document.getElementById('conversion-output-select');

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

    let output;

        switch (conversionOutputSelect.value) {
        case "mm": output = meters / 0.001;
        break;
        case "cm": output = meters / 0.01;
        break;
        case "m": output = meters / 1;
        break;
        case "km": output = meters / 1000;
        break;
        case "in": output = meters / 0.0254;
        break;
        case "ft": output = meters / 0.3048;
        break;
        case "yd": output = meters / 0.9144;
        break;
        case "mi": output = meters / 1609.344;
        break;
    }
    
    conversionOutput.value = output;
}

conversionInput.addEventListener('input', () => {
   convertInput()
})
conversionInputSelect.addEventListener('change', () => {
    convertInput()
})
conversionOutputSelect.addEventListener('change', () => {
    convertInput()
})

const conversionClearButton = document.getElementById('conversion-clear-button');

const clearAll = () => {
    conversionInput.value = '';
    conversionOutput.value = '';
}

conversionClearButton.addEventListener('click', clearAll)