// Utility Types
// Utility types transform existing types into another types

// 1. Partial<T>
// this utitlity type will represent all subsets of a given type
interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
    title: "organize desk",
    description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
    description: "throw out trash",
});

// 2. Required<Type>
// constructs a type that must contain all fields of a given type (the opposite of Partial)
interface IAddress {
    city?: string,
    street?: string
}

const add1: IAddress = { city: "Cairo" };
const add2: Required<IAddress> = { city: "Dubai", street: "Sheikh Zayed Street" };

// 3. Readonly<Type>
// constructs a type with properties that can't be reassigned
const todo: Readonly<Todo> = {
    title: "Plan a trip",
    description: "Make a check-list of what to do"
}
// todo.description = "Anything"; 

// 4. Record<Keys, Type>
// both Keys and Types are types
// Constructs an object type whose property keys are Keys and whose property values are Type.
// This utility can be used to map the properties of a type to another type.
interface CatInfo {
    age: number;
    breed: string;
}

// The keys type must be a union of string number or symbol: 'string | number | symbol'
type CatName = "miffy" | "boris" | "mordred"; 

const cats:Record<CatName, CatInfo> = {     // cats must contain all Keys
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};

// We can wrap it in a Partial utility to make properties optional
const cats2: Partial<Record<CatName, CatInfo>> = {
    miffy: { age: 10, breed: "Persian" },
    mordred: { age: 16, breed: "British Shorthair" },
};

// 5. Pick<Type, Keys>
// Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
interface ITodo {
    title: string;
    description: string;
    completed: boolean;
    createdAt?: string;
}

type TodoPreview = Pick<ITodo, "title" | "completed">;

const todo3: TodoPreview = {
    title: "Clean room",
    // description: "description",
    completed: false,
};

// 6. Omit<Type, Keys>
// Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals).
type TodoInfo = Omit<ITodo, "completed" | "createdAt">;
 
const todoInfo: TodoInfo = {
  title: "Pick up kids",
//   createdAt: "25-4-2022",
  description: "Kindergarten closes at 5pm",
};

// 7. Exclude<UnionType, ExcludedMembers>
// Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.
type T0 = Exclude<"a" | "b" | "c", "a">;
     
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
     
type T2 = Exclude<string | number | (() => void), Function>;

// 8. Extract<Type, Union>
// Constructs a type by extracting from Type all union members that are assignable to Union.
type T3 = Extract<"a" | "b" | "c", "a" | "f">;
     
type T4 = Extract<string | number | (() => void), Function>;

// 9. NonNullable<Type>
// Constructs a type by excluding null and undefined from Type.
type T5 = NonNullable<string | number | undefined>;
     
type T6 = NonNullable<string[] | null | undefined>;