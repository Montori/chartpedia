var optionsCPU = {
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
  tooltip: {
        showTitle: false
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
        let cpuArray = [];
        var header = ['Time'];
        let iterator = 0;
        let maxValue = 0;
        let minValue = 40;

        for (let i = 0; i < splitData.length; i++) {
          header.push(splitData[i][0][1].substring(0,4));
          if(splitData[i].length > iterator) iterator = splitData[i].length;
        }

        cpuArray.push(header);


        for (let i = 0; i < iterator; i++)
        {
          let tmpRecord = [];
          let time;

          for (let ii = 0; ii < splitData.length; ii++)
          {
            if(splitData[ii][i] !== undefined && splitData[ii][i] !== null)
            {
              let value = parseFloat(splitData[ii][i][0])
              if(value > maxValue) maxValue = Math.ceil(value);
              if(value < minValue) minValue = Math.floor(value);
              time = splitData[ii][i][1].substring(10);

              tmpRecord.push(value);
            }
            else
            {
              tmpRecord.push(undefined);
            }
          }
          tmpRecord.unshift(time);
          cpuArray.push(tmpRecord);
        }
        optionsCPU.vAxis.viewWindow=
        {
            max: maxValue,
            min: minValue
        };

        console.log(cpuArray);

        let data = new google.visualization.arrayToDataTable(cpuArray);
        let chart = new google.visualization.LineChart(document.getElementById("cpu-chart"));

        chart.draw(data,optionsCPU);
      }
    };

    let queryDate = document.getElementById("date").value;

    console.log(queryDate);

    xmlhttp.open("GET", "../scripts/cpuTempQuery.php?d=" + document.getElementById("date").value, true);
    xmlhttp.send();
  });
});
