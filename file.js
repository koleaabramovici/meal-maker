let menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],

    get appetizers() {
      return this._appetizers;
    },
    set appetizers(app){
      this._appetizers = app;
    },
    get mains() {
      return this._mains;
    },
    set mains(man){
      this._mains = man;
    },
    get desserts() {
      return this._desserts;
    },
    set desserts(dess){
      this._desserts = dess;
    },
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    };
  },
  addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice
      };
      this._courses[courseName].push(dish)
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    let j = Math.floor(Math.random() * dishes.length);
    return dishes[j];
  },
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    const cash = appetizer.price + main.price + dessert.price;
    return `First we will have the ${appetizer.name} for appetizer, then for the main ${main.name} and from the desserts we gonna have ${dessert.name} and the total price for this will be ${cash}.`
  }
}

menu.addDishToCourse('appetizers', 'Fries', 2.50);
menu.addDishToCourse('appetizers','Gruel', 3.00);
menu.addDishToCourse('appetizers', 'Croissants', 2.75);
menu.addDishToCourse('mains', 'Cheeseburger', 4.50);
menu.addDishToCourse('mains', 'Mushroom soup', 5.00);
menu.addDishToCourse('mains', 'Chicken Steak', 9.50);
menu.addDishToCourse('desserts', 'Banana Pancakes', 4.00);
menu.addDishToCourse('desserts', 'Blueberry Cake', 5.50);
menu.addDishToCourse('desserts', 'Russian Napoleon', 4.20);

const meal = menu.generateRandomMeal();
console.log(meal);
