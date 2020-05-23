var tab=document.getElementById("skilltable");
if(localStorage.getItem("table")===null)
localStorage.setItem("table",tab.innerHTML)
else
tab.innerHTML=localStorage.getItem("table");

function myfunction()
{
  var names = document.getElementById("fname").value;
  var skills = document.getElementById("fskill").value;
  var levels = document.getElementById("flevel").value;
  var comment = document.getElementById("ftext").value;
  var table = document.getElementById("skilltable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3); 
  cell1.innerHTML = names;
  cell2.innerHTML = skills;
  cell3.innerHTML = levels;
  cell4.innerHTML = comment;
  cell1.className = "style1";
  cell2.className = "style1";
  cell3.className = "style1";
  cell4.className = "style2";
  localStorage.setItem("table",tab.innerHTML)
  document.getElementById("skillform").reset();
}