//set数组去重

    function dedupe(array){
        return Array.from(new Set(array));
    }
    console.log(dedupe([1,3,3,2,1,1,4,2,5,6,4]))
    //[1,3,2,4,5,6]
