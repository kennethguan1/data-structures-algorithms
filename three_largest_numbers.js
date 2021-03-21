function findThreeLargestNumbers(array) {
  // Write your code here.
	let answer = [array[0], array[1], array[2]]
	
	for(let i=3; i<array.length; i++){
		let smallest = Math.min(...answer)
		if (array[i]>smallest){
			let index = answer.indexOf(smallest)
			answer[index] = array[i]
		}
	}

	let first = answer[0]
	let second = answer[1]
	let third = answer[2]
	let newAnswer = answer
	
	
	if (first > second && first > third){
		newAnswer[2] = first
	} else if (first >= second && first <= third || first <= second && first >= third){
		newAnswer[1] = first
	} else {
		newAnswer[0] = first
	}
	
	if (second > first && second > third){
		newAnswer[2] = second
	} else if (second > first && second < third || second < first && second > third){
		newAnswer[1] = second
	} else {
		newAnswer[0] = second
	}
	
	if (third > second && third > first){
		newAnswer[2] = third
	} else if (third > second && third < first || third < second && third > first){
		newAnswer[1] = third
	} else {
		newAnswer[0] = third
	}

	return newAnswer
}