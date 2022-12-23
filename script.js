function validCard(num) {
    let sum = 0;

    while (num > 0) {
        let x = num % 10;
        num = Math.floor(num / 10);

        let y = (num % 10) * 2;
        num = Math.floor(num / 10);

        if (y > 9) {
            y -= 9;
        }

        sum += x + y;
    }

    return sum % 10 == 0;
}

console.log(validCard(1234567890123456)) //should be false
console.log(validCard(4408041234567893)) //should be true
console.log(validCard(38520000023237)) //should be true
console.log(validCard(4222222222222)) //should be true