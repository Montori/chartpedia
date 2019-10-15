/*google.charts.load('current', {
  'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Time', 'Celsius'],
    ['06:00', 79],
    ['09:00', 81],
    ['12:00', 82],
    ['15:00', 89],
    ['18:00', 95],
    ['21:00', 85],
    ['00:00', 79],
    ['03:00', 78],
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
    colors: ['#01FFFF']
  };

  var chart = new google.visualization.LineChart(document.getElementById('cpu-chart'));

  chart.draw(data, options);
}
*/
