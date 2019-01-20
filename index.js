// Code your solution in this file!
const logDriverNames = function(driverArray) {
    driverArray.forEach(function(driver) {
        console.log(driver.name);
    });
}

const logDriversByHometown = function(driverArray, location) {
    driverArray.forEach(function(driver) {
        if (driver.hometown === location) {
            console.log(driver.name);
        }
    });
}

const driversByRevenue = function(driverArray) {
    return driverArray.slice().sort(function(driverA, driverB) {
        return driverA.revenue - driverB.revenue;
    });
}

const driversByName = function(driverArray) {
    return driverArray.slice().sort(function(driverA, driverB) {
        return driverA.name.localeCompare(driverB.name);
    });
}

const totalRevenue = function(driverArray) {
    return driverArray.reduce(function(revenue, driver) {
        return driver.revenue + revenue;
    }, 0);
}

const averageRevenue = function(driverArray) {
    let total = totalRevenue(driverArray)

    return total / driverArray.length;
}