const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const height = Number(document.getElementById('height').value);
    const weight = Number(document.getElementById('weight').value);
    const resultElem = document.getElementById('result')


    if ( isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0){
        alert('please enter a valid number');
        return;
    };

    const heightInMeters = height / 100;


    const BMI = weight / (heightInMeters**2);
    resultElem.innerText = `Your body mass index : ${BMI.toFixed(2)}`

   document.getElementById('height').value = '';
   document.getElementById('weight').value = ''
   
});