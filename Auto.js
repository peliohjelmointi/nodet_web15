class Auto{
    constructor(brand,model,year){
        this.brand = brand
        this.model = model
        this.year = year    
    }

    PrintInfo(){
        console.log(`Your car is ${this.brand} ${this.model} from year ${this.year}`)
    }
}

module.exports = Auto // {Auto}