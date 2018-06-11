module.exports.add=(a,b,callback)=>{
    setTimeout(()=>{
       return callback(a+b);
    },1000);
    
}