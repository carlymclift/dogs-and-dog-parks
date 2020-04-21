class DogPark {
  constructor(name) {
    this.name = name;
    this.dogs = [];
  }
  addDog(sophie) {
    this.dogs.push(sophie)
  }
  removeDog(toph) {
    this.dogs.splice(1, 1)
  }
}

module.exports = DogPark;
