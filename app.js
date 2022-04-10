function getpin(){
const pin = Math.round(Math.random() * 10000);
const makeString = pin + '';
if (makeString.length == 4){
    return pin;
}
else {
    return getpin();
}
}
function genaratePin(){
    const pin = getpin();
   document.getElementById('display-pin').value=pin;
};

document.getElementById('key-paid').addEventListener('click', function(event){
    const number = event.target.innerText;
    if (isNaN(number)) {
        console.log(number)
    }
    else{
        const calcInput = document.getElementById('clac-input');
        const priviousNumber = calcInput.value;
        const newNumber = priviousNumber + number;
        calcInput.value = newNumber;

        document.getElementById('clear-button').addEventListener('click', function(){
            calcInput.value =''
        })
    }
});

document.getElementById('matching-button').addEventListener('click', function(){
    const randomNumberFeild = document.getElementById('display-pin');
    const randomNumber = randomNumberFeild.value;

    const calclutionInput = document.getElementById('clac-input');
    const calclutionInputvalue = calclutionInput.value;

    const notifyMatch = document.getElementById('pin-match');
    const notifyError = document.getElementById('not-match')
    if (randomNumber == calclutionInput.value) {
        // console.log('wellcome')
       
        notifyMatch.style.display='block'
        notifyError.style.display='none'
    } else {
        // console.log('opps')
    notifyError.style.display='block'
    notifyMatch.style.display='none'
    }
})


