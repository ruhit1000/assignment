function describeValue (value) {
    let valueType = null;

    if (value) {
        valueType = 'truthy'
    } else {
        valueType = 'falsy'
    }

    return `${typeof value} | ${valueType}`;
}


function getDayType (day) {
    const dayName = day.toLowerCase()

    if (dayName === 'friday' || dayName === 'saturday') {
        return "Weekend"
    } else if (
        dayName === 'sunday' ||
        dayName === 'monday' ||
        dayName === 'tuesday' ||
        dayName === 'wednesday' ||
        dayName === 'thursday'
    ) {
        return "Working Day"
    } else {
        return "Invalid Day"
    }
}


function validateUsername (userName) {
    if (userName.length < 4) {
        return "Too Short"
    } else if (userName.split('').includes(' ')) {
        return "No Space Allowed"
    } else if (userName.toLowerCase().includes('admin')){
        return "Reserved Word"
    } else {
        return "Available"
    }
    
}


function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    const waitingMinutesCharge = waitingMinutes * 2
    let totalFare = 50 + waitingMinutesCharge;

    if (distance > 2) {
        totalFare = totalFare + ((distance - 2) * 15)
    }

    return isNight ? totalFare * (1 + 20 / 100) : totalFare
}


