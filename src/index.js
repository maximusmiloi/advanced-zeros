module.exports = function getZerosCount(number, base) {
  // your implementation
  function inc(obj, key) {
    if (!obj[key]) {
      obj[key] = 0;
    }
    obj[key]++;
  }
  
  function getPrimeFactors(num) {
    var primeFactors = {};
    while (num % 2 === 0) {
      inc(primeFactors, 2);
      num = num / 2;
    }
  
    var sqrtNum = Math.sqrt(num);
    for (var i = 3; i <= sqrtNum; i++) {
      while (num % i === 0) {
        inc(primeFactors, i);
        num = num / i;
      }
    }
  
    if (num > 2) {
      inc(primeFactors, num);
    }
    return primeFactors;
  }
  const primes = getPrimeFactors(base);
  let count = [];
  Object.keys(primes).map(v => parseInt(v)).forEach(prime => {
    let sum = 0;
    let value = prime;
    while (value <= number) {
      sum += Math.floor(number / value);
      value *= prime;
    }
    count.push(Math.floor(sum / primes[prime]));
  });

  return Math.min(...count);
}