// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map ( driver => driver.toLowerCase());
}

function nameToAttributes(drivers) {
  return drivers.map ( function (driver) {
    names = driver.split(" ")
    return Object.assign({}, {firstName: names[0]}, {lastName: names[1]} )
  });
}
