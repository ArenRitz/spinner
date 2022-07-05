const frames = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let interval = 200;
for (let i = 0; i < frames.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${frames[i]}  `);
  }, i * interval);
}




// for (let i in frames) {
// setTimeout(() => {
// process.stdout.write(`\r${i}  `);
// }, );




  // setTimeout(() => {
  //   process.stdout.write('\r|   ');
  // }, 100);
  
  // setTimeout(() => {
  //   process.stdout.write('\r/   ');
  // }, 300);
  
  // setTimeout(() => {
  //   process.stdout.write('\r-   ');
  // }, 500);
  
  // setTimeout(() => {
  //   process.stdout.write('\r\\   '); 
  // }, 700);

  // setTimeout(() => {
  //   process.stdout.write('\r|   ');
  // }, 900);
  
  // setTimeout(() => {
  //   process.stdout.write('\r/   ');
  // }, 1100);
  
  // setTimeout(() => {
  //   process.stdout.write('\r-   ');
  // }, 1300);
  
  // setTimeout(() => {
  //   process.stdout.write('\r\\   '); 
  // }, 1500);
  
  // setTimeout(() => {
  //   process.stdout.write('\r|   ');
  // }, 1700);
  




