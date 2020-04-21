class Dog {
  constructor(dogInfo) {
    this.name = dogInfo.name;
    this.breed = dogInfo.breed
    this.energy = 3;
    this.hungry = false;
    this.toys = [];
    this.squeakyToys = [];
    this.friends = [];
    this.playfulFriends = [];
    this.inDogPark = false;
  }
  getToy(toys) {
    this.toys.push(toys);
  }
  findSqueakyToys() {
    for (var i = 0; i < this.toys.length; i++) {
      if (this.toys[i].squeaky === true) {
        this.squeakyToys.push(this.toys[i]);
      }
    }
    return this.squeakyToys
  }
  play(){
    this.energy--;
    if (this.energy <= 1) {
      this.hungry = true;
    }
  }
  eat() {
    this.hungry = false;
    return `I'm not ready to eat!`
  }
  makeFriends(friend) {
    this.friends.push(friend)
  }
  findFriendsToPlayWith() {
    for (var i = 0; i < this.friends.length; i++) {
      if (this.friends[i].energy === 3) {
        this.playfulFriends.push(this.friends[i])
      }
    }
    return this.playfulFriends
  }
  enterDogPark(cherryCreek) {
    this.inDogPark = true;
  }
  leaveDogPark(cherryCreek) {
    this.inDogPark = false;
  }
}

module.exports = Dog;
