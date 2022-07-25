interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());

  console.log(
    `Name: ${vehicle.name}, Year: ${vehicle.year}, Broken: ${vehicle.broken}`
  );
};

printVehicle(oldCivic);
