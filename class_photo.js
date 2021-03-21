function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
	      redShirtHeights.sort((a, b) => b - a)
        blueShirtHeights.sort((a,b) => b - a)

        let firstRowColor = redShirtHeights[0] < blueShirtHeights[0] ? "red" : "blue"

        for (let i=0; i<redShirtHeights.length; i++){
            let redHeight = redShirtHeights[i]
            let blueHeight = blueShirtHeights[i]

            if (firstRowColor === "red"){
                if (redHeight >= blueHeight){
                    return false
                }
                }  else if (blueHeight >= redHeight) {
                    return false
            }
        }
        return true
}