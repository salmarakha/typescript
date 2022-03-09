// TYPE DEFINITIONS
// variables
var mood = "happy";
var score = 5;
// score = "6" // compiler error
var values = ["foo", "bar"]; // array
var colors = ['#ff0000', '#00ff00', '#0000ff']; // tuple (fixed size and data types)
// functions 
var getFullname = function (firstname, lastname) {
    return firstname + " " + lastname;
};
console.log(getFullname("Salma", "Rakha"));
// UNION 
// union is used as 'OR' but not in a logical way
var color = null; // default null (always use a default value instead of undefined)
// allow arrays to accept multiple types
var user = ["Ben", 18];
var myColor = ['#ff0000', '#00ff00', '#0000ff'];
// TYPE ALIAS + UNION
var colour = null;
