var chartone = document.getElementById('chart1').getContext('2d');

var mychart = new Chart(chartone, {
    type: 'line',
    data:{
        labels: ['Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022'],
        datasets: [{
            label: 'Credit Growth',
            data: [5.1, 6.1, 5.6, 5.9, 6.5, 7.4],
            fill: false,
            borderColor:"yellow"
        },{
            label: 'Deposit Growth',
            data: [12.1, 12.3, 11.6, 12.9, 11.5, 12.4],
            borderColor: "black",
            fill: false
    }]
    },
    options:{
        plugins:{
            legend: {
                display: true,
                labels:{
                    usePointStlyle: true
                }
        }
        },
        title: {
            display: true,
            text: 'Scheduled Commercial Banks - Deposit and Credit Growth',
            color: "yellow",
            position:"top",
            align:"start",
            fullSize:true
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
               gridLines: {
                  display: false
               }
            }],
            yAxes: [{
               gridLines: {
                  display: false
               }
            }]
       },
        layout:{
            padding: 0,
        }
    }
});
var charttwo = document.getElementById('chart2').getContext('2d');

var mychart = new Chart(charttwo, {
    type: 'doughnut',
    radius: "70%",
    data:{
        labels: ['PSU banks', 'Pvt banks', 'Foreign banks', 'RRBs', 'SFBs'],
        datasets: [{
            label: 'Credit Growth',
            data: [56, 36, 4, 3, 1],
            fill: false,
            backgroundColor:["#0047AB", "#6495ED", "#00FFFF","#6082B6","#00008B"]
        }]
    },
    options:{
        plugins:{
            legend: {
                display: true,
                labels:{
                    usePointStlyle: true
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        layout:{
            padding: {
                top:0
            }
        }
    }
});
var chartthree = document.getElementById('chart3').getContext('2d');

var mychart = new Chart(chartthree, {
    type: 'line',
    data:{
        labels: ['Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022'],
        datasets: [{
            label: 'PSU banks',
            data: [5.1, 6.1, 5.6, 5.9, 6.5, 7.4],
            fill: false,
            borderColor:"#0047AB"
        },{
            label: 'Private Banks',
            data: [12.1, 12.3, 11.6, 12.9, 11.5, 12.4],
            borderColor: "#6495ED",
            fill: false
        },{
            label: 'SFBs',
            data: [4.1, 5.9, 6.2, 6.9, 5.5, 6.4],
            borderColor: "#00008B",
            fill: false
    }]
    },
    options:{
        plugins:{
            legend: {
                display: true,
                labels:{
                    usePointStlyle: true
                }
        }
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
               gridLines: {
                  display: false
               }
            }],
            yAxes: [{
               gridLines: {
                  display: false
               }
            }]
       },
        layout:{
            padding: 0,
        }
    }
});
var chartfour = document.getElementById('chart4').getContext('2d');

var mychart = new Chart(chartfour, {
    type: 'doughnut',
    radius: "70%",
    data:{
        labels: ['PSU banks', 'Pvt banks', 'Foreign banks', 'RRBs', 'SFBs'],
        datasets: [{
            label: 'Credit Growth',
            data: [56, 36, 4, 3, 1],
            fill: false,
            backgroundColor:["#0047AB", "#6495ED", "#00FFFF","#6082B6","#00008B"]
        }]
    },
    options:{
        plugins:{
            legend: {
                display: true,
                labels:{
                    usePointStlyle: true
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        layout:{
            padding: {
                top:0
            }
        }
    }
});
var chartfive = document.getElementById('chart5').getContext('2d');

var mychart = new Chart(chartfive, {
    type: 'line',
    data:{
        labels: ['Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022'],
        datasets: [{
            label: 'PSU banks',
            data: [5.1, 6.1, 5.6, 5.9, 6.5, 7.4],
            fill: false,
            borderColor:"#0047AB"
        },{
            label: 'Private Banks',
            data: [12.1, 12.3, 11.6, 12.9, 11.5, 12.4],
            borderColor: "#6495ED",
            fill: false
        },{
            label: 'SFBs',
            data: [4.1, 5.9, 6.2, 6.9, 5.5, 6.4],
            borderColor: "#00008B",
            fill: false
    }]
    },
    options:{
        plugins:{
            legend: {
                display: true,
                labels:{
                    usePointStlyle: true
                }
        }
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
               gridLines: {
                  display: false
               }
            }],
            yAxes: [{
               gridLines: {
                  display: false
               }
            }]
       },
        layout:{
            padding: 0,
        }
    }
});

var chartsix = document.getElementById('chart6').getContext('2d');

var mychart = new Chart(chartsix, {
    type: 'line',
    data:{
        labels: ['Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022'],
        datasets: [{
            label: 'Non-food credit',
            data: [5.1, 6.1, 5.6, 5.9, 6.5, 7.4],
            fill: false,
            borderColor:"#0047AB"
        },{
            label: 'Agriculture',
            data: [12.1, 12.3, 11.6, 12.9, 11.5, 12.4],
            borderColor: "#6495ED",
            fill: false
        },{
            label: 'Industry',
            data: [4.1, 5.9, 6.2, 6.9, 5.5, 6.4],
            borderColor: "#ff5050",
            fill: false
        },{
            label: 'Services',
            data: [2.1, 3.9, 4.2, 3.9, 4.5, 3.4],
            borderColor: "#cccc00",
            fill: false
        },{
            label: 'Personal loan',
            data: [1.2, 2.9, 1.2, 2.9, 3.5, 2.4],
            borderColor: "#00ff99B",
            fill: false
    }]
    },
    options:{
        plugins:{
            legend: {
                display: true,
                labels:{
                    usePointStlyle: true
                }
        }
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
               gridLines: {
                  display: false
               }
            }],
            yAxes: [{
               gridLines: {
                  display: false
               }
            }]
       },
        layout:{
            padding: 0,
        }
    }
});

var chartsev = document.getElementById('chart7').getContext('2d');

var mychart = new Chart(chartsev, {
    type: 'line',
    data:{
        labels: ['Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022'],
        datasets: [{
            label: 'NBFCs',
            data: [5.1, 6.1, 5.6, 5.9, 6.5, 7.4],
            fill: false,
            borderColor:"#0047AB"
        },{
            label: 'Trade',
            data: [12.1, 12.3, 11.6, 12.9, 11.5, 12.4],
            borderColor: "#6495ED",
            fill: false
        },{
            label: 'Power',
            data: [4.1, 5.9, 6.2, 6.9, 5.5, 6.4],
            borderColor: "#ff5050",
            fill: false
        },{
            label: 'Textiles',
            data: [2.1, 3.9, 4.2, 3.9, 4.5, 3.4],
            borderColor: "#cccc00",
            fill: false
        },{
            label: 'Metals',
            data: [-12.2, -6.9, -11.2, -9.9, -7.5, -8.4],
            borderColor: "#00ff99B",
            fill: false
        },{
            label: 'Roads',
            data: [-1.2, -2.9, -1.2, -2.9, -3.5, -2.4],
            borderColor: "#ffcc66",
            fill: false
    }]
    },
    options:{
        plugins:{
            legend: {
                display: true,
        }
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
               gridLines: {
                  display: false
               }
            }],
            yAxes: [{
               gridLines: {
                  display: false
               }
            }]
       },
        layout:{
            padding: 0,
        }
    }
});
var chartet = document.getElementById('chart8').getContext('2d');

var mychart = new Chart(chartet, {
    type: 'line',
    data:{
        labels: ['Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022'],
        datasets: [{
            label: 'All Loans',
            data: [12.1, 12.3, 11.6, 12.9, 11.5, 12.4],
            fill: false,
            borderColor:"#6495ED"
        },{
            label: 'All term-deposits',
            data: [7.1, 6.3, 6.6, 7.9, 5.5, 6.4],
            borderColor: "#ffcc66",
            fill: false
        },{
            label: 'New loans',
            data: [4.1, 5.9, 6.2, 6.9, 5.5, 6.4],
            borderColor: "#cccc00",
            fill: false
    }]
    },
    options:{
        plugins:{
            legend: {
                display: true,
        }
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
               gridLines: {
                  display: false
               }
            }],
            yAxes: [{
               gridLines: {
                  display: false
               }
            }]
       },
        layout:{
            padding: 0,
        }
    }
});

var chartn = document.getElementById('chart9').getContext('2d');
var mychart = new Chart(chartn, {
    type: 'bar',
    data:{
        labels: ['2018', '2019', '2020', '2021'],
        datasets: [{
            label: 'Qtr1',
            data: [12.1, 13.1, 12.6, 12.9],
            backgroundColor: "#ffcc99"
        },{
            label: 'Qtr2',
            data: [11.1, 11.3, 13.6, 12.9],
            backgroundColor: "#ffcc99"
        },{
            label: 'Qtr3',
            data: [13.1, 14.3, 13.6, 12.9],
            backgroundColor: "#ffcc99"          
        },{
            label: 'Qtr4',
            data: [11.4, 13.3, 11.6, 11.9],
            backgroundColor: "#ffcc99"
    }]
    },
    options:{
        plugins:{
            legend: {
                display: true
        }
        },
        scales: {
            xAxes: [{
               gridLines: {
                  display: false
               }
            }],
            yAxes: [{
                gridLines: {
                  display: false
               }
            }]
       },
        responsive: true,
        maintainAspectRatio: false,
        layout:{
            padding: 0,
        }
    }
});
var chartt = document.getElementById('chart10').getContext('2d');
var mychart = new Chart(chartt, {
    type: 'bar',
    data:{
        labels: ['2018', '2019', '2020', '2021'],
        datasets: [{
            label: 'Qtr1',
            data: [12.1, 13.1, 12.6, 12.9],
            backgroundColor: "#0066ff"
        },{
            label: 'Qtr2',
            data: [11.1, 11.3, 13.6, 12.9],
            backgroundColor: "#0066ff"
        },{
            label: 'Qtr3',
            data: [13.1, 14.3, 13.6, 12.9],
            backgroundColor: "#0066ff"          
        },{
            label: 'Qtr4',
            data: [11.4, 13.3, 11.6, 11.9],
            backgroundColor: "#0066ff"
    }]
    },
    options:{
        plugins:{
            legend: {
                display: true
        }
        },
        scales: {
            xAxes: [{
               gridLines: {
                  display: false
               }
            }],
            yAxes: [{
                gridLines: {
                  display: false
               }
            }]
       },
        responsive: true,
        maintainAspectRatio: false,
        layout:{
            padding: 0,
        }
    }
});
var chartun = document.getElementById('chart11').getContext('2d');
var mychart = new Chart(chartun, {
    type: 'bar',
    data:{
        labels: ['2018', '2019', '2020', '2021'],
        datasets: [{
            label: 'Qtr1',
            data: [12.1, 13.1, 12.6, 12.9],
            backgroundColor: "#ffcc99"
        },{
            label: 'Qtr2',
            data: [11.1, 11.3, 13.6, 12.9],
            backgroundColor: "#ffcc99"
        },{
            label: 'Qtr3',
            data: [13.1, 14.3, 13.6, 12.9],
            backgroundColor: "#ffcc99"          
        },{
            label: 'Qtr4',
            data: [11.4, 13.3, 11.6, 11.9],
            backgroundColor: "#ffcc99"
    }]
    },
    options:{
        plugins:{
            legend: {
                display: true,
                labels:{
                    usePointStlyle: true
                }
        }
        },
        scales: {
            xAxes: [{
               gridLines: {
                  display: false
               }
            }],
            yAxes: [{
                gridLines: {
                  display: false
               }
            }]
       },
        responsive: true,
        maintainAspectRatio: false,
        layout:{
            padding: 0,
        }
    }
});
