function barsChart(fut, vol, nat, ten, surf) {

    var myData = {
        labels: ["Futebol", "Volei", "Natação", "Tênis", "Surf"],
        datasets: [{
            label: "Quantidade de usuários por esporte cadastrado",
            fill: false,
            backgroundColor: ['#ff0000', '#ff4000', '#ff8000', '#ffbf00', '#ffbf00'],
            borderColor: 'black',
            data: [fut, vol,nat, ten, surf],
        }]
    };
    // Options define for display value on top of bars
    var myoption = {
        tooltips: {
            enabled: true
        },
        hover: {
            animationDuration: 1
        },
        animation: {
        duration: 1,
        onComplete: function () {
            var chartInstance = this.chart,
                ctx = chartInstance.ctx;
                ctx.textAlign = 'center';
                ctx.fillStyle = "rgba(0, 0, 0, 1)";
                ctx.textBaseline = 'bottom';
                // Loop through each data in the datasets
                this.data.datasets.forEach(function (dataset, i) {
                    var meta = chartInstance.controller.getDatasetMeta(i);
                    meta.data.forEach(function (bar, index) {
                        var data = dataset.data[index];
                        ctx.fillText(data, bar._model.x, bar._model.y - 5);
                    });
                });
            }
        }
    };
    // Code to draw Chart
    var ctx = document.getElementById('barsChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',        // Define chart type
        data: myData,    	// Chart data
        options: myoption 	// Chart Options [This is optional paramenter use to add some extra things in the chart].
    });
  
};

function pieChart(fut, vol, nat, ten, surf) {

    var ctx = document.getElementById('pieChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut', //'pie'
    data: {
        labels: ['Futebol', 'Volei', 'Natação', 'Tênis', 'Surf'],
        datasets: [{
            data: [fut, vol, nat, ten, surf],
            backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5', '#ffd600'],
            borderWidth: 0.5 ,
            borderColor: '#ddd'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Quantidade de usuários por esporte cadastrado',
            position: 'top',
            fontSize: 16,
            fontColor: '#111',
            padding: 20
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: true
        },
        plugins: {
            datalabels: {
                display: true,
                color: '#111',
                textAlign: 'center',
                font: {
                    lineHeight: 1.6
                },
                formatter: function(value, ctx) {
                    console.log('aa')
                    return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                }
            }
        }
    }
});
return;


    console.log(fut)
    console.log(vol)
    console.log(nat)
    console.log(ten)
    var data = [
        {
            value: fut,
            color:"#F38630",
            label: 'Futebol'
        },
        {
            value : vol,
            color : "#E0E4CC",
            label: 'Volei'
        },
        {
            value : ten,
            color : "#E0E4CC",
            label: 'Tênis'
        },
        {
            value : surf,
            color : "#E0E4CC",
            label: 'Tênis'
        }

    ];

    var ctx = document.getElementById("pieChart").getContext("2d");
    var pieChart = new Chart(ctx).Pie(data);

    legend(document.getElementById("pieLegend"), data, pieChart);
};

