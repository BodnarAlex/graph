$(window).on('load', function() {

  // Инициализация
    var count = 10;
    var chests = [[1, 1], [1, 0], [0,0]];
    var init = 3;
    let win, change = 0;
    var dataRows = [
      ['trying', 'probability']
    ];


    for(let j=0; j<chests.length; j++){
      shuffle(chests[j]);
    }


    for(var i =1; i<count+1; i++){
      shuffle(chests);
      win = 0;

      for(var k =0; k<init; k){

      if(chests[0][0] == 1){
        k++;
        if(chests[0][1] == 1){
          win++;
        }
      }else{
        shuffle(chests);
      }
      }

      change = win/init*100;
      dataRows[i] = [i, change];

      console.log("dataRow");
      console.log(dataRows);
    }

    

    //Перемешивание
    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }

    //Отрисовка
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
    }, 1000000);
    });

    