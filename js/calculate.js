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
 
});