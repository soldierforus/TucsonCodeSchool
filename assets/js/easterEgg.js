var counter = 0;

function easterEgg(){

  if (counter === 4) {
    window.location.href = 'egg.html';
  }
  else {
    counter ++;
    console.log(counter);
  }
}
// document.getElementById("myBtn").addEventListener("click", console.log("click"),easterEgg());
