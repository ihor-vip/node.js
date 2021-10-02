const fs = require('fs');
const path = require('path');

const users = [
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

const manOlder20 = path.join(__dirname, 'users', 'manOlder20');
const manYounger20 = path.join(__dirname, 'users', 'manYounger20');
const womanOlder20 = path.join(__dirname, 'users', 'womanOlder20');
const womanYounger20 = path.join(__dirname, 'users', 'womanYounger20');


fs.mkdir(path.join(__dirname, 'manOlder20'), {recursive: true}, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    fs.mkdir(path.join(__dirname, 'manYounger20'), {recursive: true}, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        fs.mkdir(path.join(__dirname, 'womanOlder20'), {recursive: true}, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            fs.mkdir(path.join(__dirname, 'womanYounger20'), {recursive: true}, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });
    });
});

for (const user of users) {
    if (user.age > 20 && user.gender === "male") {
        fs.writeFile(path.join(__dirname, 'manOlder20', `${user.name}.txt`), `${user.name}, ${user.age}`, (err) => {
            if (err) {
                console.log(err);
            }
        })
    }
    if (user.age < 20 && user.gender === "male") {
        fs.writeFile(path.join(__dirname, 'manYounger20', `${user.name}.txt`), `${user.name}, ${user.age}`, (err) => {
            if (err) {
                console.log(err);
            }
        })
    }
    if (user.age > 20 && user.gender === "female") {
        fs.writeFile(path.join(__dirname, 'womanOlder20', `${user.name}.txt`), `${user.name},  ${user.age}`, (err) => {
            if (err) {
                console.log(err);
            }
        })
    }

    if (user.age < 20 && user.gender === "female") {
        fs.writeFile(path.join(__dirname, 'womanYounger20', `${user.name}.txt`), `${user.name},  ${user.age}`, (err) => {
            if (err) {
                console.log(err);
            }
        })
    }
}
