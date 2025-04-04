class Person {
    constructor(name, age){
        this.name = name
        this.age = age      
    }

    PrintPersonInfo(){
        console.log(`${this.name} is ${this.age} old`)        
    }
}

const JP = new Person("JP", 30)
JP.PrintPersonInfo()
const Chrisu = new Person("Christian", 40)
Chrisu.PrintPersonInfo()
