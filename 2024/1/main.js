import { input } from "./input.js"

let leftColumnArray = []
let rightColumnArray = []
let totalDistance = 0
let similarityScore = 0

let inputArray = input.split(/[   \n]/)
inputArray = inputArray.filter((item) => {
  // Only returns items if they are true which means that empty items are filtered out
  return item
})

for (let i = 0; i < inputArray.length; i++) {
  if (i === 0 || i % 2 === 0) {
    leftColumnArray.push(inputArray[i])
  } else {
    rightColumnArray.push(inputArray[i])
  }
}

leftColumnArray = leftColumnArray.sort()
rightColumnArray = rightColumnArray.sort()

for (let i = 0; i < leftColumnArray.length; i++) {
  totalDistance += Math.abs(leftColumnArray[i] - rightColumnArray[i])
}

console.log(totalDistance)

for (let leftId of leftColumnArray) {
  let amountOfTimes = 0

  for (let rightId of rightColumnArray) {
    if (leftId === rightId) amountOfTimes++
  }

  similarityScore += leftId * amountOfTimes
}

console.log(similarityScore)
