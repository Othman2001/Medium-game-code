function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Xw4MaK9HDs":
        Script1();
        break;
  }
}

function Script1()
{
  
var player = GetPlayer();
var score = player.GetVar("score");


Script2();
function Script2()
{


window.parent.postMessage({score:score}, "*")

}

}

