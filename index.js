// Code your solution in this file!


function logDriverNames(drivers){
  drivers.forEach(function(driver) {console.log(driver.name)});
}

function logDriversByHometown(drivers , location){
  drivers.forEach(function(driver) {
    if(driver.hometown === location){
    console.log(driver.name);}
  });
}

function driversByRevenue(drivers){
  let newDrivers = [...drivers]
  return newDrivers.sort(function (driver1 , driver2) {return (driver1.revenue - driver2.revenue) });
}

function driversByName(drivers){
  let newDrivers = [...drivers]
  return newDrivers.sort(function (driver1 , driver2) {return driver1.name.localeCompare( driver2.name) }) ;
}

const reduceRevenues = function (agg , el , i , arr){
  return agg+el.revenue
}

function totalRevenue(drivers) {
  return drivers.reduce(reduceRevenues , 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length;
}
