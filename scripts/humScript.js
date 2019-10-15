/*google.charts.load('current', {
  'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Time', 'Humidity'],
    ['04:00', 42],
    ['09:00', 37],
    ['12:00', 35],
    ['15:00', 32],
    ['18:00', 31.5],
    ['21:00', 30],
    ['00:00', 34],
    ['03:00', 35],
  ]);

  var options = {
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

  var chart = new google.visualization.LineChart(document.getElementById('hum-chart'));

  chart.draw(data, options);
}
*/
