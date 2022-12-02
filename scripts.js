const brands = document.querySelector('#brand')
const models = document.querySelector('#models')
const year = document.querySelector('#year')
const result = document.querySelector('.result')


let chevroletModels = ['Aveo', 'Astro', 'Camaro']
let audiModels = ['A1', 'A2', 'A3']
let bmwModels = ['1 Series', '2 Series', '3 Series']


let chevroletYears = ['2008', '2009', '2010']
let audiYears = ['2019', '2005', '2012']
let bmwYears = ['2010', '2019', '2020']



const selectBrand = () => {
    if (brands.value !== 'none') {
        models.removeAttribute('disabled')
    
    }

    let options = ''
   
        for (let model of chevroletModels) {
            if (brands.value == '900000') {
                options += `<option value = "10000">${model}</option>`
            }

            models.innerHTML = options
        }
    
        for (let model of audiModels) {
            if (brands.value == '700000') {
                options += `<option value = "15000">${model}</option>`
            }

            models.innerHTML = options
        
        }

        for (let model of bmwModels) {
            if (brands.value == '800000') {
            options += `<option value = "9000">${model}</option>`
            }

            models.innerHTML = options
    
        }     

}

const selectYear = () => {
    if (models.value !== 'none') {
    year.removeAttribute('disabled')
    }

    let chosenModel = ''
    for (let years of chevroletYears) {
        if (models.value == '10000') {
            chosenModel += `<option value = "1">${years}</option>`
        }
        year.innerHTML = chosenModel

    }

    for (let years of audiYears) {
        if (models.value == '15000') {
            chosenModel += `<option value = "2">${years}</option>`
        }
        year.innerHTML = chosenModel

    }

    for (let years of bmwYears) {
        if (models.value == '9000') {
            chosenModel += `<option value = "3">${years}</option>`
        }
        year.innerHTML = chosenModel

    }

}

const getResult = () => {
    let brand = Number(brands.value)
    let model = Number(models.value)
    result.innerHTML = `Финальная стоимость авто: ${brand + model}`
}