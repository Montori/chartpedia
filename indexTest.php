<?php
  $servername = "localhost";
  $username = "student2_data";
  $password = "Password1";
  $dbname = "student2_data";

  $con = mysqli_connect($servername, $username, $password, $dbname);
 ?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Test</title>
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script type="text/javascript">
      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);

      function drawChart() {

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function()
      {
        if (this.readyState == 4 && this.status == 200)
        {
          let result = this.responseText.split("//");

          let a = []

          a.push(['kuupaev','temp']);

          for (var i = 0; i < result.length; i++) {
            let tmp = result[i].split(";");
            a.push([tmp[1], parseFloat(tmp[0])]);
          }


          var data = google.visualization.arrayToDataTable(a);

          var options = {
                title: 'A thing',
                curveType: 'function',
                legend: { position: 'bottom' }
            };
              var chart = new google.visualization.LineChart(document.getElementById("chart"));
              chart.draw(data,options);
        }
      };
      xmlhttp.open("GET", "../scripts/dbDataForQuery.php?r=" + Math.random(), true);
      xmlhttp.send();
      }

    </script>

  </head>
  <body>
    <div id="chart">

    </div>
  </body>
</html>
