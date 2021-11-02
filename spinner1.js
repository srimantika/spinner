//process.stdout.write('hello from spinner1.js... \rheyyy\n');
let timer = 0;
let i = 1;
while (i <= 2) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, timer + 100);

  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, timer + 300);

  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, timer + 500);

  setTimeout(() => {
  // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   ');
  }, timer + 700);

  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, timer + 900);

  timer = 900;
  i = i + 1;
}

setTimeout(() => {
  console.log("");
}, timer + 950);
