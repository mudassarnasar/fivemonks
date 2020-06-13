$(document).ready(function () {

   function calculateSum() {

      var sumTotal = 0;
      $('table tbody tr').each(function () {
         var $tr = $(this);


         if ($tr.find('input[type="checkbox"]').is(':checked')) {


            var $columns = $tr.find('td').next('td').next('td');

            var $Qnty = parseInt($tr.find('input[type="text"]').val());

            var $Cost = parseInt($columns.next('td').html());

            sumTotal += $Qnty * $Cost;
         }
      });

      $("#price").html(sumTotal);

   }

   $("input[type='text']").keyup(function() {
      calculateSum();
 
   });
   
    $("input[type='checkbox']").change(function() {
      calculateSum();
 
   });




});