var ctx = document.getElementById("myChart");
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: ["","1/4 6:00am", "1/4 12:00pm", "1/4 6:00pm", "1/5 6:00am", "1/5 12:00pm", "1/5 6:00 pm", "1/6 6:00am", "1/6 12:00pm","1/6 6:00pm","1/7 6:00am","1/7 12:00pm","1/7 6:00pm"],
    datasets: [
        {
            label: "Traffic",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(116, 118, 192,.4)",
            borderColor: "rgb(116, 118, 192)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgb(116, 118, 192)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2.5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(116, 118, 192)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 6,
            pointHitRadius: 10,
            data: [0, 1250, 1000, 1500, 2000, 1500, 1600,1250,1600,2000,1600,2100,1800],
            spanGaps: false,
        }
    ]
},
  options: {
     legend: {
      labels: {
         boxWidth: 0,  
      }
   }
  }
});


var bar = document.getElementById("bar-chart");
var myBarChart = new Chart(bar, {
    type: 'bar',
    data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    responsive: false,
    datasets: [
        {
            label: "Daily Traffic",
            backgroundColor: [
                'rgb(116, 118, 192)',
                'rgb(116, 118, 192)',
                'rgb(116, 118, 192)',
                'rgb(116, 118, 192)',
                'rgb(116, 118, 192)',
                'rgb(116, 118, 192)',
                'rgb(116, 118, 192)',
            ],
            borderColor: [
                'rgb(116, 118, 192)',
                'rgb(116, 118, 192)',
                'rgb(116, 118, 192)',
                'rgb(116, 118, 192)',
                'rgb(116, 118, 192)',
                'rgb(116, 118, 192)',
            ],
            borderWidth: 1,
            data: [75, 100, 175, 120, 225, 210, 80],
        }
    ]
  },
    options: {
      scales: {
    xAxes: [{
                gridLines: {
                    display:false
                }
            }],
    yAxes: [{
                gridLines: {
                    display:false
                }   
            }]
    },
    legend: {
      labels: {
         boxWidth: 0,  
      }
   },
  }
});


var doughnut = document.getElementById("doughnut-chart");
var myDoughnutChart = new Chart(doughnut, {
    type: 'doughnut',
    data: {
    labels: [
        "Phones","Tablets","Desktop"
      ],
    datasets: [
        {
            data: [16, 24, 60],
            backgroundColor: [
                "rgb(116, 177, 190)",
                "rgb(127, 202, 143)",
                "rgb(116, 118, 192)"
            ],
            hoverBackgroundColor: [
                "rgb(116, 177, 190)",
                "rgb(127, 202, 143)",
                "rgb(116, 118, 192)"
            ]
        }]
    },
  options: {
    legend: {
      labels: {
         boxWidth: 20,  
      }
   }
  }
  
});