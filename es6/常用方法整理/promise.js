new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve("成功")；
        reject("失败");
    },1000);
}).then(//接受成功回调
        value=>{
            console.log('onResolved()1,'+value);
        }
    ).catch(//接受失败回调
        reason=>{
            console.log("onRejected()1,"+reason)
        }
   )