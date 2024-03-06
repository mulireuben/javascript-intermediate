let myArray= [
    {name:"rEUBEN",paidAll:true, balance:0},
    {name:"Paul",paidAll:false, balance:100},
    {name:"Mwangi",paidAll:true, balance:0},
    {name:"Kimani",paidAll:false, balance:300},
    {name:"Eick",paidAll:false, balance:500},
    {name:"Ana",paidAll:true, balance:0},
    {name:"Moses",paidAll:false, balance:790},
    {name:"Roba",paidAll:true, balance:8000},
    
]

let unpaidpatients =myArray.filter((item)=>{item.paidAll===false})

console.log(unpaidpatients)


let totalbalance= myArray.reduce((total,balance)=>{return total+balance},0)