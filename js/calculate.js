$(document).ready(function(){
    
    $('#nav-total-tab').click(function(e) {
        $('input[type="checkbox"]').each(function(){
            if($(this).prop("checked") == true){
                var price = $('input[type="text"]').val();
                console.log(price);
                console.log("Checkbox is checked.");
            }
            else if($(this).prop("checked") == false){
                console.log("Checkbox is unchecked.");
            }
        });


    });


    function calculateSum(){
        alert('functoin called');
        var sumTotal=0;
           $('table tbody tr').each(function() {
             var $tr = $(this);
       
             if ($tr.find('input[type="checkbox"]').is(':checked')) {
                 
               var $columns = $tr.find('td').next('td').next('td');
                
                var $Qnty=parseInt($tr.find('input[type="text"]').val());
        var $Cost=parseInt($columns.next('td').html().split('$')[1]);
                sumTotal+=$Qnty*$Cost;
             }
           });
       
              $("#totalbill").val(sumTotal);
              
       }
       
        //  $('#sum').on('click', function() {
            
        //    calculateSum();
        //  });
       
        //  $("input[type='text']").keyup(function() {
        //     calculateSum();
       
        //  });
         
        //   $("input[type='checkbox']").change(function() {
        //     calculateSum();
       
        //  });







 
});