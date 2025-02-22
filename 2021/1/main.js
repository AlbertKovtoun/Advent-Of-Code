import { input } from "./input.js"

let inputArray = input.split(/[ \n]/).filter(Boolean).map(Number)

let depthCount = 0

for (let i = 0; i < inputArray.length; i++) {
  let currentDepth = inputArray[i]
  let previousDepth = inputArray[i - 1]

  if (currentDepth > previousDepth) {
    depthCount++
  }
}

console.log(depthCount)
