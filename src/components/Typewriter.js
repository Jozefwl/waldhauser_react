var i = 0;
var speed = 20; //delay in ms

function sleep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, speed);
  });
}
async function typeWriter(text) {
  //async function https://javascript.info/async-await
  for (i = 0; i < text.length; i++) {
    //iterates through entire string length
    document.getElementById("typing").innerHTML += text.charAt(i); //places character from string's i position
    await sleep();
  }
}

export { typeWriter };
