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

// Instantiate a frog instance of the Reptile Object
// and pass a variety of settings in via an Object Literal


//-------------

// Make a Person Object that has several default properties

// Instantiate a student instance of the Person Object
// and pass a variety of settings in via an Object Literal
// These settings should have the ability to override any
// default settings


//-------------

// Make a Cart Object that has no default settings
var Cart = function() {

	this.items = {};

	// Make a method here called addItem(item, qty) that takes
	// two arguments (item and quantity). Calling this method
	// should interact with the items property already mentioned

}


// Instantiate a cart instance of the Cart Object (We won't
// pass in any settings and there wont be any default settings)
var myCart = new Cart();

// Call the addItem method of my_cart and pass in values


// Comment in this line of code to check your work
//console.log( myCart.items );
