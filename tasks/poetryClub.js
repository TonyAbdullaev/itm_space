export function frontDoorResponse(line) {
    return line[0];
}

export function frontDoorPassword(word) {
    const [firstLetter, ...restLetter] = word;
    const rest = restLetter.join("").toLowerCase();
    return firstLetter.toUpperCase() + rest;
}

export function backDoorResponse(line) {
    return line.trim()[line.length - 1];
}

export function backDoorPassword(word) {
    return frontDoorPassword(word) + ", please"

}
