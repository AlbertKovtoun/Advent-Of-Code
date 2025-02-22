import { input } from "./input.js"

const inputArray = input.split(/\n/).filter(Boolean)

let horizontalPosition = 0
let depth = 0

for (let i = 0; i < inputArray.length; i++) {
  const direction = inputArray[i].replace(/\s|[0-9]/g, "")
  const stepAmount = parseInt(inputArray[i].replace(/\D/g, ""))

  if (direction === "up") {
    depth -= stepAmount
  }

  if (direction === "down") {
    depth += stepAmount
  }

  if (direction === "forward") {
    horizontalPosition += stepAmount
  }
}

console.log(horizontalPosition * depth)
