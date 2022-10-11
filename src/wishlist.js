import { Car } from "./car";

export class WishList {
    list = [];
    nextId = 0;
    add (make, model, year) {
        let newCar = new Car(++this.nextId, make, model, year);
        this.list.push(newCar);
    }
    remove (carId) {
        for (let car of this.list) {
            if (car.id == carId) {
                let rmvIndex = this.list.indexOf(car);
                this.list.splice(rmvIndex, 1);
            }
        }
    }
}