class Vehicle {
  drive(): void {
    console.log('honk! honk!');
  }
  honk(): void {
    console.log('beep! beep!');
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
