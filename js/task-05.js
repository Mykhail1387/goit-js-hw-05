'use strict';

class Car {
    static getSpecs(car) {
        console.log('car:', car)
    }

    constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
        this.speed = speed;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
    }

    get Price() {
        return this.price;
    }

    set Price(price) {
        this.price = price;
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.speed = 0;
        this.isOn = false;
    }

    accelerate(speed) {
        if (this.isOn === true && this.maxSpeed >= this.speed + speed) {
            this.speed += speed;
        }
    }

    decelerate(speed) {
        if (this.speed - speed >= 0) {
            this.speed -= speed;
        }

    }

    drive(hours) {
        if (this.isOn === true) {
            this.distance += hours * this.speed;
        }
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000
//
//на самом деле показатель speed: 0, так как метод mustang.turnOff() - глушит авто и сбрасывает текущую скорость в 0.

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000