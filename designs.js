// Select color input
// Select size input
​
// When size is submitted by the user, call makeGrid()
$(document).ready(function() {
            $('#sizePicker').submit(function (event) {
                event.preventDefault();

            var rows=$('#inputHeight').val();
            var columns=$('#inputWeight').val();
            makeGrid(rows, columns);
            });


            function makeGrid(a,b) {
             $('tr').remove();

             for (var x = 1; x <= a; x++){
                 $('table').append("<tr></tr>");
                for(var y = 1; y <= b; y++){
                   $( 'tr:last').append("<td></td>");
                }
              }

          $('td').click(function addColor() {
                var color = $('#colorPicker').val();

              if ($(this).attr('style')){
                $(this).removeAttr('style');
             } else {
                       $(this).attr('style', 'background-color:' + color);
              }
            })

          
           }


});