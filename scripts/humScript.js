var options2 = {
  backgroundColor: '#343a40',
  curveType: 'function',
  legend: {
    position: 'bottom'
  },
  titleTextStyle: {
    color: 'white'
  },
  hAxis: {
    title: 'Time',
    textStyle: {
      color: 'white'
    },
    titleTextStyle: {
      color: 'white'
    }
  },
  vAxis: {
    title: 'Humidity',
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
  colors: ['#f0ff00']
};

google.charts.load('current', {
  packages: ['corechart']
}).then(function () {
  $(".btn").click(function() {

    let xmlhttpHum = new XMLHttpRequest();
    xmlhttpHum.onreadystatechange = function()
    {
      if (this.readyState == 4 && this.status == 200)
      {
        let result = this.responseText.split("//");

        let a = []

        a.push(['Time','Humidity']);

        for (let i = 0; i < result.length; i++) {
          let tmp = result[i].split(";");
          let time = tmp[1];
          if(time != null){
            time = time.substr(11,14);
          }
          a.push([time, parseFloat(tmp[0])]);
        }


        let data = google.visualization.arrayToDataTable(a);

        let chart = new google.visualization.LineChart(document.getElementById("hum-chart"));
        chart.draw(data,options2);
      }
    };
    let radioLocation = document.getElementById("radioInside");
    let radioCardinal = document.getElementById("radioWest");

    let locationValue = radioLocation.checked ? radioLocation.value : document.getElementById("radioOutside").value;
    let cardinalPoint = radioCardinal.checked ? radioCardinal.value : document.getElementById("radioEast").value;

    xmlhttpHum.open("GET", "../scripts/humQuery.php?d=" + document.getElementById("date").value + "&l=" + locationValue + "&c=" + cardinalPoint, true);
    xmlhttpHum.send();
  });
});
