'use strict'

const productPrices = document.getElementsByClassName('productPrice') // this returns an array with elements containing the price
const productQuantities = document.getElementsByClassName('productQuantity') // this returns an array with elements containing the quantity
const productTotalCosts = document.getElementsByClassName('productTotalCost') // this returns an array with elements containing the total cost of the products
const totalCost = document.getElementById('totalCost') // this returns a single element for the totalCost
const grocerylist = document.getElementById('groceriesTable') // this returns a single element which is the table

grocerylist.onchange = function () {

    let totaalBedrag = 0

    let i = 0

    for (i = 0; i < 25; i++) {

        let prijsPerProduct = parseFloat(productPrices[i].innerHTML).toFixed(2)
        let aantalProducten = productQuantities[i].valueAsNumber
        let subtotaal = +(prijsPerProduct * aantalProducten).toFixed(2)
        productTotalCosts[i].innerHTML = '€' + subtotaal
        totaalBedrag = totaalBedrag + subtotaal
    }

    totalCost.innerHTML = '€' + +totaalBedrag.toFixed(2)

}

const groceries = [

    {
        name: 'Cruesli',
        price: 0.96,
        description: 'This is cruesli',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Boter',
        price: 2.13,
        description: 'This is butter',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Kaas',
        price: 4.32,
        description: 'This is cheese',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Eieren',
        price: 2.31,
        description: 'These are eggs',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Pindakaas',
        price: 1.31,
        description: 'This is peanutbutter',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Hagelslag',
        price: 1.23,
        description: 'These are sprinkles',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Vlokken',
        price: 1.23,
        description: 'These are flakes',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Bitterballen (7 stuks)',
        price: 1.96,
        description: '',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Drop',
        price: 1.47,
        description: 'This is licorice / liquorice',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Eierballen (per stuk)',
        price: 2.49,
        description: '',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Frikandellen (per stuk)',
        price: 2.53,
        description: '',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Frikandellen (2 stuks)',
        price: 4.04,
        description: '',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Kroketten (per stuk)',
        price: 2.11,
        description: '',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Kroketten (2 stuks)',
        price: 3.13,
        description: '',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Pepernoten',
        price: 1.12,
        description: '',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Blote billetjes in het gras',
        price: 5.01,
        description: 'Dat is aardappelpuree met witte bonen en snijbonen',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Boerenjongens (per glaasje)',
        price: 1.87,
        description: 'Dat is een drank van rozijnen op brandewijn',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Boerenmeisjes (per glaasje)',
        price: 1.87,
        description: 'Dat is een drank van abrikozen op brandewijn',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Kaarsjebrij (per glaasje)',
        price: 1.87,
        description: 'Dat is watergruwel met kersen in plaats van krenten en rozijnen',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Kniepertie (per stuk)',
        price: 0.13,
        description: 'Dat is een koekje ',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Mous',
        price: 5.01,
        description: 'Dat is stamppot boerenkool',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Nij-joarskoek (per stuk)',
        price: 0.13,
        description: 'Dat is een koekje ',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Slierie',
        price: 1.87,
        description: 'Dat is watergruwel met zoete rode wijn',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Spekdik (per stuk)',
        price: 0.23,
        description: 'Dat is een koekje met stukjes spek erin',
        amount: '',
        subtotal: ''
    },
    {
        name: 'Veentrappersschotel',
        price: 5.01,
        description: 'Dat is stamppot witte bonen en bruine bonen',
        amount: '',
        subtotal: ''
    },

]


const groceriesTable = document.getElementById('groceriesItems')

for (const item of groceries) {
    let itemString = ''
    itemString += '<tr>'
    itemString += `<td>${item.name}</td>`
    itemString += `<td class="productPrice">${item.price}</td>`
    itemString += `<td>${item.description}</td>`
    itemString += `<td> <input class="productQuantity" type="number" value="0" max="99" min="0">${item.amount}</td>`
    itemString += `<td class="productTotalCost">${item.subtotal}</td>`
    itemString += '</tr>'
    groceriesTable.innerHTML += itemString
}


