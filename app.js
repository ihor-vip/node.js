const fs = require('fs');
const path = require('path');

const folderGirls = path.join(__dirname, 'girls');
const folderBoys = path.join(__dirname, 'boys');

const jessica = path.join(folderBoys, 'jessica.txt');
const steve = path.join(folderBoys, 'steve.txt');
const sophie = path.join(folderBoys, 'sophie.txt');
const john = path.join(folderGirls, 'john.txt');
const kate = path.join(folderGirls, 'kate.txt');
const matt = path.join(folderGirls, 'matt.txt');

fs.mkdir(folderGirls, {recursive: true}, err => {
    console.log(err);
});
fs.mkdir(folderBoys, {recursive: true}, err => {
    console.log(err);
});

const user_Steve = {
    name: "Steve",
    gender: "male"
};
const user_Sophie = {
    name: "Sophie",
    gender: "female"
};
const user_Jessica = {
    name: "Jessica",
    gender: "female"
};
const user_Kate = {
    name: "Kate",
    gender: "female"
};
const user_John = {
    name: "John",
    gender: "male"
};
const user_Matt = {
    name: "Matt",
    gender: "male"
};

fs.writeFile(kate, JSON.stringify(user_Kate), err => {
    console.log(err);
});
fs.writeFile(john, JSON.stringify(user_John), err => {
    console.log(err);
});
fs.writeFile(matt, JSON.stringify(user_Matt), err => {
    console.log(err);
});
fs.writeFile(steve, JSON.stringify(user_Steve), err => {
    console.log(err)
});
fs.writeFile(sophie, JSON.stringify(user_Sophie), err => {
    console.log(err)
});
fs.writeFile(jessica, JSON.stringify(user_Jessica), err => {
    console.log(err)
});

const sort = (oldPath, gender, newPath) => {
    fs.readdir(oldPath, (err, files) => {
        if (err) {
            console.log(err);
            return;
        }

        files.forEach(file => {
            fs.readFile(path.join(oldPath, file), (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }

                let userGender = JSON.parse(data.toString()).gender;
                if (userGender === gender) {
                    fs.rename(path.join(oldPath, file), path.join(newPath, file), (err) => {
                        console.log(err);
                    });
                }
            });
        });
    });
}

sort('girls', 'male', folderBoys);
sort('boys', 'female', folderGirls);



