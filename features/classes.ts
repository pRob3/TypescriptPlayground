class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep! beep!');
  }
}

const vehicle = new Vehicle('pink');
// vehicle.honk(); // error: honk is protected
console.log(vehicle.color);

// class Car extends Vehicle {
//   private drive(): void {
//     console.log('vroom! vroom!');
//   }

//   startDrivingProcess(): void {
//     this.drive();
//     this.honk();
//   }
// }

// const car = new Car();
// car.startDrivingProcess();
