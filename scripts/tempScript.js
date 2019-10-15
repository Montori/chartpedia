var options = {
  title: 'Temperature',
  backgroundColor: '#343a40',
  curveType: 'function',
  hAxis: {
    title: 'Time',
    titleTextStyle: {
      color: '#333'
    }
  },
  vAxis: {
    minValue: 0
  },
  'chartArea': {
    'backgroundColor': {
      'fill': '#343a40',
      'opacity': 100
    },
  },
  titleTextStyle: {
    color: 'white'
  },
  hAxis: {
    textStyle: {
      color: 'white'
    },
    titleTextStyle: {
      color: 'white'
    }
  },
  vAxis: {
    title: 'Temperature',
    textStyle: {
      color: 'white'
    },
    titleTextStyle: {
      color: 'white'
    }
  },
  legend: {
    textStyle: {
      color: 'white'
    }
  },
  colors: ['#DE38C8']
};

google.charts.load('current', {
  packages: ['corechart']
}).then(function () {
  $(".btn").click(function() {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function()
    {
      if (this.readyState == 4 && this.status == 200)
      {
        let result = this.responseText.split("//");

        let a = []

        a.push(['Time','Temperature']);

        for (var i = 0; i < result.length; i++) {
          let tmp = result[i].split(";");
          let time = tmp[1];
          if(time != null){
            time = time.substr(11,14);
          }
          a.push([time, parseFloat(tmp[0])]);
        }


        var data = google.visualization.arrayToDataTable(a);

        var chart = new google.visualization.LineChart(document.getElementById("temp-chart"));
        chart.draw(data,options);
      }
    };
    let radioLocation = document.getElementById("radioInside");
    let radioCardinal = document.getElementById("radioWest");

    let locationValue = radioLocation.checked ? radioLocation.value : document.getElementById("radioOutside").value;
    let cardinalPoint = radioCardinal.checked ? radioCardinal.value : document.getElementById("radioEast").value;

    xmlhttp.open("GET", "../scripts/dbDataForQuery.php?d=" + document.getElementById("date").value + "&l=" + locationValue + "&c=" + cardinalPoint, true);
    xmlhttp.send();
  });
});