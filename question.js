const userData = [
    {
        id: '111',
        name: 'Peter',
        favorites: {
            food: ['burgers', 'pizza'],
            activites: ['basketball', "baseball"]
        },
    },
    {
        id: '222',
        name: 'John',
        favorites: {
            food: ['burgers', 'tacos'],
            activites: ['football', "golf"]
        },
    },
    {
        id: '333',
        name: 'Mary',
        favorites: {
            food: ['pizza', 'tacos', 'fried chicken'],
            activites: ['volleyball', "softball"]
        },
    }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const userMapped = userData.map(obj => {
    const newUserObj = {};

    newUserObj.id = obj.id;

    newUserObj.favoriteFoods = obj.favorites.food.length;

    return newUserObj;
})
console.log("new user mapped:", userMapped);

////////////////////
// EXTRA CREDIT:
///////////////////

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const userReducer = userData.reduce((userArr, mainArr) => {
    if (mainArr.favorites.food.includes('pizza')) {
        userArr.push(mainArr.name)
    }
    return userArr;
}, []);

console.log("user:", userReducer);


// 7. Show us an example of a switch statement being used
let x = 'johnny';

switch (x) {
    case "z":
        console.log("zero");
        break;

    case 'johnny':
        console.log("my name");
        break;
    default:
        break;
}