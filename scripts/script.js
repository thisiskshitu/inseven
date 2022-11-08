var steps = 1;
var low = 1;
var high = 100;
var mid = Math.trunc((low + high) / 2);

function lowF()
{
  low = mid + 1;
  mid = Math.trunc((low + high) / 2);
  document.getElementById("number-display").innerHTML = mid + "?";
  steps = steps + 1;
  document.getElementById("steps-display-home").innerHTML = steps;
}

function highF()
{
  high = mid - 1;
  mid = Math.trunc((low + high) / 2);
  document.getElementById("number-display").innerHTML = mid + "?";
  steps = steps + 1;
  document.getElementById("steps-display-home").innerHTML = steps;
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
  document.getElementById("steps-display-home").innerHTML = steps;
  document.getElementById("container-last").style.height = "0";
  document.getElementById("container-error").style.height = "0";
}

function justChangingVariables()
{
  steps = 1;
  low = 1;
  high = 100;
  mid = Math.trunc((low + high) / 2);
  document.getElementById("number-display").innerHTML = mid + "?";
  document.getElementById("steps-display-home").innerHTML = steps;
}

function errorDisplay()
{
  document.getElementById("container-error").style.height = "100%";
}

function stopSeven()
{
  let stepsValue = document.getElementById("steps-display-home");
  let stepsValueContent = stepsValue.textContent.trim();
  if(stepsValueContent > 7)
  {
    document.getElementById("container-error").style.height = "100%";
  }
}