$(window).on('load', function() {

    var count = 100;
    const chests = [[1, 1], [1, 0], [0,0]];

    var dataRows = [
      ['trying', 'probability'],
      [1, 0],[2, 1],[3, 1],[4, 1],[5, 1],[7, 0],[9, 1],[10, 0],
      [12, 0],[13, 1],[14, 0],[15, 0],[16, 0],[17, 0],[19, 1],[20, 0],
      [21, 1], [23, 0],[24, 0]];


    var newChest = chests;


    for(var i =1; i<count+1; i){
      shuffle(chests);
      console.log("chests");
      console.log(chests);

      console.log("i");
      console.log(i);

      if(chests[0][0] == 1){
        i++;
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

    