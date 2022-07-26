class Vehicle {
  protected honk(): void {
    console.log('beep! beep!');
  }
}

const vehicle = new Vehicle();
// vehicle.honk(); // error: honk is protected

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom! vroom!');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.startDrivingProcess();
