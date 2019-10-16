var humOptions = {
  backgroundColor: '#343a40',
  curveType: 'function',
  height: 500,
  'chartArea': {'width': '80%', 'height': '90%'},
  interpolateNulls: true,
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
    scaleType: 'log',
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
  series: {
            0: { color: '#DE38C8' },
            1: { color: '#f0ff00' },
            2: { color: '#01FFFF' },
          }
};

var tempOptions = {
  backgroundColor: '#343a40',
  curveType: 'function',
  height: 500,
  'chartArea': {'width': '80%', 'height': '90%'},
  interpolateNulls: true,
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
    title: 'Temperature',
    scaleType: 'log',
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
  series: {
            0: { color: '#DE38C8' },
            1: { color: '#f0ff00' },
            2: { color: '#01FFFF' },
          }
};

google.charts.load('current', {
  packages: ['corechart']
}).then(function () {
  $(".btn").click(function() {

    var xmlhttpHum = new XMLHttpRequest();
    xmlhttpHum.onreadystatechange = function()
    {
      if (this.readyState == 4 && this.status == 200)
      {
        let result = this.responseText.split("//");
        let a2016 = [];
        let a2017 = [];
        let a2018 = [];
        let a2019 = [];

        for (var i = 0; i < result.length; i++) {
          let tmp = result[i].split(";");

          if(tmp[1] != null){
            switch (tmp[1].substring(0,4)) {
              case '2019': a2019.push(result[i]); break;
              case '2018': a2018.push(result[i]); break;
              case '2017': a2017.push(result[i]); break;
              case '2016': a2016.push(result[i]); break;
            }
          }
        }

        let humidityArray = [];
        let tempArray = [];
        let maxValue = 0;
        let minValue = 50;

        humidityArray.push(['Time','2016', '2017', '2018', '2019']);
        tempArray.push(['Time', '2016', '2017', '2018', '2019']);

        for (var i = 0; i < a2018.length; i++) {
          let tmp2016 = a2016[i] !== null && a2016[i] !== undefined ? a2016[i].split(";") : i == 0 ? ["",0,0] : [undefined,undefined, undefined];
          let tmp2017 = a2017[i] !== null && a2017[i] !== undefined ? a2017[i].split(";") : i == 0 ? ["",0,0] : [undefined,undefined, undefined];
          let tmp2018 = a2018[i] !== null && a2018[i] !== undefined ? a2018[i].split(";") : i == 0 ? ["",0,0] : [undefined,undefined, undefined];
          let tmp2019 = a2019[i] !== null && a2019[i] !== undefined ? a2019[i].split(";") : i == 0 ? ["",0,0] : [undefined,undefined, undefined];
          let hum2016 = tmp2016[0] !== undefined ? parseFloat(tmp2016[0]) : undefined;
          let hum2017 = tmp2017[0] !== undefined ? parseFloat(tmp2017[0]) : undefined;
          let hum2018 = tmp2018[0] !== undefined ? parseFloat(tmp2018[0]) : undefined;
          let hum2019 = tmp2019[0] !== undefined ? parseFloat(tmp2019[0]) : undefined;
          let cel2016 = tmp2016[0] !== undefined ? parseFloat(tmp2016[2]) : undefined;
          let cel2017 = tmp2017[0] !== undefined ? parseFloat(tmp2017[2]) : undefined;
          let cel2018 = tmp2018[0] !== undefined ? parseFloat(tmp2018[2]) : undefined;
          let cel2019 = tmp2019[0] !== undefined ? parseFloat(tmp2019[2]) : undefined;
          let time = tmp2018[1];

          if(hum2016 > maxValue) maxValue = Math.ceil(hum2016);
          if(hum2017 > maxValue) maxValue = Math.ceil(hum2017);
          if(hum2018 > maxValue) maxValue = Math.ceil(hum2018);
          if(hum2019 > maxValue) maxValue = Math.ceil(hum2019);
          if(hum2016 < minValue) minValue = Math.floor(hum2016);
          if(hum2017 < minValue) minValue = Math.floor(hum2017);
          if(hum2018 < minValue) minValue = Math.floor(hum2018);
          if(hum2019 < minValue) minValue = Math.floor(hum2019);

          humidityArray.push([time, hum2016, hum2017, hum2018, hum2019]);
          tempArray.push([time, cel2016, cel2017, cel2018, cel2019]);
        }

        let optionsTemp = humOptions;

        humOptions.vAxis.viewWindow=
        {
            max: maxValue,
            min: minValue
        };

        let humData = google.visualization.arrayToDataTable(humidityArray);
        let tempData = google.visualization.arrayToDataTable(tempArray);

        let humChart = new google.visualization.LineChart(document.getElementById("hum-chart"));
        let tempChart = new google.visualization.LineChart(document.getElementById("humtemp-chart"));
        humChart.draw(humData,humOptions);
        tempChart.draw(tempData,tempOptions);
      }
    };
    let radioCardinal = document.getElementById("radioWest");

    let cardinalPoint = radioCardinal.checked ? radioCardinal.value : document.getElementById("radioEast").value;
    let queryDate = document.getElementById("date").value;

    console.log(queryDate);

    xmlhttpHum.open("GET", "../scripts/humQuery.php?d=" + queryDate + "&c=" + cardinalPoint, true);
    xmlhttpHum.send();
  });
});
