const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
//carMakers.push(100); // Error
carMakers.push('volvo');

// Help with 'map'
carMakers.map((car: string): string => {
  // When we specify type we get string autofill suggestions
  return car.toLowerCase();
});

// Flexible types (still avoid using any)
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2069-05-10');
importantDates.push(new Date());
//importantDates.push(100); // Error
