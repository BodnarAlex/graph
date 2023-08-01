$(document).ready(function () {    

  // Инициализация
  var count = 100;
  var chests = [[1, 1], [1, 0], [0, 0]];
  var init = 3;
  let win, change, commonChange = 0;
  let commonWin= 0;
  
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
        commonChange++;
        if (chests[0][1] == 1) {
          win++;
          commonWin++;
        }
      }
    }
    change = win / init * 100;
    dataRows[i] = [i, change];
  }

  commonChange = commonWin/(init*count)*100;
  commonChange=commonChange.toFixed(2)
  drawGraph(dataRows);

  $(".chossing_item").on('click', function(){
    let classList = this.classList;
  
    if(classList.length==2){
      switch(classList[1]){
        case "choose_graph":
          $(".visiable").removeClass("visiable");
          $(".graph").addClass("visiable");
          break;
        case "choose_code":
          $(".visiable").removeClass("visiable");
          $(".code").addClass("visiable");
          break;
        case "choose_reasoning":
          $(".visiable").removeClass("visiable");
          $(".reasoning").addClass("visiable");
          break;     
      }
      $(".active").removeClass("active");
      $(this).addClass("active");
    }
  });
});

  //Отрисовка
function drawGraph(dataRows){
  google.charts.load('current', { 'packages': ['bar'] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable(dataRows);

    var options = {
      chart: {
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