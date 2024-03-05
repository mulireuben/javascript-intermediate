    //syntax for a promise
    //below is the syntax
    const promise=new Promise((resolve,reject) =>{});
    //an event is fullfilled if it has no errror and it has been resolved 
    //it gives us a value

    //its rejected if it has not been fullfilled and it retrns an errror


    //a example of a romise

//     const mypromise=new Promise((resolve,reject)=>{
//         if(Math.random()>0){
//             resolve('hello am feeling happy');
//         }
//         reject(new error('i failed some times'));
//        } )
// console.log(mypromise)

//we can also set timeout to a promise:the time taken to execute the promise
//the syntax and set our time to one second
//let promise=newPromise(function(resolve,reject){
    //the function is excuted immediately the promise is constructed
    //after one second time the result is fullfilled and the result is done
//settimeout(()=>resolve('done'),1000);
//});
    //setTimeout(()=>resolve ('done'),1000);

//console.log(promise)

//that was a fullfilled promise

//promise =new promise((resolve,reject){

    //settimeout(()=>reject)
//})

//.then when the promise isfullfilled and the result is document
//.catch when the promise is an erp
// const promise1=()=>{ 
//     new Promise((resolve,reject)=>{
//     resolve(2)
// })}
// promise1.then((value)=>{
//     console.log(value)
// }).catch((err)=>{
//     console.log(err)
// })

