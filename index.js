/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let convertBtn = document.getElementById("convert-btn")
let unitInput = document.getElementById("unit-input")
let meterFeet = document.getElementById("meter-feet")
let literGallon = document.getElementById("liter-gallon")
let kilogramPound = document.getElementById("kilogram-pound")

convertBtn.addEventListener("click", function() {
    let num = unitInput.valueAsNumber
    convertLength(num)
    convertVolume(num)
    convertMass(num)
})

function convertLength(unitNumber) {
    let metersToFeet = unitNumber * 3.28084
    let feetToMeters = unitNumber * 0.3048
    meterFeet.innerHTML = `${unitNumber} meters = ${metersToFeet.toFixed(3)} feet | ${unitNumber} feet = ${feetToMeters.toFixed(3)} meters`
}
function convertVolume(unitNumber) {
    let literToGallon = unitNumber * 0.2641
    let gallonToLiter = unitNumber * 3.78541
    literGallon.innerHTML = `${unitNumber} liters = ${literToGallon.toFixed(3)} gallons | ${unitNumber} gallons = ${gallonToLiter.toFixed(3)} liters`
}
function convertMass(unitNumber) {
    let kilogramToPound = unitNumber * 2.20462
    let poundToKilogram = unitNumber * 0.453592
    kilogramPound.innerHTML = `${unitNumber} kilos = ${kilogramToPound.toFixed(3)} pounds | ${unitNumber} pounds = ${poundToKilogram.toFixed(3)} kilos`
}
