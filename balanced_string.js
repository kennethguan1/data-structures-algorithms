var balancedStringSplit = function(s) {
    let object = {R: 0, L:0}
    let count = 0
    for (let i = 0; i<s.length; i++){
        if (s[i]=== "R"){
            object["R"] += 1
        } else {
            object["L"] += 1
        }

        if (object["R"]=== object["L"]){
            object["R"] = 0
            object["L"] = 0
            count += 1
        }
    }
    return count
}