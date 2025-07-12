const arg = process.argv[2];
const num = Number(arg);

if (!isNaN(num)) {
  console.log(`My number: ${parseInt(num)}`);
} else {
  console.log('Not a number');
}