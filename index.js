// Code your solution here
function findMatching(names, string) {
    let list = [];
    for (let name of names) {
        if (name === string) {
            list.push(name);
        }
    }
    return list;
}

function fuzzyMatch(drivers, string) {
    let list = [];
    for (let driver of drivers) {
        if (driver[0] === string[0]) {
            list.push(driver);
        }
    }
    return list;
}

function matchName(drivers, string) {
    let list = [];
    for (let driver of drivers) {
        if (driver.name === string) {
            list.push(driver);
        }
    }
    return list;
}
