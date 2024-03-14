function genTicket(n) {
    let arr = new Array(n);// yaha humne ek array define kar diya hai 
    for (let i= 0 ; i < n ; i++){
        arr[i] = Math.floor(Math.random()*10);// yaha math.floor ki help se 3 random value generate hogi 

    }
    return arr;
}

function sum (arr) {
    return arr.reduce((sum , curr)=> sum +curr,0); // iski help se jo 3 random number genrate ho rahe hai wo add hoke print ho jaayenge 
        
}
export{genTicket , sum};