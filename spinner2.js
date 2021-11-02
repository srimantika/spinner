let timer = 0;
let spinnerArray = ['|', '/', '-', '\\','|'];
let i = 1;
let x = 200;
while (i <= 2) {

  for (let element of spinnerArray) {

    setTimeout(() => {
      process.stdout.write(`\r ${element}   `);
    }, timer + x);

    timer = timer + 200;
  }

  timer = 900;
  i = i + 1;
}

setTimeout(() => {
  console.log("");
}, timer + 1000);
