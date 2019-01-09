// Code your solution in this file!
const logDriverNames = drivers => { drivers.forEach(logName)}
const logName = driver => { console.log(driver.name)}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(driver => {
      if (driver.hometown === hometown) {
         logName(driver)
      }
   })
}

function driversByRevenue(drivers){
  let newDrivers = [...drivers]
  return newDrivers.sort((driver1, driver2) => {
    return driver1.revenue - driver2.revenue
  })
}

function driversByName(drivers){
  let newDrivers = [...drivers]
  return newDrivers.sort(sortByName)
}

function sortByName(a,b){
  return a.name.localeCompare(b.name)
}

function totalRevenue(drivers){
  let total = 0
  let totalArr = drivers.reduce(reduceDriverRev, [])
  totalArr.forEach(rev =>{ total += rev})
  return total
}

function reduceDriverRev(agg, el, i, arr){
  return [...agg, el.revenue]
}

function averageRevenue(drivers){
  let totalRev = totalRevenue(drivers)
  return totalRev / drivers.length
}
