function min(arr) {
 return Math.min (...arr)
}

function max(arr) {
return arr.reduce(function(x,y){
  return (x > y) ? x : y
})
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
    return result.join('-')
  
}

function evens(arr) {
  var result = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
     result.push(arr[i])
    }}
    return result.join ('-')
  

}

function numberProcessing(arr) {
  return 'Min: ' + min(arr) + ', Max: ' + max(arr) + ', Mean: ' + mean(arr) + ', Odds: ' + odds(arr) + ', Evens: ' + evens(arr)
}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]))
// "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0