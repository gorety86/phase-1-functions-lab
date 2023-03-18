function distanceFromHqInBlocks(distance) {
    if (distance > 42) {
        return(distance-42)
    }else {
        return (42-distance)
    }

}

function distanceFromHqInFeet(distance) {
    const blockInFeet = 264
    if (distance > 42) {
        return(distance-42) * blockInFeet
    }else {
        return (42-distance) * blockInFeet
    }
}

function distanceTravelledInFeet(start, destination) {
    const blockInFeet = 264
    const distance = Math.abs (destination - start) * blockInFeet;
    if (destination > start) {
    return (distance);
    }else{
        return (distance);
    }
}

function calculatesFarePrice(start, destination) {
    const blockInFeet = 264
    const distance = Math.abs (destination - start) * blockInFeet;
    let farePrice;
    if (distance <= 400) {
        farePrice = 0;
    }else if (distance > 400 && distance <= 2000) {
        farePrice = (distance - 400 ) * 0.02
    }else if (distance > 2000 && distance <= 2500) {
        farePrice = 25
    }else if (distance > 2500) {
        farePrice = "cannot travel that far";
    }
    return farePrice;
    }


