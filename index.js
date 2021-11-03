const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const twodrivers = drivers.slice(0,2)
const twodriversb = drivers.slice(2,4)
const returnFirstTwoDrivers = () => {
    return twodrivers;
}
const returnLastTwoDrivers = () => {
    return twodriversb;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
    return function(fare) { 
        return fare * number;
    };
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(a, b) {
    if (b === returnFirstTwoDrivers) {
        return twodrivers;
    } else if (b === returnLastTwoDrivers) {
        return twodriversb;
    }
}