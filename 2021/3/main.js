import { input } from "./input.js"

let inputArray = input.split(/[ \n]/).filter(Boolean)

let rearangedArray = []

// We just assume all the binary strings are the same length (they have to be)
for (let i = 0; i < 12; i++) {
  let columnString = ""

  for (let j = 0; j < inputArray.length; j++) {
    columnString += Array.from(inputArray[j])[i]
  }

  rearangedArray.push(columnString)
}

let gammaRateBinary = ""
let epsilonRateBinary = ""

for (let i = 0; i < rearangedArray.length; i++) {
  let numberCounter = 0

  for (let number of rearangedArray[i]) {
    if (number === "0") {
      numberCounter--
    }

    if (number === "1") {
      numberCounter++
    }
  }

  if (numberCounter > 0) {
    gammaRateBinary += "1"
    epsilonRateBinary += "0"
  } else {
    gammaRateBinary += "0"
    epsilonRateBinary += "1"
  }
}

const gammaRate = parseInt(gammaRateBinary, 2)
const epsilonRate = parseInt(epsilonRateBinary, 2)
const powerConsumption = gammaRate * epsilonRate

console.log(powerConsumption)
