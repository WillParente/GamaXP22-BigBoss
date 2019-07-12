( function ( $ ) {
    "use strict";

    //bar chart
    var ctx = document.getElementById( "barChart" );
    //    ctx.height = 200;
    var myChart = new Chart( ctx, {
        type: 'bar',
        data: {
            labels: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set" ],
            datasets: [
                {
                    label: "Atual",
                    data: [ 95, 99, 75, 55, 87, 53, 75, 70, 68 ],
                    //borderColor: "rgba(0, 194, 146, 0.9)",
                    borderWidth: "0",
                    backgroundColor: "#04B816"
                            },
                {
                    label: "Período anterior",
                    data: [ 60, 72, 62, 68, 63, 49, 72, 55, 51 ],
                    //borderColor: "rgba(0,0,0,0.09)",
                    borderWidth: "0",
                    backgroundColor: "rgba(255, 170, 44, 0.5)"
                            }
                        ]
        },
        options: {
            scales: {
                yAxes: [ {
                    ticks: {
                        beginAtZero: false
                    }
                                } ]
            }
        }
    } );

} )( jQuery );