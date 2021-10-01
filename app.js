const fs = require('fs');

const usersList = [
    {name: "Ann", gender: "female", age: 28},
    {name: "Katie", gender: "female", age: 18},
    {name: "Jessica", gender: "female", age: 23},
    {name: "Sarah", gender: "female", age: 17},
    {name: "Sophie", gender: "female", age: 21},
    {name: "John", gender: "male", age: 19},
    {name: "Ben", gender: "male", age: 28},
    {name: "Steve", gender: "male", age: 27},
    {name: "Matt", gender: "male", age: 16},
    {name: "Aaron", gender: "male", age: 32},
]

function createFiles(users) {
    for (const user of users) {
        if (user.gender === 'male' && user.age < 20) {
            fs.writeFile(`${__dirname}/manYounger20/${user.name}.txt`, `${user.name},${user.age}`, err => {
                if (err) {
                    console.log(err)
                }
            })
        }
        if (user.gender === 'male' && user.age > 20) {
            fs.writeFile(`${__dirname}/manOlder20/${user.name}.txt`, `${user.name},${user.age}`, err => {
                if (err) {
                    console.log(err)
                }
            })
        }
        if (user.gender === 'female' && user.age > 20) {
            fs.writeFile(`${__dirname}/womanOlder20/${user.name}.txt`, `${user.name},${user.age}`, err => {
                if (err) {
                    console.log(err)
                }
            })
        }
        if (user.gender === 'female' && user.age < 20) {
            fs.writeFile(`${__dirname}/womanYounger20/${user.name}.txt`, `${user.name},${user.age}`, err => {
                if (err) {
                    console.log(err)
                }
            })
        }
    }
}

createFiles(usersList)
