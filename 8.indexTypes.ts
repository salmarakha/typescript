// 1. Index Type
interface List {
    id: number;
    title: string;
}
// They look the same as accessing a property of an object but refer to types.
type IdType = List['id']; // number
// We sometimes refer to index types as lookup types. (lookup types is common)

const list1: List = {
    id: 15,
    title: 'Something'
};

// this function returns the value of the passed property of an object
function getProperty<ObjectType, KeyType extends keyof ObjectType>( // 'id' | 'title'
    object: ObjectType,
    property: KeyType
): ObjectType[KeyType] {
    return object[property];
}

// When we use our  getProperty, the compiler checks if a string that we pass into it is an actual property of an object.
// const value = getProperty(list1, 'property');
const value1 = getProperty(list1, 'title'); // "something"

// When we return  object[property], the TypeScript compiler performs a type lookup. => User[property] 
// Thanks to that, the return type of the  getProperty varies based on the passed string.
// getProperty(list1, 'id').toLowerCase(); // Property 'toLowerCase' does not exist on type 'number'.
getProperty(list1, 'title').toLowerCase();

