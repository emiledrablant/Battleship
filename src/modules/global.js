
// Generates an array of numbers to randomize placement of ships.
function randomNumbers() {
    let min = 0;
    let max = 9;
    let result = [];

    for (let i = 0; i < 3; i++) {
        let n = Math.floor(Math.random() * (max - min + 1)) + min;
        result.push(n);
    }
    return result;
}

export { randomNumbers };