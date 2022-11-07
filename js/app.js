const submitBtn = document.getElementById('submitBtn')

// get inputs 
const getInputs =()=> {
    const temperature = Number(document.getElementById('temperature').value)

    const startUnit = document.querySelector('input[name=startUnit]:checked').value
    const convertedUnit = document.querySelector('input[name=convertedUnit]:checked').value
    // console.log(convertedUnit)

    setBenchmark(temperature, startUnit, convertedUnit)
}

const setBenchmark =(num, unit, newUnit) => {
    let c

    switch (unit) {
        case 'fahrenheit': 
            c = (num - 32) * (5 / 9)
            break
        case 'kelvin':
            c = num - 273.15
            break
        case 'newton':
            c = num / 0.33000 
            break
        case 'rankine':
            c = (num - 491.67) * 5 / 9
            break 
        default: 
            c = num
            break
    }

    convert(c, newUnit)
}

const convert =(num, unit)=> {
    let u

    switch (unit) {
        case 'fahrenheit':
            u = (num * 9 / 5) + 32
            break
        case 'kelvin':
            u = num + 273.15
            break 
        case 'newton':
            u = num * 0.33000
            break
        case 'rankine':
            u = num * 9 / 5 + 491.67
            break
        default:
            u = num
            break
    }

    returnConverted(u, unit)

}

const returnConverted =(num, unit)=> {
    const result = document.getElementById('result')
    const convertedTemp = document.getElementById('convertedTemp')

    result.innerText = num 
    convertedTemp.innerText = unit
}

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    getInputs()
})