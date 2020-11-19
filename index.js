let t0 = [];
let t1 = [];
let t2 = [];
let t3 = [];
let t4 = [];

let n = 4;
let x = 3;

function addRow() {
  let scoreTable = document.getElementById('scores');
  let row = scoreTable.insertRow(n);

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);

  cell1.innerHTML = `<div class='font-weight-bold'>${n}</div>`;
  cell2.innerHTML = document.getElementById('userName').value;
  cell3.innerHTML = document.getElementById('userScore').value;
  cell4.innerHTML = document.getElementById('userTime').value;
  cell5.innerHTML = document.getElementById('userDeaths').value;

  n++;
  x++;
}