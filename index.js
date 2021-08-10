const returnFirstTwoDrivers = function(drivers) {
    const firstTwo = drivers.slice(0, 2);
    return firstTwo;
}

const returnLastTwoDrivers = function(drivers) {
    const lastTwo = drivers.slice(-2);
    return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return fare => fare * multiplier;
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, whichDrivers) {
    if (whichDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    } else if (whichDrivers === returnLastTwoDrivers) {
            return returnLastTwoDrivers(drivers);
        }
}
