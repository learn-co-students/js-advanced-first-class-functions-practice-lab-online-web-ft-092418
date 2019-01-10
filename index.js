// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(obj) {console.log(obj["name"])})
}

function logDriversByHometown(drivers, hometown) {
  drivers.filter(function(obj) {return obj["hometown"] == hometown}).forEach(function(obj) {console.log(obj["name"])})
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(rev1, rev2) {
      return rev1["revenue"] - rev2["revenue"]})
}

function driversByName(drivers) {
  return drivers.slice().sort(function(rev1, rev2) {
    return rev1["name"].localeCompare(rev2["name"])
  })
}

function totalRevenue(drivers) {
  let revenue = 0;
  drivers.forEach(function(obj) {revenue += obj["revenue"]})
  return revenue
}

function averageRevenue(drivers){
  const total = totalRevenue(drivers)
  return total/drivers.length
}
