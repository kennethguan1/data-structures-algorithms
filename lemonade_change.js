var lemonadeChange = function(bills) {
   
    let balance = 0
    let total = bills.length*5
    let wallet = {5:0, 10:0, 20:0}
   
    for(let i=0;i<bills.length;i++){

        if (bills[i]===5){
            wallet[5]+=1
        }
       
        if (bills[i]===10){
            wallet[10]+=1
            wallet[5]-=1
            if(wallet[5]<0){return false}
        }
       
        if (bills[i]===20){
            wallet[20]+=1
            if(wallet[10]>0){
            wallet[10] -=1            
            wallet[5] -=1} else{
                wallet[5] -=3
            }
           
            if (wallet[5] < 0 || wallet[10] < 0)
            {return false}
        }

    }
   
    let balance1 = Object.values(wallet)
    let balance2 = Object.keys(wallet)
    let balance3 = balance1[0]*balance2[0]+balance1[1]*balance2[1]+balance1[2]*balance2[2]
   
    if (balance3===total){
        return true
    }
};