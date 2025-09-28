const counterLabel = document.querySelector('.counter');
const increaseBtn = document.querySelector('.increase-btn');
const decreaseBtn = document.querySelector('.decrease-btn');
const resetBtn = document.querySelector('.reset-btn');

let counter = 0;

increaseBtn.addEventListener('click', () =>{
    counter++;
    counterLabel.innerHTML = counter;
})

decreaseBtn.addEventListener('click',()=>{
    if(!counter) return;
    counter--;
    counterLabel.innerHTML = counter;
})

resetBtn.addEventListener('click',()=>{
    counter = 0;
    counterLabel.innerHTML = counter
})


