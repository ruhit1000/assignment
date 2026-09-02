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

console.log(getDayType('Monday'))