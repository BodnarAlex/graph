$(window).on('load', function() {

    var count = 100;
    const chests = [[1, 1], [1, 0], [0,0]];

    var dataRows = [
      ['trying', 'probability']
    ];

    var newChest = chests;


    for(var i =1; i<count+1; i++){
      shuffle(chests);
      console.log("chests");
      console.log(chests);

      console.log("i");
      console.log(i);

      if(chests[0][0] == 1){
        if(chests[0][1] == 1){
          dataRows[i] = [i, 1];
        }else{
          dataRows[i] = [i, 0];
        }
      }
      console.log("dataRow");
      console.log(dataRows);
    }

    


    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
    setInterval(function(){

    
google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable(dataRows);

        var options = {
          chart: {
            title: 'Solution Graph',
            subtitle: 'trying, probability',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
    }, 1000);
    });

    