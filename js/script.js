const $ = document
const celsius = $.querySelector('.C')
const fahrenheit = $.querySelector('.F')
const converterInput = $.getElementById('converter')
const resultTxt = $.querySelector('.result')


const changeBtn = $.querySelector('.changeButton')
changeBtn.addEventListener('click', function () {
    if (celsius.innerHTML = '°C') {
        celsius.innerHTML = '°F'
        fahrenheit.innerHTML = '°C'
        $.title = '°F to °C'
        converterInput.setAttribute('placeholder', '°F')
    } else {
        celsius.innerHTML = '°C'
        fahrenheit.innerHTML = '°F'
        $.title = '°F to °C'
        converterInput.setAttribute('placeholder', '°C')
    }
    return c
})

const resetBtn = $.querySelector('.resetButton')
resetBtn.addEventListener('click', function () {
    resultTxt.innerHTML = ''
    converterInput.value = ''
})

const convertBtn = $.querySelector('.convertButton')
convertBtn.addEventListener('click', function () {
    if (converterInput.value === '') {
        resultTxt.innerHTML = "Write correct value!"
        resultTxt.style.color = '#c0392b'
    } else {
        if (celsius.innerHTML = '°C') {
            let resultValue = (converterInput.value * 1.8) + 32
            resultTxt.innerHTML= converterInput.value + '°C To ' + resultValue + '°F'
        } else {
            let resultValue = (converterInput.value -32) * 5 / 9
            resultTxt.style.color='yellow'
            resultTxt.innerHTML=converterInput.value+'°F To ' + resultValue.toFixed(2) + '°C'
        }
    }
})