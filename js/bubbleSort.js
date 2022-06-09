var sequence = [5,3,0,4,1]
var swaps = 0
let newSwquence = sequence.slice()
// Your Code Here
function bubbleSort(arr){
    for (let i = 0; i < newSwquence.length; i++) {
        for (let j = i + 1; j < newSwquence.length; j++) {
            if (newSwquence[i] > newSwquence[j]) {
                swaps += 1
                let previous = newSwquence[i]
                let current = newSwquence[j]
                let x = newSwquence[i] = current
                let y =newSwquence[j] = previous
                console.log(x, y)
            }
        }
    } return newSwquence
    
}

console.log(bubbleSort(newSwquence))
console.log("Final result: " + newSwquence)
console.log("Swaps: " + swaps)


