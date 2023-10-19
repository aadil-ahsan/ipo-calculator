// Simple Addition Calculator

// Btn Event Listener

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let num1 = document.getElementById("num1-in").value;
  let num2 = document.getElementById("num2-in").value;

  // Process
  let num1sq = num1 * num1;
  let num2sq = num2 * num2;
  let totalsq = num1sq + num2sq;
  let result = Math.sqrt(totalsq);

  // Output
  document.getElementById("output").innerHTML = result;
}
