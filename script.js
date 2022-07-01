// var array = [1, 2, 10, 16];


// const double = []
// const newArray = array.forEach((num) =>{
//     double.push(num * 2);
// })

// console.log(double);

// // map, filter, reduce 

// //map

// const mapArray = array.map((num) => {
//     return `numero ${num * 5}`;
// })

// const mapArray2 = array.map(num => num % 2);

// console.log(mapArray);
// console.log(mapArray2);

// //filter

// const filterArray = array.filter(num => {
//     return num > 5;
// })

// console.log(filterArray)

// //reduce

// const reduceArray = array.reduce((accumulator, num) => {
//     return accumulator + num;
// }, 0);

// console.log(reduceArray)


// Complete the below questions using this array:
const array = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const user = array.username;
const eachArray = user.forEach(num => console.log(`${user}!`));

//Create an array using map that has all the usernames with a "? to each of the usernames


//Filter the array to only include users who are on team: red


//Find out the total score of all users using reduce

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})

  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
