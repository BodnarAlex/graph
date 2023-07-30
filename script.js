$(document).ready(function () {    

  // Инициализация
  var count = 10;
  var chests = [[1, 1], [1, 0], [0, 0]];
  var init = 3;
  let win, change = 0;
  var dataRows = [
    ['trying', 'probability']
  ];

  for (var i = 1; i < count + 1; i++) {
    shuffle(chests);
    shuffleEntrails(chests);
    win = 0;

    for (var k = 0; k < init; k) {
      shuffle(chests);
      shuffleEntrails(chests);
      if (chests[0][0] == 1) {
        k++;
        if (chests[0][1] == 1) {
          win++;
        }
      }
    }

    change = win / init * 100;
    dataRows[i] = [i, change];

    console.log("dataRow");
    console.log(dataRows);
  }

  drawGraph(dataRows);
});


  //Отрисовка
function drawGraph(dataRows){
  google.charts.load('current', { 'packages': ['bar'] });
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
}

  //Перемешивание
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  function shuffleEntrails(array){
    for (let j = 0; j < array.length; j++) {
      shuffle(array[j]);
    }
  }

