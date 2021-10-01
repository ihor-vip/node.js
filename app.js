const fs = require('fs');
const path = require('path');
const folderGirls = path.join(__dirname, 'users', 'girls');
const folderBoys = path.join(__dirname, 'users', 'boys');
const steve = path.join(folderBoys, 'steve.txt');
const sophie = path.join(folderBoys, 'sophie.txt');
const jessica = path.join(folderBoys, 'jessica.txt');
const kate = path.join(folderGirls, 'kate.txt');
const john = path.join(folderGirls, 'john.txt');
const matt = path.join(folderGirls, 'matt.txt');


fs.mkdir(folderGirls, {recursive: true}, err => {
    console.log(err);
})
fs.mkdir(folderBoys, {recursive: true}, err => {
    console.log(err);
})

const user_Steve = {
    name: "Steve",
    gender: "male"
}
const user_Sophie = {
    name: "Sophie",
    gender: "female"
}
const user_Jessica = {
    name: "Jessica",
    gender: "female"
}
const user_Kate = {
    name: "Kate",
    gender: "female"
}
const user_John = {
    name: "John",
    gender: "male"
}
const user_Matt = {
    name: "Matt",
    gender: "male"
}


fs.appendFile(kate, `${(JSON.stringify(user_Kate))}`, err => {
    console.log(err);
})
fs.appendFile(john, `${(JSON.stringify(user_John))}`, err => {
    console.log(err);
})
fs.appendFile(matt, `${(JSON.stringify(user_Matt))}`, err => {
    console.log(err);
})
fs.appendFile(steve, `${(JSON.stringify(user_Steve))}`, err => {
    console.log(err)
})
fs.appendFile(sophie, `${(JSON.stringify(user_Sophie))}`, err => {
    console.log(err)
})
fs.appendFile(jessica, `${(JSON.stringify(user_Jessica))}`, err => {
    console.log(err)
})

fs.readdir(folderGirls, (err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    files.forEach(file => {
        fs.readFile(path.join(folderGirls, file), (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            const info = data.toString()
            if (!(info.match('female'))) {
                fs.rename(path.join(folderGirls, file), path.join(folderBoys, file), err => {
                    if (err) {
                        console.log(err);
                    }
                })
            }
        })
    })
})

fs.readdir(folderBoys, (err, files) => {
    if(err){
        console.log(err);
        return;
    }
    files.forEach(file=>{
        fs.readFile(path.join(folderBoys,file), (err, data) => {
            if(err){
                console.log(err);
                return;
            }
            const info = data.toString();
            if(info.match('female')){
                fs.rename(path.join(folderBoys, file), path.join(folderGirls, file), err =>{
                    if (err){
                        console.log(err);
                    }
                } )
            }
        })
    })
})




