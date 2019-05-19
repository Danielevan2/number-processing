function min(arr) {
 return Math.min(...arr)
}

function max(arr) {
return Math.max(...arr)
}

function mean(arr) {
  var total = 0
  for (var i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total /= arr.length


}
function odds(arr) {
  var result = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
     result.push(arr[i])
    }}
    return result
  
}

function evens(arr) {
  var result = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
     result.push(arr[i])
    }}
    return result
  

}

function numberProcessing(arr) {
  return 'Min: ' + min(arr) + ', Max: ' + max(arr) + ', Mean: ' + mean(arr) + ', Odds: ' + odds(arr) + ', Evens: ' + evens(arr)
}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 15, -5, 3]))
// "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0