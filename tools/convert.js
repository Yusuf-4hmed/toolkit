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

    let grams;

    switch (conversionInputSelect.value) {
    case "mg": 
        grams = conversionInput.value * 0.001; 
        break;
    case "g": 
        grams = conversionInput.value * 1; 
        break;
    case "kg": 
        grams = conversionInput.value * 1000; 
        break;
    case "t": 
        grams = conversionInput.value * 1000000; 
        break;
    case "oz": 
        grams = conversionInput.value * 28.349523125; 
        break;
    case "lb": 
        grams = conversionInput.value * 453.59237; 
        break;
    case "st": 
        grams = conversionInput.value * 6350.29318; 
        break;
    case "us_ton": 
        grams = conversionInput.value * 907184.74; 
        break;
    }

    switch (conversionOutputSelect.value) {
    case "mg": 
        output = grams / 0.001; 
        break;
    case "g": 
        output = grams / 1; 
        break;
    case "kg": 
        output = grams / 1000; 
        break;
    case "t": 
        output = grams / 1000000; 
        break;
    case "oz": 
        output = grams / 28.349523125; 
        break;
    case "lb": 
        output = grams / 453.59237; 
        break;
    case "st": 
        output = grams / 6350.29318; 
        break;
    case "us_ton": 
        output = grams / 907184.74; 
        break;
    }

    let liters;

switch (conversionInputSelect.value) {
    case "ml":   liters = conversionInput.value * 0.001; break;
    case "l":    liters = conversionInput.value * 1; break;
    case "cm3":  liters = conversionInput.value * 0.001; break;
    case "m3":   liters = conversionInput.value * 1000; break;
    case "tsp":  liters = conversionInput.value * 0.00492892159; break;
    case "tbsp": liters = conversionInput.value * 0.0147867648; break;
    case "fl_oz": liters = conversionInput.value * 0.0295735296; break;
    case "cup":  liters = conversionInput.value * 0.24; break; // metric cup
    case "pt":   liters = conversionInput.value * 0.473176473; break;
    case "qt":   liters = conversionInput.value * 0.946352946; break;
    case "gal":  liters = conversionInput.value * 3.785411784; break;
}

switch (conversionOutputSelect.value) {
    case "ml":   output = liters / 0.001; break;
    case "l":    output = liters / 1; break;
    case "cm3":  output = liters / 0.001; break;
    case "m3":   output = liters / 1000; break;
    case "tsp":  output = liters / 0.00492892159; break;
    case "tbsp": output = liters / 0.0147867648; break;
    case "fl_oz": output = liters / 0.0295735296; break;
    case "cup":  output = liters / 0.24; break;
    case "pt":   output = liters / 0.473176473; break;
    case "qt":   output = liters / 0.946352946; break;
    case "gal":  output = liters / 3.785411784; break;
}

let celsius;

switch (conversionInputSelect.value) {
    case "c": celsius = parseFloat(conversionInput.value); break;
    case "f": celsius = (conversionInput.value - 32) * 5/9; break;
    case "k": celsius = conversionInput.value - 273.15; break;
    case "r": celsius = (conversionInput.value - 491.67) * 5/9; break;
}

switch (conversionOutputSelect.value) {
    case "c": output = celsius; break;
    case "f": output = (celsius * 9/5) + 32; break;
    case "k": output = celsius + 273.15; break;
    case "r": output = (celsius + 273.15) * 9/5; break;
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