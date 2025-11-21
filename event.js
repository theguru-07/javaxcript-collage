// Print all prime numbers from 0 to 100 (primes start at 2)
const primes = [];

for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    const limit = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= limit; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) primes.push(num);
}

console.log('Primes from 0 to 100:', primes.join(', '));
