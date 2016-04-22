console.log("Walkdown function")

function walkDown (array, start) {
  var rows = array.length
  array.forEach((row) => {
    row.push(start)
    start ++
  })
  return [array,start]
}

console.log(walkDown([[7,8,9], [6,1,2], [5,4,3]], 10))
console.log(walkDown([[1]], 2))


console.log("\n\n Walkleft function")
function walkLeft (array, start) {
  col = array[0].length
  var lastRow = []
  for(var i = 0; i < col; i++){
    lastRow.unshift(start + i)
  }
  array.push(lastRow)
  return [array, (start + (col))]
}

console.log(walkLeft([[7,8,9,10], [6,1,2,11], [5,4,3,12]], 13))

console.log("\n\n walkUp function")
function walkUp (array, start) {
  var rows = array.length
  var i = start + rows - 1
  array.forEach((row) => {
    row.unshift(i)
    i--
  })
  return [array,start + rows]
}

console.log(walkUp([[1,2], [4,3]], 5))

console.log("\n\n walkRight function")
function walkRight (array, start){
  col = array[0].length
  var lastRow = []
  for(var i = 0; i < col; i++){
    lastRow.push(start + i)
  }
  array.unshift(lastRow)
  return [array, (start + (col))]


}
console.log(walkRight([[6,1,2], [5,4,3]], 7))


//pseudocode for spiral
// function spiral(){
//   spiral(n)
//   if (n == 1)
//     [[1]]
//   else
//     spiralArray = spiral(n-1)
//     start = (n-1)*(n-1) + 1
//     if n % 2 == 0
//        start = walkDown(spiralArray, start)
//        walkLeft(spiralArray, start)
//     else
//        start = walkUp(spiralArray, start)
//        walkRight(spiralArray, start)
//     return spiralArray
// }

