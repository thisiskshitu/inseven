var steps = 1;
var low = 1;
var high = 100;
var mid = Math.trunc((low + high) / 2);

function lowF()
{
  low = mid + 1;
  mid = Math.trunc((low + high) / 2);
  document.getElementById("number-display").innerHTML = mid + "?";
  console.log(mid);
  steps = steps + 1;
  document.getElementById("steps").innerHTML = "Steps Taken By Computer: " + steps;
}

function highF()
{
  high = mid - 1;
  mid = Math.trunc((low + high) / 2);
  document.getElementById("number-display").innerHTML = mid + "?";
  console.log(mid);
  steps = steps + 1;
  document.getElementById("steps").innerHTML = "Steps Taken By Computer: " + steps;
}

function found()
{
  document.getElementById("score-display").innerHTML = mid;
  document.getElementById("steps-display").innerHTML = steps;
}

function openNav()
{
  document.getElementById("container-first").style.height = "100%";
}

function closeNav()
{
  document.getElementById("container-first").style.height = "0";
}

function scoreDisplay()
{
  document.getElementById("container-last").style.height = "100%";
}

function restart()
{
  steps = 1;
  low = 1;
  high = 100;
  mid = Math.trunc((low + high) / 2);
  document.getElementById("number-display").innerHTML = mid + "?";
  document.getElementById("steps").innerHTML = "Steps Taken By Computer: " + steps;
  document.getElementById("container-last").style.height = "0";
}