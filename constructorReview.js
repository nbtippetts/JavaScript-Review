//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

var Animal = function(species, name, legs, color, food){
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = this.food;
  this.eat = function(){
    console.log(this.name + ' ate ' + food);
  }
}
Animal.prototype.food = ['Meat', 'pig', 'all of the food'];



//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  var person = function(name, age, height, gender){
    return{
      name: name,
      age: age,
      height: height,
      gender: gender
    }
  }


//Create a animal array and a person array.

  var animal = []
  var person = []


//Create two instances of Animal and push those into your animal array

  var tiger = new Animal('cat', 'Tiger', 4, 'Orange Black', 'Meat')
  var wolf = new Animal('dog', 'Wolf', 4, 'gray', 'pig')
  animal.push(tiger, wolf)


//Create two instances of person and push those into your person array.

  var user1 = new person('Noah', 20, '5,9', 'Male')
  var user2 = new person('kelsie', 21, '5,5', 'Female')
  person.push(user1, user2)


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  tiger.eat();
  wolf.eat();


//At this point, if we wanted to add something to every istance of person could we?

  //No, because we have no prototype for person.



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/
