const PreparationMinutesPerLayer = 2;

export const ExpectedMinutesInOven = 40;

export function remainingMinutesInOven(actualMinutesInOven) {
    return ExpectedMinutesInOven - actualMinutesInOven;
}

export function preparationTimeInMinutes(numberOfLayers) {
    return numberOfLayers * PreparationMinutesPerLayer;
}

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
    return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven
}
