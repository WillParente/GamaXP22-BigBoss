(function($){

    "use strict"; // Start of use strict

    var SufeeAdmin = {

       chart1: function(){

           // first chart
           var chart1Options = {
                series: {
                   lines: {
                       show: true,
                       label: {
                           show: true
                       }
                   },
                   points: {
                       show: false
                   }
                },
                legend: {
                    show: true
                },
                yaxes: [ {
                    min: 50,
                    max: 100
                    }, {
                        position: 'right'
                    } ],
               grid: {
                   hoverable: true
               },
               legend: {
                   show: false
               },
                grid: {
                   color: "#fff",
                   hoverable: true,
                   borderWidth: 0,
                   backgroundColor: 'transparent'
                },
                tooltip: true,
                tooltipOpts: {
                content: "'%s' of %x.1 is %y.4"
               }
           };
           var chart1Data = [
            {
               label: "Atual",
               color: "#04B816",
               data: [ [ 1, 70 ],[ 2, 82 ],[ 3, 72 ],[ 4, 95 ],[ 5, 100 ],[ 6, 85],[ 7, 95] ]
            },
            {
                label: "Período anterior",
                color: "rgba(255, 170, 44, 0.5)",
                data: [ [ 1, 60 ],[ 2, 55 ],[ 3, 83 ],[ 4, 88 ],[ 5, 90 ],[ 6, 95],[ 7, 80] ]
            }];
           $.plot( $( "#chart1" ), chart1Data, chart1Options );
       },
       chart2: function(){

        // first chart
        var chart2Options = {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: false
                }
            },
             yaxes: [ {
                 min: 50,
                 max: 100
                 }, {
                     position: 'right'
                 } ],
            grid: {
                hoverable: true
            },
            legend: {
                show: false
            },
            grid: {
                color: "#fff",
                hoverable: true,
            },
            tooltip: {
                show: true,
                content: "%s | x: %x; y: %y"
            }
        };
        var chart2Data = [
         {
             label: "line2",
             color: "#000000",
             data: [ [ 12, 75 ],[ 13, 90 ],[ 14, 72 ],[ 15, 88 ],[ 16, 70 ],[ 17, 95],[ 18, 80],[ 19, 60],[ 20, 65] ]
         }];
        $.plot( $( "#chart2" ), chart2Data, chart2Options );
    },
    chart3: function(){

        // first chart
        var chart3Options = {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: false
                }
            },
             yaxes: [ {
                 min: 50,
                 max: 100
                 }, {
                     position: 'right'
                 } ],
            grid: {
                hoverable: true
            },
            legend: {
                show: false
            },
            grid: {
                color: "#fff",
                hoverable: true,
                borderWidth: 0,
                backgroundColor: 'transparent'
            },
            tooltip: {
                show: true,
                content: "%s | x: %x; y: %y"
            }
        };
        var chart3Data = [
         {
             label: "Whatsapp",
             color: "#04B816",
             data: [ [ 12, 80 ],[ 13, 90 ],[ 14, 70 ],[ 15, 80 ],[ 16, 72 ],[ 17, 92],[ 18, 80],[ 19, 60],[ 20, 65] ]
         },
         {
            label: "Instagran",
            color: "#FF6B00",
            data: [ [ 12, 70 ],[ 13, 72 ],[ 14, 92 ],[ 15, 70 ],[ 16, 87 ],[ 17, 88],[ 18, 82],[ 19, 70],[ 20, 80] ]
        },
        {
            label: "Facebook",
            color: "#4D78CC",
            data: [ [ 12, 60 ],[ 13, 100 ],[ 14, 65 ],[ 15, 90 ],[ 16, 98 ],[ 17, 95],[ 18, 78],[ 19, 90],[ 20, 100] ]
        }];
        $.plot( $( "#chart3" ), chart3Data, chart3Options );
    },
    chart4: function(){

        // first chart
        var chart4Options = {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: false
                }
            },
             yaxes: [ {
                 min: 50,
                 max: 100
                 }, {
                     position: 'right'
                 } ],
            grid: {
                hoverable: true
            },
            legend: {
                show: false
            },
            grid: {
                color: "#fff",
                hoverable: true,
                borderWidth: 0,
                backgroundColor: 'transparent'
            },
            tooltip: {
                show: true,
                content: "%s | x: %x; y: %y"
            }
        };
        var chart4Data = [
         {
             label: "line4",
             color: "#000000",
             data: [ [ 12, 75 ],[ 13, 90 ],[ 14, 72 ],[ 15, 88 ],[ 16, 70 ],[ 17, 95],[ 18, 80],[ 19, 60],[ 20, 65] ]
         }];
        $.plot( $( "#chart4" ), chart4Data, chart4Options );
    }
   };

   $(document).ready(function() {
       SufeeAdmin.chart1();
       SufeeAdmin.chart2();
       SufeeAdmin.chart3();
       SufeeAdmin.chart4();
    });

   })(jQuery);