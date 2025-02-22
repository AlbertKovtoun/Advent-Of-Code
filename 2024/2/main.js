// THIS IS NOT CORRECT WITH PART 2

import { input } from "./input.js"

const inputArray = []

for (let values of input.split("\n")) {
  inputArray.push(values.split(" ").map(Number))
}

let isAscending = true
let safeReports = 0

for (let i = 0; i < inputArray.length; i++) {
  const firstLevel = inputArray[i][0]
  const secondLevel = inputArray[i][1]
  let amountPassed = 0
  firstLevel < secondLevel ? (isAscending = true) : (isAscending = false)

  for (let j = 0; j < inputArray[i].length - 1; j++) {
    const currentLevel = inputArray[i][j]
    const nextLevel = inputArray[i][j + 1]
    if (isAscending) {
      if (nextLevel >= currentLevel + 1 && nextLevel <= currentLevel + 3) {
        amountPassed++
      }
    } else if (!isAscending) {
      if (nextLevel <= currentLevel - 1 && nextLevel >= currentLevel - 3) {
        amountPassed++
      }
    }
  }

  if (amountPassed === inputArray[i].length - 1) {
    safeReports++
    continue
  }

  for (let k = 0; k < inputArray[i].length; k++) {
    let inputArrayCopy = [...inputArray[i]]
    inputArrayCopy.splice(k, 1)
    amountPassed = 0

    for (let l = 0; l < inputArrayCopy.length - 1; l++) {
      const currentLevel = inputArrayCopy[l]
      const nextLevel = inputArrayCopy[l + 1]
      if (isAscending) {
        if (nextLevel >= currentLevel + 1 && nextLevel <= currentLevel + 3) {
          amountPassed++
        }
      } else if (!isAscending) {
        if (nextLevel <= currentLevel - 1 && nextLevel >= currentLevel - 3) {
          amountPassed++
        }
      }
    }

    if (amountPassed === inputArrayCopy.length - 1) {
      safeReports++
      continue
    }
  }
}

console.log(safeReports)
