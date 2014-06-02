// Follow these instructions, try to fill in the required code.
// The first one is done for you

// Make a Game Object
var Game = function(settings) {
	console.log( settings );
}

// Instantiate a monopoly instance of the Game Object
// and pass a variety of settings in via an Object Literal
var monopoly = new Game({
	name: 'Monopoly',
	min_players: 2
});


//-------------

// Make a Reptile Object
var Reptile = function(settings) {
    console.log(settings);
};


// Instantiate a frog instance of the Reptile Object
// and pass a variety of settings in via an Object Literal
var frog =new Reptile({
    name: 'Kermit',
    habitat: 'Lake Pleasant'
});

//-------------

// Make a Person Object that has several default properties
var Person = function(setting){
    
    this.setting = $.extend(
        {
            'arms': 2,
            'legs': 2,
            'eyes': 2
        },
            setting);
    
    console.log(this);
};
// Instantiate a student instance of the Person Object
// and pass a variety of settings in via an Object Literal
// These settings should have the ability to override any
// default settings
var student = new Person({
    name:"john",
    legs: 1,
    lastname: 'jim'
});











//-------------

// Make a Cart Object that has no default settings
var Cart = function() {

	this.items = {};

	// Make a method here called addItem(item, qty) that takes
	// two arguments (item and quantity). Calling this method
	// should interact with the items property already mentioned
    this.addItem = function(item, qty){
       
        // If the item is found
        if(this.items[item]){
            this.items[item] = this.items[item] + qty;    
        }
        else
        {
            // Add a new item to my list with an initial value
            this.items[item] =  qty;
            
        }
        
    };
};


// Instantiate a cart instance of the Cart Object (We won't
// pass in any settings and there wont be any default settings)
var myCart = new Cart();

// Call the addItem method of my_cart and pass in values
myCart.addItem('eggs', 12);
myCart.addItem('milk', 2);
myCart.addItem('eggs', 6);

// Comment in this line of code to check your work
console.log( myCart );



// KATA 1. 
// 1. Make a Bug Object that has default settings 
//      (x=0,y=0, color, legs)
// 2. Add a Console.log(settings) in Bug
// 3. Add a method to move(x,y)
//      Update the location to a new location
var Bug = function(settings){

    this.settings = $.extend({
        x:0,
        y:0,
        color:'black',
        legs:6
    }, settings);

    console.log(this.settings);

    this.move = function(x,y){
        this.settings.x = x;
        this.settings.y = y;
    };

};

//
// Instatiate a new Grasshopper and pass settings for
// (legs and anything else you want)
// 1. Call move(2,3)
// 2. Console out Grasshopper 
var grassHopper = new Bug({
    color:'green',
    name:'Jimminy'
});

grassHopper.move(2,3);

console.log(grassHopper);










// KATA 2. 
// 1. Make a Game Object that has default settings 
//      (title, startTime, participantCount=0)
// 2. Add a method called add(qty)
//      Update the number of participants
//
// Instatiate a new Monopoly Game and pass settings for
// (title and anything else you want)
// 1. Call add(2)
// 2. Console out Monopoly
















