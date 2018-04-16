class Person{
  constructor(name='Anonymous',age=0){
    this.name=name;
    this.age=age;
  }
  getGreeting(){
    return `Hi i am ${this.name}.`;
  }
  getDescription(){
    return `${this.name} is ${this.age} years old.`
  }
}

class Traveler extends Person{
  constructor(name,age,hLoc){
    super(name,age);
    this.hLoc=hLoc;
  }
   hasLoc(){
    return !!this.hLoc;
  }
  getGreeting(){
    let greeting=super.getGreeting();
    if(this.hasLoc())
     greeting+=` I'm travelling from ${this.hLoc}.`
    return greeting;
    
  }

}

const me=new Traveler('Himanshu',21,'Jamshedpur');
const an=new Traveler();
const ys=new Traveler('Yashwanth',19,'Delhi');
console.log(me.getGreeting());
console.log(an.getGreeting());
console.log(ys.getGreeting());