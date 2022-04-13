// Utility Types
// Utility types transform existing types into another types
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo1 = {
    title: "organize desk",
    description: "clear clutter"
};
var todo2 = updateTodo(todo1, {
    description: "throw out trash"
});
var add1 = { city: "Cairo" };
var add2 = { city: "Dubai", street: "Sheikh Zayed Street" };
// 3. Readonly<Type>
// constructs a type with properties that can't be reassigned
var todo = {
    title: "Plan a trip",
    description: "Make a check-list of what to do"
};
var cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" }
};
// We can wrap it in a Partial utility to make properties optional
var cats2 = {
    miffy: { age: 10, breed: "Persian" },
    mordred: { age: 16, breed: "British Shorthair" }
};
var todo3 = {
    title: "Clean room",
    // description: "description",
    completed: false
};
var todoInfo = {
    title: "Pick up kids",
    //   createdAt: "25-4-2022",
    description: "Kindergarten closes at 5pm"
};
