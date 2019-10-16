'use strict';

// class Vehicle {
//   constructor(name, wheels) {
//     this.name = name;
//     this.wheels = wheels;
//   }

//   drive(){
//     return 'Moving Forward';
//   }

//   stop() {
//     return 'Stopping';
//   }
// };

const Vehicle = function(name, wheels) {
  this.name = name;
  this.wheels = wheels;
};

Vehicle.prototype.drive = () => {
  return 'Moving Forward';
};

Vehicle.prototype.stop = () => {
  return 'Stopping';
};



class Car extends Vehicle{
  constructor(name, wheels) {
    super(name, wheels);
  }
}



class Motorcycle extends Vehicle{
  constructor(name, wheels) {
    super(name, wheels);
  }

  wheelie() {
    return 'Wheee!';
  }
}

module.exports = {Car, Vehicle, Motorcycle};

