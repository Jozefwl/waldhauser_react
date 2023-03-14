var i = 0;
var text = ".waldhauser_"; //string to 'write'
var speed = 80; //delay in ms

function sleep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, speed);
  });
}
async function typeWriter() {
  //async function https://javascript.info/async-await
  for (i = 0; i < text.length; i++) {
    //iterates through entire string length
    document.getElementById("typing").innerHTML += text.charAt(i); //places character from string's i position
    await sleep();
  }
}

export { typeWriter };
