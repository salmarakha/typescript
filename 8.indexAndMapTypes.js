// We sometimes refer to index types as lookup types. (lookup types is common)
var list1 = {
    id: 15,
    title: 'Something'
};
// this function returns the value of the passed property of an object
function getProperty(object, property) {
    return object[property];
}
// When we use our  getProperty, the compiler checks if a string that we pass into it is an actual property of an object.
// const value = getProperty(list1, 'property');
var value1 = getProperty(list1, 'title');
// When we return  object[property], the TypeScript compiler performs a type lookup. => User[property] 
// Thanks to that, the return type of the  getProperty varies based on the passed string.
// getProperty(list1, 'id').toLowerCase(); // Property 'toLowerCase' does not exist on type 'number'.
getProperty(list1, 'title').toLowerCase();
// 2. Creating a Map from an object
// A real-life example of the above might be converting an object to a Map. 
/* The Map object holds key-value pairs and remembers the original insertion order of the keys.
    Any value (both objects and primitive values) may be used as either a key or a value. */
// TypeScript aside, the most straightforward way to do this is to use Object.entries.
