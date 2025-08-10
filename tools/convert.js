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

const conversionSwapButton = document.getElementById('conversion-swap-button');

const swapConversions = () => {
    let a;
    let b;
    a = conversionInput.value;
    b = conversionOutput.value;
    let c;
    let d;
    c = conversionInputSelect.value;
    d = conversionOutputSelect.value;

    conversionInput.value = b;
    conversionOutput.value = a;

    conversionInputSelect.value = d;
    conversionOutputSelect.value = c;
}

conversionSwapButton.addEventListener('click', swapConversions)



// switching tabs

const conversionMethodButtons = document.querySelector('#conversion-methods-container').children;
const conversionLengthButton = document.getElementById('conversion-length-button');
const conversionWeightButton = document.getElementById('conversion-weight-button');
const conversionVolumeButton = document.getElementById('conversion-volume-button');
const conversionTemperatureButton = document.getElementById('conversion-temperature-button');

let activeConvertTab = length;

const clearConversionActive = () => {
    Array.from(conversionMethodButtons).forEach(e => {
        e.classList.remove('active')
    })
}

Array.from(conversionMethodButtons).forEach(element => {
    element.addEventListener('click', (e) => {
        clearConversionActive()
        e.target.classList.add('active')
    })
});

let lengthOptions = `
                        <option value="mm">Milimeter (mm)</option>
                        <option value="cm">Centimeter (cm)</option>
                        <option value="m">Meter (m)</option>
                        <option value="km">Kilometer (km)</option>
                        <option value="in">Inch (in)</option>
                        <option value="ft">Foot (ft)</option>
                        <option value="yd">Yard (yd)</option>
                        <option value="mi">Mile (mi)</option>
`;

let weightOptions = `
                        <option value="mg">Milligram (mg)</option>
                        <option value="g">Gram (g)</option>
                        <option value="kg">Kilogram (kg)</option>
                        <option value="t">Metric ton (t)</option>
                        <option value="oz">Ounce (oz)</option>
                        <option value="lb">Pound (lb)</option>
                        <option value="st">Stone (st)</option>
                        <option value="us_ton">US tone (us_ton)</option>
`;

let volumeOptions = `
    <option value="ml">Milliliter (mL)</option>
    <option value="l">Liter (L)</option>
    <option value="cm3">Cubic centimeter (cm³)</option>
    <option value="m3">Cubic meter (m³)</option>
    <option value="tsp">Teaspoon (tsp)</option>
    <option value="tbsp">Tablespoon (tbsp)</option>
    <option value="fl_oz">Fluid ounce (fl oz)</option>
    <option value="cup">Cup (cup)</option>
    <option value="pt">Pint (pt)</option>
    <option value="qt">Quart (qt)</option>
    <option value="gal">Gallon (gal)</option>
`;

let temperatureOptions = `
    <option value="c">Celsius (°C)</option>
    <option value="f">Fahrenheit (°F)</option>
    <option value="k">Kelvin (K)</option>
    <option value="r">Rankine (°R)</option>
`;



conversionLengthButton.addEventListener('click', () => {
    conversionInputSelect.innerHTML = lengthOptions;
    conversionOutputSelect.innerHTML = `
                        <option value="mm">Milimeter (mm)</option>
                        <option value="cm" selected>Centimeter (cm)</option>
                        <option value="m">Meter (m)</option>
                        <option value="km">Kilometer (km)</option>
                        <option value="in">Inch (in)</option>
                        <option value="ft">Foot (ft)</option>
                        <option value="yd">Yard (yd)</option>
                        <option value="mi">Mile (mi)</option>
`;
    clearAll()
})

conversionWeightButton.addEventListener('click', () => {
    conversionInputSelect.innerHTML = weightOptions;
    conversionOutputSelect.innerHTML =  `
                        <option value="mg">Milligram (mg)</option>
                        <option value="g" selected>Gram (g)</option>
                        <option value="kg">Kilogram (kg)</option>
                        <option value="t">Metric ton (t)</option>
                        <option value="oz">Ounce (oz)</option>
                        <option value="lb">Pound (lb)</option>
                        <option value="st">Stone (st)</option>
                        <option value="us_ton">US tone (us_ton)</option>
`;
    clearAll()
})

conversionVolumeButton.addEventListener('click', () => {
    conversionInputSelect.innerHTML = volumeOptions;
    conversionOutputSelect.innerHTML = `
    <option value="ml">Milliliter (mL)</option>
    <option value="l" selected>Liter (L)</option>
    <option value="cm3">Cubic centimeter (cm³)</option>
    <option value="m3">Cubic meter (m³)</option>
    <option value="tsp">Teaspoon (tsp)</option>
    <option value="tbsp">Tablespoon (tbsp)</option>
    <option value="fl_oz">Fluid ounce (fl oz)</option>
    <option value="cup">Cup (cup)</option>
    <option value="pt">Pint (pt)</option>
    <option value="qt">Quart (qt)</option>
    <option value="gal">Gallon (gal)</option>
`;
    clearAll()
})

conversionTemperatureButton.addEventListener('click', () => {
    conversionInputSelect.innerHTML = temperatureOptions;
    conversionOutputSelect.innerHTML = `
    <option value="c">Celsius (°C)</option>
    <option value="f" selected>Fahrenheit (°F)</option>
    <option value="k">Kelvin (K)</option>
    <option value="r">Rankine (°R)</option>
`;
    clearAll()
})