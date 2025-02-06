let hamster = {
    stomach:[],
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster,
  };
  
  let lazy = {
    __proto__: hamster,
  };
  
  // 这只仓鼠找到了食物
  speedy.eat("apple");
  
  console.log( "speedy eat-----",speedy.stomach ); 
  
  // 这只仓鼠也找到了食物，为什么？请修复它。
  console.log( "lazy eat-------",lazy.stomach ); 





{
let hamster = {
     
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    stomach:[],
    __proto__: hamster,
  };
  
  let lazy = {
    stomach:[],
    __proto__: hamster,
  };
  
  // 这只仓鼠找到了食物
  speedy.eat("apple");
  
  console.log( "speedy eat-----",speedy.stomach ); 
  
  // 这只仓鼠也找到了食物，为什么？请修复它。
  console.log( "lazy eat-------",lazy.stomach ); 

}