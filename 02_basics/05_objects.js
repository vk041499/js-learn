// Destructuring objects consists of breaking down the structure of an object into individual parts, and assigning them to variables in a more concise way.

const course = {
    name: "JavaScript",
    duration: "3 months",
    price: "999",
    courseInstrustor:"Hitesh Choudhary",
}

//console.log(course.courseInstrustor);

const {courseInstrustor: instructor} = course;

// console.log(courseInstrustor);
console.log(instructor);

// JSON using in destructuring..

// {
//     "name":"Vishal",
//     "age": 25,
//     "coursename": "JavaScript",

// }

[
    {},
    {},
    {
        "name":"Vishal",
        "age": 25,
        "coursename": "JavaScript",
    }
]

