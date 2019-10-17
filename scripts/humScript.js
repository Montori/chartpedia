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

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function()
    {
      if (this.readyState == 4 && this.status == 200)
      {
        let splitData = getAllYears(this.responseText);
        let humArray = [];
        let tempArray = [];
        let humHeader = ['Time'];
        let tempHeader = ['Time'];
        let iterator = 0;
        let maxValue = 0;
        let minValue = 50;
        let maxTempValue = 0;
        let minTempValue = 50;

        for (let i = 0; i < splitData.length; i++) {
          humHeader.push(splitData[i][0][1].substring(0,4));
          tempHeader.push(splitData[i][0][1].substring(0,4));
          if(splitData[i].length > iterator) iterator = splitData[i].length;
        }

        humArray.push(humHeader);
        tempArray.push(tempHeader);

        for (let i = 0; i < iterator; i++)
        {
          let tmpRecord = [];
          let tmpTempRecord = [];
          let time;

          for (let ii = 0; ii < splitData.length; ii++)
          {
            if(splitData[ii][i] !== undefined && splitData[ii][i] !== null)
            {
              let value = parseFloat(splitData[ii][i][0]);
              let tempValue = parseFloat(splitData[ii][i][2]);
              if(value > maxValue) maxValue = Math.ceil(value);
              if(value < minValue) minValue = Math.floor(value);
              if(tempValue > maxTempValue) maxTempValue = Math.ceil(tempValue);
              if(tempValue < minTempValue) minTempValue = Math.floor(tempValue);
              time = splitData[ii][i][1].substring(10);

              tmpRecord.push(value);
              tmpTempRecord.push(tempValue);
            }
            else
            {
              tmpRecord.push(undefined);
              tmpTempRecord.push(undefined);
            }
          }
          tmpRecord.unshift(time);
          tmpTempRecord.unshift(time);
          humArray.push(tmpRecord);
          tempArray.push(tmpTempRecord);
        }
        humOptions.vAxis.viewWindow=
        {
            max: maxValue,
            min: minValue,
        };
        tempOptions.vAxis.viewWindow=
        {
            max: maxTempValue,
            min: minTempValue,
        };


        let data = google.visualization.arrayToDataTable(humArray);
        let tempData = google.visualization.arrayToDataTable(tempArray);

        let chart = new google.visualization.LineChart(document.getElementById("hum-chart"));
        let chart2 = new google.visualization.LineChart(document.getElementById("humtemp-chart"));
        chart.draw(data,humOptions);
        chart2.draw(tempData,tempOptions);
      }
    };

    let radioCardinal = document.getElementById("radioWest");

    let cardinalPoint = radioCardinal.checked ? radioCardinal.value : document.getElementById("radioEast").value;
    let queryDate = document.getElementById("date").value;

    xmlhttp.open("GET", "../scripts/humQuery.php?d=" + queryDate + "&c=" + cardinalPoint, true);
    xmlhttp.send();
  });
});
