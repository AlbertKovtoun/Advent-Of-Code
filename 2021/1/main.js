import { input } from "./input.js"

let inputArray = input.split(/[ \n]/).filter(Boolean).map(Number)

let depthCount = 0

for (let i = 0; i < inputArray.length; i++) {
  let currentDepth = inputArray[i]
  let previousDepth = inputArray[i - 1]

  let window1 = inputArray[i] + inputArray[i + 1] + inputArray[i + 2]
  let window2 = inputArray[i + 1] + inputArray[i + 2] + inputArray[i + 3]

  // Part 1
  //if (currentDepth > previousDepth) {
  //  depthCount++
  //}

  // Part 2
  if (window2 > window1) {
    depthCount++
  }
}

console.log(depthCount)
