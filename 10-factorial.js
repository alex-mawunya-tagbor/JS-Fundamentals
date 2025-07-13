function factorial(n) {
    n = parseInt(n);
    if (isNaN(n)) {
    return 1;
    }
    if (n <= 1) {
    return 1;
    }
    return n * factorial(n - 1);
}

const input = process.argv[2];
const result = factorial(input);
console.log(`Factorial of ${input} is: ${result}`);
