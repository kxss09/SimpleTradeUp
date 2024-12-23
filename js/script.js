function showCalculator(calcNumber){
    // Hide Calculator section
    const calculators = document.getElementsByClassName('calculator-section');
    for (let calc of calculators){
        calc.style.display="none";
    }
    
    // Show the selected calculator
    const selectedCalc = document.getElementById('calculator' + calcNumber);
    selectedCalc.style.display = 'block';
}

function calculateSimpleFloat() {  // Changed name to match HTML
    // Get all float inputs
    const form = document.getElementById('simpleform');

    const floatInputs = [
        form.floats1.value,
        form.floats2.value,
        form.floats3.value,
        form.floats4.value,
        form.floats5.value,
        form.floats6.value,
        form.floats7.value,
        form.floats8.value,
        form.floats9.value,
        form.floats10.value
    ];

    // Calculate average float
    const sum = floatInputs.reduce((acc, val) => {
        const parsed = parseFloat(val);
        return acc + parsed;
    }, 0);
    
    const averageFloat = sum / 10;

    // Get min and max float values
    const minFloat = parseFloat(form.minfloat.value);
    const maxFloat = parseFloat(form.maxfloat.value);

    // Calculate the final float value
    const finalFloat = minFloat + (maxFloat - minFloat) * averageFloat;

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <article>
            <h4>Results:</h4>
            <p>Average Float: ${averageFloat.toFixed(14)}</p>
            <p>Final Float: ${finalFloat.toFixed(14)}</p>
        </article>
    `;
}
  