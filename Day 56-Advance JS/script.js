class Golgappe {
    constructor(typeofPlate,typeofBall,taste,howMuch) {
        this.Plate= typeofPlate,
        this.GolGappe=typeofBall,
        this.KaisaKhaoge=taste,
        this.KitnaKhaoge=howMuch
    }
}

Golgappe.prototype.mastThebhai = function(){
    console.log("Mast The Bhai")
}

let Customer1 = new Golgappe('Steel','Atta','Spicy','40')
