$(window).on('load', function() {

    var count = 100;
    const chests = [[1, 1], [1, 0], [0,0]];

    
    //выбираем наугад лубую коробку

    //если серебрянная пропустить

    // золотая  - узнать какая вторая

    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }

google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['trying', 'probability'],
          ['1', 66],
          ['2', 50],
          ['3', 12],
          ['4', 78],
          ['5', 66],
          ['6', 50],
          ['7', 12],
          ['8', 78]
        ]);

        var options = {
          chart: {
            title: 'Solution Graph',
            subtitle: 'trying, probability',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
    });

    