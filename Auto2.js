export class Auto{ // export-sanalla kerrotaan, että luokkaan on mahdollista päästä toisesta moduulista
    constructor(brand,model,year){
        this.brand = brand
        this.model = model
        this.year = year    
    }

    PrintInfo(){
        console.log(`Your car is ${this.brand} ${this.model} from year ${this.year}`)
    }
}


