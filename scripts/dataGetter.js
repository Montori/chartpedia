var txt = ""

function getTestData()
{
  document.getElementById("resultText").innerHTML = "init";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function()
  {
    if (this.readyState == 4 && this.status == 200)
    {
      let result = this.responseText.split(";");
      result = doSeperate(result);
      result.forEach(prepareText);

      document.getElementById("resultText").innerHTML = txt;
    }
  };
  xmlhttp.open("GET", "dbDataForQuery.php?r=" + Math.random(), true);
  xmlhttp.send();
}

function doSeperate(array){
  let result = [];
  for (var i = 0; i < array.length; i+=2) {
    result[i] = array[i] + ";" + array[i+1];
  }
  return result;
}

function prepareText(value, index, array) {
  txt = txt + value + "<br>";
}

/**/
