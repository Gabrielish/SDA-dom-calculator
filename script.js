function calc() {
    let number1 = parseInt(document.getElementById('number1').value)
    let number2 = parseInt(document.getElementById('number2').value)
    let operations = document.getElementById('operations').value
    
    if(operations === '+') {
        number2 = document.getElementById('result').value = number1 + number2
    }
    if(operations === '-') {
        number2 = document.getElementById('result').value = number1 - number2
    }
    if(operations === '*') {
        number2 = document.getElementById('result').value = number1 * number2
    }
    if(operations === '/') {
        if (number2 == 0 || number1 == 0) {
            number2 = document.getElementById('result').value = 'Nu se poate imparti la 0'
        } else {
            number2 = document.getElementById('result').value = number1 / number2
        }
        
    }
    
}