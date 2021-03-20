function tournamentWinner(competitions, results) {
  // Write your code here.
	let points = {}
	
	for (let i = 0; i < competitions.length; i++){
		if(results[i] === 0){
			if (!points[competitions[i][1]]){
				points[competitions[i][1]] = 0
			}
			points[competitions[i][1]] += 1
		} else {
			if (!points[competitions[i][0]]){
				points[competitions[i][0]] = 0
			}
				points[competitions[i][0]] += 1
			}
	}
	
	
	let array = Object.entries(points)
	let score = 0
	let answer = ""
	
	array.forEach((ele) => {
		if (ele[1] > score) {
			score = ele[1]
			answer = ele[0]
		}
	})
	
	
  return answer;
}