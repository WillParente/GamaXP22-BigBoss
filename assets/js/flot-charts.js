(function($){

    "use strict"; // Start of use strict

    var SufeeAdmin = {

       line2Flot: function(){

           // first chart
           var chart1Options = {
               series: {
                   lines: {
                       show: true
                   },
                   points: {
                       show: false
                   }
               },
               xaxis: {
                   mode: "time",
                   timeformat: "%m/%d",
                   minTickSize: [ 1, "day" ]
               },
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
                   content: "y: %y"
               }
           };
           var chart1Data = {
               label: "chart1",
               color: "#007BFF",
               data: [
             [ 1354840000000, 6340 ],
             [ 1354840000000, 6340 ],
             [ 1355223600000, 6368 ],
             [ 1355306400000, 6374 ],
             [ 1355487300000, 6388 ],
             [ 1355571900000, 6400 ]
           ]
           };
           $.plot( $( "#chart1" ), [ chart1Data ], chart1Options );
       }
   };

   $(document).ready(function() {
       SufeeAdmin.line2Flot();});

   })(jQuery);