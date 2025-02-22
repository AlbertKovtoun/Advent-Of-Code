import { input } from "./input.js"

const inputArray = input.split(/\n/).filter(Boolean)

let horizontalPosition = 0
let depth = 0
let aim = 0

for (let i = 0; i < inputArray.length; i++) {
  const direction = inputArray[i].replace(/\s|[0-9]/g, "")
  const units = parseInt(inputArray[i].replace(/\D/g, ""))

  if (direction === "down") {
    //depth += units
    aim += units
  }

  if (direction === "up") {
    //depth -= units
    aim -= units
  }

  if (direction === "forward") {
    horizontalPosition += units
    depth += aim * units
  }
}

console.log(horizontalPosition * depth)
