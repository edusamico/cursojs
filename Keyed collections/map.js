function getAdmins (map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const users = new Map();

users.set('Du', 'user');
users.set('Dudu', 'user');
users.set('Edu', 'Admin');

console.log(getAdmins (users));