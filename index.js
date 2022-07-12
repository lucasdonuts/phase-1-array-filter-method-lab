function findMatching(driverNames, string) {
  return driverNames.filter(name => name.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(driverNames, string) {
  return driverNames.filter(name => name.toLowerCase().startsWith(string.toLowerCase()));
}

function matchName(driverObjects, string) {
  return driverObjects.filter(driver => driver.name.toLowerCase() === string.toLowerCase());
}