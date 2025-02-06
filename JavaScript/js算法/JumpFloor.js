function JumpFloor(target) {
    //let sum=0;
    //let number=1;
    //let number2=2;
    if (target == 1) {
        return 1;
    }
    if (target == 2) {
        return 2;
    } else {
        //递归算法，效率很低，target==50卡死
        return JumpFloor(target - 1) + JumpFloor(target - 2);


        //迭代算法
        //for (var i=3;i<=target;++i){
        //  sum=number1+number2;
        //  number1=number2;
        //  number2=sum;   
        //}

        //尾递归算法
    }
    //return target；
}
console.log("青蛙一共有" + JumpFloor(20) + "种跳法");