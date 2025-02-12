const coding = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby']

// coding.forEach( function (value){
//     console.log(value)
// })

// coding.forEach( (item) => {
//     console.log(item)
// })


// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

coding.forEach( (item, index , arr) => {
    //console.log(item, index, arr)
})

//using multiple objects

const myCoding = [
    {
        language : 'JavaScript',
        type : 'Frontend'
    },
    {
        language : 'Python',
        type : 'Backend'
    },
    {
        language : 'Java',
        type : 'Mobile'
    },
]

myCoding.forEach( (item) => {
    console.log(item.language);
})