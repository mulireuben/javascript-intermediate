// let myArray= [
//     {name:"rEUBEN",paidAll:true, balance:0},
//     {name:"Paul",paidAll:false, balance:100},
//     {name:"Mwangi",paidAll:true, balance:0},
//     {name:"Kimani",paidAll:false, balance:300},
//     {name:"Eick",paidAll:false, balance:500},
//     {name:"Ana",paidAll:true, balance:0},
//     {name:"Moses",paidAll:false, balance:790},
//     {name:"Roba",paidAll:true, balance:8000},
    
// ]

// let unpaidpatients =myArray.filter((item)=> item.paidAll===false )

// console.log(unpaidpatients.length
//     )

// let balancetotal=myArray.reduce((sum,item)=> (sum += item.balance),0)

// console.log(balancetotal)
// let paidAll=myArray.map((item)=>({
//     ...item,
//     paidAll:true
// }))
// console.log(paidAll)

//list of array

const array=[1,2,3,4,5,"reuben"]
array.unshift(0)//to add item at te beginining of an array
array.pop()//to remove item at the end of an array
array.shift()//remove an item at the begining of an array
for(const item of array){
    console.log(item)
}
//use unshift to add an element at the beginning of the array
