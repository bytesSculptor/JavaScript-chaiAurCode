const form = document.querySelector('form');
// console.log(form);

form.addEventListener('submit', function (e) {
    // console.log(e.target) 
    e.preventDefault(); // so that it will not trigger post or get request
    // const resetHeight = document.querySelector('#height');
    // resetHeight.textContent = '';

    const height = parseInt(document.querySelector('#height').value);
    // console.log(height);
    const weight = parseInt(document.querySelector('#weight').value);
    // console.log(weight);
    const result = document.querySelector('#results');
    // result.innerHTML = height

    if (height === '' || height < 1 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`
    } else if (weight === '' || weight < 1 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // console.log(bmi);
        // result.innerHTML = `Bmi: ${bmi}`;

        if (bmi < 18.6) {
            result.innerHTML = `BMI Value: ${bmi} <br> You are under wait as your bmi (${bmi}) is less than 18.6`;
        } else if (bmi > 24.9) {
            result.innerHTML = `BMI Value: ${bmi} <br> You are over wait as your bmi (${bmi}) is more than 24.9`;
        } else {
            result.innerHTML = `BMI Value: ${bmi} <br> Your  wait is Normal as your bmi (${bmi}) is between 18.6 and 24.9`;
        }
    }
    e.target.reset();
});