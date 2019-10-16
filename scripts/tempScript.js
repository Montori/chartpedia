var optionsTemp = {
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

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function()
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

        let a = [];
        let maxValue = 0;
        let minValue = 20;

        a.push(['Time','2016', '2017', '2018', '2019']);

        for (var i = 0; i < a2018.length; i++) {
          let tmp2016 = a2016[i] !== null && a2016[i] !== undefined ? a2016[i].split(";") : i == 0 ? ["",0] : [undefined,undefined];
          let tmp2017 = a2017[i] !== null && a2017[i] !== undefined ? a2017[i].split(";") : i == 0 ? ["",0] : [undefined,undefined];
          let tmp2018 = a2018[i] !== null && a2018[i] !== undefined ? a2018[i].split(";") : i == 0 ? ["",0] : [undefined,undefined];
          let tmp2019 = a2019[i] !== null && a2019[i] !== undefined ? a2019[i].split(";") : i == 0 ? ["",0] : [undefined,undefined];
          let cel2016 = tmp2016[0] !== undefined ? parseFloat(tmp2016[0]) : undefined;
          let cel2017 = tmp2017[0] !== undefined ? parseFloat(tmp2017[0]) : undefined;
          let cel2018 = tmp2018[0] !== undefined ? parseFloat(tmp2018[0]) : undefined;
          let cel2019 = tmp2019[0] !== undefined ? parseFloat(tmp2019[0]) : undefined;
          let time = tmp2018[1];

          if(cel2016 > maxValue) maxValue = Math.ceil(cel2016);
          if(cel2017 > maxValue) maxValue = Math.ceil(cel2017);
          if(cel2018 > maxValue) maxValue = Math.ceil(cel2018);
          if(cel2019 > maxValue) maxValue = Math.ceil(cel2019);
          if(cel2016 < minValue) minValue = Math.floor(cel2016);
          if(cel2017 < minValue) minValue = Math.floor(cel2017);
          if(cel2018 < minValue) minValue = Math.floor(cel2018);
          if(cel2019 < minValue) minValue = Math.floor(cel2019);
          /*if(time != null && time != undefined){
            time = time.substring(11,14);
          }*/
          a.push([time, cel2016, cel2017, cel2018, cel2019]);
        }

        optionsTemp.vAxis.viewWindow=
        {
            max: maxValue,
            min: minValue
        };


        let data = google.visualization.arrayToDataTable(a);

        let chart = new google.visualization.LineChart(document.getElementById("temp-chart"));
        chart.draw(data,optionsTemp);
      }
    };
    let radioLocation = document.getElementById("radioInside");
    let radioCardinal = document.getElementById("radioWest");

    let locationValue = radioLocation.checked ? radioLocation.value : document.getElementById("radioOutside").value;
    let cardinalPoint = radioCardinal.checked ? radioCardinal.value : document.getElementById("radioEast").value;
    let queryDate = document.getElementById("date").value;

    console.log(queryDate);

    xmlhttp.open("GET", "../scripts/tempQuery.php?d=" + queryDate + "&l=" + locationValue + "&c=" + cardinalPoint, true);
    xmlhttp.send();
  });
});
