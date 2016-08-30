//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
var guests = prompt("Please enter number of guests");
var donuts = prompt("Please enter number of donuts");
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.
parseInt(guests);
parseInt(donuts);
//write a conditional to check if there are enough donuts
if (guests > donuts) {
  alert("Not enough donuts!");
} else {
    alert(`There are ${guests} guests and ${donuts} donuts -- enough for everyone!`);
}
  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
