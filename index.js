// Code your solution in this file!

function logDriverNames(drivers){
    drivers.forEach(function(driver){
        console.log(driver.name)
    })
    console.log('--------------')
}


function logDriversByHometown(drivers, hometown){
    // let newDrivers = []
    
    
    drivers.forEach(function(driver){
        if (driver.hometown.toLowerCase() === hometown.toLowerCase()) {
            console.log(driver.name)
        }
    })
    console.log('--------')
}



function driversByRevenue(drivers){

    let newArr = [...drivers]
    console.log('unsorted', newArr)
    
    
    newArr.sort(function(a, b){
        return a.revenue - b.revenue
    })
    
    
    console.log(`sorted drivers`, newArr)
    console.log('--------')
    return newArr 
}

function driversByName(drivers){
    console.log('drivers')
    console.table(drivers)
    
    let newArr = [...drivers]


    const comparator = function (a, b){
        return a.name.localeCompare(b.name) 
    }

    newArr.sort(comparator)

    console.log('new Arr')
    console.table(newArr)

    console.log('-----')
    console.log('-----')
    console.log('-----')
    return newArr
}





const reduceDriverRevenue = function (agg, el, i, arr){
    return agg + el.revenue
}

function totalRevenue(drivers){
    return drivers.reduce(reduceDriverRevenue, 0)
}

function averageRevenue(drivers){
    let total = totalRevenue(drivers)

    return total / drivers.length
}