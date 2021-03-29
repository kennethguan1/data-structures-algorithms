var maximumWealth = function(accounts) {
    let richest = 0
    let sum = 0

    for (i=0; i<accounts.length; i++){
        let sum = accounts[i].reduce((accumulator, currentValue) => accumulator + currentValue)
        
        if (sum>richest){
            richest = sum
        }
    }
    return richest
}