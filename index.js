function logDriverNames(drivers) {
    drivers.forEach(function(driver) { console.log(driver.name) })
}

function logDriversByHometown(drivers, location) {
    drivers.filter(driver => driver.hometown === location).forEach(function(driver) {
        console.log(driver.name)
    })
}

function driversByRevenue(drivers) {
    return drivers.slice().sort((a, b) => { return a.revenue - b.revenue })
}

function driversByName(drivers) {
    return drivers.slice().sort((a, b) => { return a.name.localeCompare(b.name) })
}

function totalRevenue(drivers) {
    return drivers.reduce((total, driver) => { return total += driver.revenue}, 0)
}

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length
}