//                                    lightning
// 1. Build an object that represent an employee at the taco shop.
const tacoEmployee1 = {
    name: "Ted",
    startDate: "Aug 1",
    jobTitle: "cook",
    payRate: 16.50,
    favoriteTaco: "surf and turf taco",
    knownRecipes: ["tacos", "nachos", "mexican pizza", "guacamole", "burritos", "quesadillas"],
    learnNewMenuItem: function(newMenuItem){
        this.knownRecipes.push(newMenuItem)
    },
    makeTaco: function (tacoName){
        for(i=0;i<this.knownRecipes.length;i++){
            if(tacoName===this.knownRecipes[i]){
                console.log(`Here's your ${tacoName}`)
            }
        }
        
    }
}
const tacoEmployee2 = {
    name: "Tammy",
    startDate: "Aug 2",
    jobTitle: "register",
    payRate: 16.50,
}

const tacoEmployee3 = {
    name: "Joe",
    startDate: "Aug 3",
    jobTitle: "manager",
    payRate: 16.50,
}

tacoEmployee1.makeTaco("mexican pizza")

tacoEmployee1.learnNewMenuItem("beef taco")
tacoEmployee1.makeTaco("beef taco")


//                                  lightning
// --------- LIGHTNING EXERCISE --------------------------------//

// One of its properties should be called employees. This property should hold an array. Store the employee objects you created in the previous lightning exercise in this array.

// Your tacoShopStaff object should have a method called hireEmployee. It should take a parameter of a new employee and use the .push() method to add that new employee to the tacoShopStaff's array of employees.

// Your tacoShopStaff object should have another method called fireEveryone. It should reassign the employees array to be an empty array.

const tacoShopStaff = {
    employees: [tacoEmployee1, tacoEmployee2, tacoEmployee3],
    hireEmployee: function(newEmployee){
        this.employees.push(newEmployee)
    },
    fireEveryone: function(){
    this.employees = []
    }
}

tacoShopStaff.hireEmployee("Ross")
// console.log(tacoShopStaff.employees)
tacoShopStaff.fireEveryone()
console.log(tacoShopStaff.employees)

//                                    PRACTICES

const myPet = {
    name: "Wilfred",
    species: "woodchuck",
    nicknames: ["woodie", "deadman", "Evel"],
    age: 1,
    eatGrass: function(){
        console.log("Woodie's eating grass.")
    },
    digHole: function(){
        console.log("Woodie's diggin' up my yard.")
    },
    runAway: function(){
        console.log("Woodie's a scardy-cat.")
    },
    favoriteToy:[],
    play: function(toy){
        if(toy.includes("dirty")){
            this.favoriteToy.push(toy)
        }
    }
}
// woodchuck's activites
myPet.eatGrass()
myPet.digHole()
myPet.runAway()
// woodchuck's dirty toys to array
myPet.play("dirty frisbee")
console.log(myPet.favoriteToy)
myPet.play("clean frisbee")
console.log(myPet.favoriteToy)
myPet.play("dirty cup")
console.log(myPet.favoriteToy)




// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.

const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        return (this.orders.push(meal))
    },
    orders:[]
}

const chickenComboMeal = {
    sandwichType: "chicken sandwich",
    fries: true,
    drinkSize: "Large"
}
const burgerComboMeal = {
    sandwichType: "burger",
    fries: false,
    drinkSize: "Medium"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(burgerComboMeal)
// Invoke the function to return the list of all orders
console.log(restaurant.orders)

// Output all orders to the console using console.table()
console.table(restaurant.orders)